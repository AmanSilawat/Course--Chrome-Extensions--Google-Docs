chrome.browserAction.onClicked.addListener(tab => {
	// To access extension
	chrome.browserAction.enable(tab.id, () => {
		console.log('enable');
		chrome.browserAction.setBadgeText({ tabId: tab.id, text: 'start' });
	});

	// To prevent extension from access
	chrome.browserAction.disable(tab.id, () => {
		console.log('disable');
	});
});
