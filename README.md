# Course--Chrome-Extensions--Google-Docs

Course Docs: [Google Doc](https://developer.chrome.com/docs/extensions/)

---
## What is a Chrome Extension?

Google Chrome Extensions is created by HTML CSS and JAVASCRIPT. Some functionality can be added by the Chrome APIs. That enables users to customize the Chrome browsing experience.
Google link - [what are extension?](https://developer.chrome.com/docs/extensions/mv3/overview/)

---

## Create Your First Extension

Create `manifest.json` in your directory. every extension require manifest.json file.

```js
{
    "name": "Hello World",
    "description": "First Extension",
    "version": "1.0",
    "manifest_version": 3
}
```

put a `icon.png` in your directory and add *browser_action* your  `manifest.json` file.

```js
{
    "name": "Hello Extensions",
    //...
    "browser_action": {
        "default_popup": "popup.html",
        "default_icon": "icon.png"
    }
}
```

Then make a extension popup view to create in your directory `popup.html`.

```html
<html>
    <body>
        <h1>Hello Extensions</h1>
    </body>
</html>
```
how to start up load your extension visit this link: 
1. goto: more -> more tool -> extensions
2. Check the box next to Developer Mode.
3. Click Load Unpacked Extension and select the directory for your "Hello World Extension" extension.

---

## API Reference
Chrome provides some APIs for special work. Some APIs is synchronous but many APIs is asynchronous. [extension api design](https://www.youtube.com/watch?v=bmxr75CV36A)

**sync**
in sync: extension stop every thing other work.
```js
chrome.extension.getURL('helloWorld.html)
```

**async**
in async: Google Chrome is multi-process architecture. Web pages and JavaScript run in processes. which are not only separate from each other,but also from the main browser process which alone has the ability to do things like read & write to the local file system.
```js
chrome.bookmark.update(40, {title: "New Title"}, callback);
function callback(bookmarkNode) {
    // Do something with the changed bookmark.
}
```
---
### Stable APIs

#### chrome.accessibilityFeatures
This API to manage Chrome's accessibility features. This API to get and set individual accessibility features. AccessibilityFeatures.read permission to get the value and AccessibilityFeatures.modify permission to set the value and clear the value.

**Permissions**: accessibilityFeatures.modify, accessibilityFeatures.read


**Properties**

- **All OS**
    * animationPolicy

- **Chrome OS only**
    - autoclick
    - caretHighlight
    - cursorColor
    - cursorHighlight
    - dockedMagnifier
    - focusHighlight
    - highContrast
    - largeCursor
    - screenMagnifier
    - selectToSpeak
    - spokenFeedback
    - stickyKeys
    - switchAccess
    - virtualKeyboard

##### Chrome settings
The Chrome Setting prototype provides some functions get, set, clear and onChange (event). [type-ChromeSetting](https://developer.chrome.com/docs/extensions/reference/types/#chrome-settings)


##### try this code
Click here for working code: on my git :-  [animationPolicy](https://github.com/AmanSilawat/Course--Chrome-Extensions--Google-Docs/tree/master/api/accessibility-features/animation-policy)
```js
chrome.accessibilityFeatures.animationPolicy.set(
    { value: setting },
    function (callback) {
    // Called at the completion of the set operation.
});
```

___
#### chrome.action

Use this api to put icon on the toolbar and right side of the address bar. Set action on all pages.

all page default state is : default_state: enabled
only current page state is : default_state: disabled

if the extension is disabled, when the icon color appears in gray. In addition to its icon, an action can also have a tooltip, a badge, and a popup.

Manifest **2 version** `manifest.json`
```
{
  "browser_action": { … },
  "page_action": { … }
}

// background.js
chrome.browserAction.onClicked.addListener(tab => { … });
chrome.pageAction.onClicked.addListener(tab => { … });
```

Modified this in manifest **3 version** `manifest.json`
```
{
  "action": { … }
}

// background.js
chrome.action.onClicked.addListener(tab => { … });
```


`The chrome.action API is in development mode.`
The maximum currently-supported manifest version is 2, but this is 3. Certain features may not work as expected.

---

#### chrome.alarms

Use the chrome.alarms API to schedule code to run sometimes or at a specified time in the future.

***Permission***: alarms


**Summary**

Types: Alarm, AlarmCreateInfo

| Types             | PROPERTIES                |
| :---              |    :----                  |
| Alarm             | name                      |
|                   | periodInMinutes           |
|                   | scheduledTime (optional)  |
| AlarmCreateInfo   | delayInMinutes            |
|                   | periodInMinutes           |
|                   | when                      |

| Methods    | Code     |
| :---       |          :--- |
| clear      | chrome.alarms.clear(name: string, callback: function)      |
| clearAll   | chrome.alarms.clearAll(callback: function)       |
| create     | chrome.alarms.create(name?: string, alarmInfo: AlarmCreateInfo)      |
| get        | chrome.alarms.get(name?: string, callback: function)      |
| getAll     | chrome.alarms.getAll(callback: function)      |


**Example**: 
Create `minifest.js` [here this code](https://github.com/AmanSilawat/Course--Chrome-Extensions--Google-Docs/tree/master/api/alarm)
```
{
    "manifest_version": 2,
    "name": "Alarm Type",
    "description": "Alarm example",
    "version": "1.0",
    "browser_action": {
        "default_popup": "main.html"
    },
    "permissions": ["alarms"]
}
```

Create `main.html`
```html
<html>
    <body>
        <!-- more code -->
        <script src="./main.js"></script>
    </body>
</html>
```

Create `main.js`
```js
let alarmClock = {
    createAlarmHandler (e) {}
    clearAllHandler (e) {}
    clearHandler (e) {}
    showList (e) {}
    setup (e) {}
}
// and more...
```