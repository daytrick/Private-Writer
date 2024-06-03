const PRIVATE_WRITER_ON = "privateWriterOn";

const CURRENT_CODE = document.getElementById("currentCode");
const TOGGLE = document.getElementById("toggle");


/**
 * Load previous state from local chrome storage.
 */
window.onload = () => {
    // How to get stuff from local chrome storage from: https://stackoverflow.com/a/38261950

    // TODO: current code
    CURRENT_CODE.innerText = currentCode.name;

    // Toggle state
    chrome.storage.local.get(PRIVATE_WRITER_ON, (data) => {

        if (data[PRIVATE_WRITER_ON] != undefined) {
            TOGGLE.checked = data[PRIVATE_WRITER_ON];
        }
        else {
            TOGGLE.checked = false;
        }

    });

}

/**
 * Store toggle state in local chrome storage.
 */
TOGGLE.addEventListener('change', function() {

    // How to set stuff in local chrome storage from: https://developer.chrome.com/docs/extensions/reference/api/storage#examples
    chrome.storage.local
        .set({[PRIVATE_WRITER_ON]: this.checked})
        .then((res) => {
            console.log("Set successfully: " + res);
        });

});