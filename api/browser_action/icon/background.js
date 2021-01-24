chrome.browserAction.onClicked.addListener((tab) => {
    // Set the Icon
    chrome.browserAction.setIcon({ path: "./icon.png", tabId: tab.id }, () => console.log("New icon has been updated"));
});