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

#### accessibilityFeatures
This API to manage Chrome's accessibility features. This API to get and set individual accessibility features. AccessibilityFeatures.read permission to get the value and AccessibilityFeatures.modify permission to set the value and clear the value.

**Permissions**: accessibilityFeatures.modify, accessibilityFeatures.read


**Properties**

- **All OS**
    * animationPolicy

- **Chrome only**
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