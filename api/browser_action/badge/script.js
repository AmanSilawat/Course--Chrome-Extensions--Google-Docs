chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.browserAction.setBadgeText({ tabId: tab.id, text: 'Badge' }, () => {
		console.log('done');
	});
});
