const CURRENT_CODE = document.getElementById("currentCode");
const TOGGLE = document.getElementById("toggle");

window.onload = () => {
    CURRENT_CODE.innerText = currentCode.name;
}

TOGGLE.addEventListener('change', function() {
    chrome.storage.local["on"] = this.checked;
    console.log("Toggle state: " + chrome.storage.local["on"]);
});