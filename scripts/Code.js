// ////////// CLASS //////////

// class Code {

//     // Attributes
//     /** 
//      * Encode a given string. 
//      * @param text the string
//      * @returns the encoded string
//      * */
//     encode;
//     /** 
//      * Decode a given string. 
//      * @param text the string
//      * @returns the decoded string
//     */
//     decode;

//     /**
//      * Create a code.
//      * 
//      * @param {Function} encode 
//      * @param {Function} decode 
//      */
//     constructor(encode, decode) {

//         this.encode = encode;
//         this.decode = decode;

//     }

//     /**
//      * Apply encoding/decoding to every character in a string.
//      * @param {Function} func encode or decode
//      * @param {String} string string to change
//      * @returns 
//      */
//     doPerChar(func, string) {
        
//         let newText = "";
//         for (const c of string) {
//             newText += func(c);
//         }
//         return newText;

//     }

// }

// ////////// INSTANCES //////////

// const MIRROR = new Code(
//     (plaintext) => {

//         doPerChar((c) => {

//             let start, end;

//             if (/[a-z]/.test(c)) {
//                 start = "a";
//                 end = "z";
//             }
//             else if (/[A-Z]/.test(c)) {
//                 start = "A";
//                 end = "Z";
//             }
//             else {
//                 return c;
//             }

//             let diff = end.charCodeAt(0) - c.charCodeAt(0);
//             let newC = start.charCodeAt(0) + diff;
//             return String.fromCharCode(newC);

//         }, plaintext);

//     },
//     (ciphertext) => {

        
//         doPerChar((c) => {

//             let start, end;

//             if (/[a-z]/.test(c)) {
//                 start = "a";
//                 end = "z";
//             }
//             else if (/[A-Z]/.test(c)) {
//                 start = "A";
//                 end = "Z";
//             }
//             else {
//                 return c;
//             }

//             let diff = end.charCodeAt(0) - c.charCodeAt(0);
//             let newC = start.charCodeAt(0) + diff;
//             return String.fromCharCode(newC);

//         }, ciphertext);

//     }
// );

// ////////// SET CURRENT CODE //////////

// chrome.storage.sync.set({currentCode: MIRROR});