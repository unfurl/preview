


# Unfurl

  
Lightning fast, resuable and framework agnostic component, for providing link previews in several modes and layouts.

## Getting Unfurl Free API Token

  

* Signup on <https://unfurl.io/> or Signin if you are already registered.

  

* After login, from the dashboard navigate to Generate/Manage your Api Tokens here.

  

* Next, in Create API Token section assign a token name and click on create.

  

> Note: Please save the generated api token, it is only displayed for one time.

  

## Preview Your URL & setup design modes for preview

 

 ### Installation 
 -  **Using NPM**
	 - `npm install @unfurl/elements`
 - **Using Yarn**
	 -  `yarn install @unfurl/elements`

### Getting Started
Once installation is done, it can be imported and configured as follows.

- `import '@unfurl/elements'`
- **Typescript**
```typescript
window.Unfurl.setConfig({  
    apiToken: 'API_TOKEN'  
  });
```
- **For other environments**
```javascript
Unfurl.setConfig({  
    apiToken: 'API_TOKEN'  
  });

```

* Paste your URL in `<unfurl-preview url="Your URL">` tag.

### Selecting design mode for Unfurl preview URL

  Currenlty Unfurl provides 3 modes and 2 layouts, which can be implmented using props.


* **Simple Mode**

![simple](https://user-images.githubusercontent.com/11289133/73384189-c7ce6d00-42f0-11ea-9036-0d59d1f51b0f.PNG)

  

* **Compact Mode**

![compact](https://user-images.githubusercontent.com/11289133/73383958-58587d80-42f0-11ea-8602-cba502125913.PNG)

  

* **Detailed Mode**

![detailed](https://user-images.githubusercontent.com/11289133/73384057-82aa3b00-42f0-11ea-8557-42e8bfebd203.PNG)

  * **List Layout**
	  This layout enables unfurl-preview to takes full width of the application and also making it responsive.
	  
  * **Grid Layout**
	  This layout enables unfurl-preview to take only half portion of screen and reduces font sizes to keep responsiveness.

### Select Unfurl design modes and layouts

```html

<unfurl-preview url="Paste your link here" mode="compact | simple | detailed" layout="list | grid"></unfurl-preview>
```

* Set mode property `mode="Your desired style"` to `simple or compact or detailed` in `<unfurl-preview>` tag.

