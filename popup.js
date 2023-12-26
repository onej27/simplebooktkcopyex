document.getElementById('copyButton').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs && tabs.length > 0) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'copyText' }, function (response) {
                // Handle the response if needed
                console.log(response);
            });
        } else {
            console.error('No active tabs found.');
        }
    });
});
