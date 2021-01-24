chrome.browserAction.onClicked.addListener(tab => {
	// set The text of the badge
	chrome.browserAction.setBadgeText({ tabId: tab.id, text: 'color' });
});
