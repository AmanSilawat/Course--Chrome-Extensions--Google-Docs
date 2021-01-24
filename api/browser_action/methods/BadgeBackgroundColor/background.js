chrome.browserAction.onClicked.addListener(tab => {
	// set The text of the badge
	chrome.browserAction.setBadgeText({ tabId: tab.id, text: 'color' });

	// set The backgroundColor of the badge
	chrome.browserAction.setBadgeBackgroundColor({ color: [22, 10, 33, 10], tabId: tab.id }, () => {
		console.log('new color has been set');
	});

	// get The backgroundColor of the badge
	chrome.browserAction.getBadgeBackgroundColor({ tabId: tab.id }, color_array => {
		console.log('new color is : ' + color_array);
	});
});
