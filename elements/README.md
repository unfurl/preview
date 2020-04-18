# Unfurl Elements

Framework agnostic link preview component as seen on <https://unfurl.io/>

## Getting Unfurl Free API Token

* Signup on <https://unfurl.io/> or Signin if you are already registered.

* After login, from the dashboard navigate to Generate/Manage your Api Tokens here.

* Next, in Create API Token section assign a token name and click on create.

> Note: Please save the generated api token, it is only displayed for one time.


## Installation

using npm:

``` bash
$ npm install @unfurl/elements

```

or yarn:

``` bash
$ yarn add @unfurl/elements
```

## Usage

Simply import the package in your entry point , eg: main.js or main.ts

``` ts
import '@unfurl/elements';
```

and then you can use the preview component in your app

```html

<unf-preview mode="detailed" layout="list" device="desktop"></unf-preview>
```

## API

### Props

* mode: 'simple' | 'compact' | 'detailed
* layout: 'list' | 'grid'
* device: 'mobile' | 'desktop'
