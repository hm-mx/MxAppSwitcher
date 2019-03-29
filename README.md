# Mendix App Switcher

## Install

```sh
// using yarn
$ yarn add mxappswitcher

// using npm
$ npm install --save mxappswitcher

```

## Usage

```js
import MxAppSwitcher from "mxappswitcher";

// 1. with toggle element
MxAppSwitcher({
      toggleElement: SOME_TOGGLE_BUTTON,
      serviceURL: 'https://appswitcherservice-accp.mendixcloud.com/',
      idToken: SOME_ID_TOKEN,
      zIndex: '1001', //don't overlay mx popups & modals
      customStyle: '*{color: purple;}',
      hasCreateAppButton: true,
      popupPlacement: 'left-end', // optional, default: 'auto-end'
      onCreate: () => console.log('created!');
}).init();


// 2. get the element and append it your dom

const myAppSwicher = MxAppSwitcher({
      serviceURL: 'https://appswitcherservice-accp.mendixcloud.com/',
      idToken: SOME_ID_TOKEN,
      zIndex: '1001', //don't overlay mx popups & modals
      customStyle: '*{color: purple;}',
      hasCreateAppButton: true,
      popupPlacement: 'left-end', // optional, default: 'auto-end'
      onCreate: () => console.log('created!');
}).init().element;

document.body.appendChild(myAppSwicher);


```
