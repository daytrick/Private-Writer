// To run on all URLs: https://developer.chrome.com/docs/extensions/develop/concepts/match-patterns

////////// CLASS //////////

class Code {

    // Attributes
    /** 
     * Encode a given string. 
     * @param text the string
     * @returns the encoded string
     * */
    encode;
    /** 
     * Decode a given string. 
     * @param text the string
     * @returns the decoded string
    */
    decode;

    /**
     * Create a code.
     * 
     * @param {Function} encode 
     * @param {Function} decode 
     */
    constructor(encode, decode) {

        this.encode = encode;
        this.decode = decode;

    }

    /**
     * Apply encoding/decoding to every character in a string.
     * @param {Function} func encode or decode
     * @param {String} string string to change
     * @returns 
     */
    static doPerChar(func, string) {
        
        let newText = "";
        for (const c of string) {
            newText += func(c);
        }
        return newText;

    }

}

////////// INSTANCES //////////

const MIRROR = new Code(
    (plaintext) => {

        return Code.doPerChar((c) => {

            let start, end;

            if (/[a-z]/.test(c)) {
                start = "a";
                end = "z";
            }
            else if (/[A-Z]/.test(c)) {
                start = "A";
                end = "Z";
            }
            else {
                return c;
            }

            let diff = end.charCodeAt(0) - c.charCodeAt(0);
            let newC = start.charCodeAt(0) + diff;
            return String.fromCharCode(newC);

        }, plaintext);

    },
    (ciphertext) => {

        
        return Code.doPerChar((c) => {

            let start, end;

            if (/[a-z]/.test(c)) {
                start = "a";
                end = "z";
            }
            else if (/[A-Z]/.test(c)) {
                start = "A";
                end = "Z";
            }
            else {
                return c;
            }

            let diff = end.charCodeAt(0) - c.charCodeAt(0);
            let newC = start.charCodeAt(0) + diff;
            return String.fromCharCode(newC);

        }, ciphertext);

    }
);

////////// SET CURRENT CODE //////////

var currentCode = MIRROR;

////////// CODING //////////

/**
 * Encode all text nodes.
 */
window.onload = () => {

    // Get all text nodes
    for (const textNode of getTextNodesIterator(document.body)) {
        
        // Encode them
        let content = textNode.textContent;
        let newContent = currentCode.encode(content);
        textNode.ogValue = content;
        textNode.textContent = newContent;

    }

}

/**
 * Get an iterator for text nodes.
 * 
 * Copied from: https://stackoverflow.com/a/44516001
 * 
 * @param {HTMLElement} el 
 * @returns text node iterator
 */
function getTextNodesIterator(el) { // Returns an iterable TreeWalker
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    walker[Symbol.iterator] = () => ({
        next() {
            const value = walker.nextNode();
            return {value, done: !value};
        }
    });
    return walker;
}