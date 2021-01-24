chrome.browserAction.onClicked.addListener(function (tab) {
	// set The text of the badge
	chrome.browserAction.setBadgeText({ tabId: tab.id, text: 'color' }, () => console.log('New text has been set.'));

	// get The text of the badge
	chrome.browserAction.getBadgeText({ tabId: tab.id }, string => console.log(string));

	// set The backgroundColor of the badge
	chrome.browserAction.setBadgeBackgroundColor({ color: [22, 10, 33, 10], tabId: tab.id }, () => {
		console.log('new color has been set');
	});

	// get The backgroundColor of the badge
	chrome.browserAction.getBadgeBackgroundColor({ tabId: tab.id }, color_array => {
		console.log('new color is : ' + color_array);
	});
});
