chrome.browserAction.onClicked.addListener((tab) => {
    // Set the popup.html file
    chrome.browserAction.setPopup({ tabId: tab.id, popup: 'popup.html' }, () => console.log('Popup has been set.'));
    
    // Get the html file url 
    chrome.browserAction.getPopup({ tabId: tab.id }, (getPopup) => console.log(getPopup));
});