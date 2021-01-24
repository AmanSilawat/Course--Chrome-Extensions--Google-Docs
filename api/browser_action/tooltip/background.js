chrome.browserAction.onClicked.addListener((tab) => {
    // Get the title
    chrome.browserAction.getTitle({ tabId: tab.id }, (str) => { console.log(str) });
    
    // Set the title
    chrome.browserAction.setTitle({ tabId: tab.id, title: "Title has been changed" }, () => { console.log('New title has been set') });
});