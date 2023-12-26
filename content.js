// content.js

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'copyText') {
        copyText();
        sendResponse({ success: true });
    }
});

function copyText() {
    const divElement = document.getElementById('novel_content');
    const range = document.createRange();
    range.selectNode(divElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Text has been copied to the clipboard!');
}