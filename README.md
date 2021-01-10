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

## chrome.accessibilityFeatures