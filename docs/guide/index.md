# Introduction

Intl Number Input allows an easy input of formatted numbers based on the [ECMAScript Internationalization API (Intl.NumberFormat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat).

## Installation

Install the npm package:

```bash
npm install intl-number-input
# or
yarn add intl-number-input
```

## Usage

Create a `NumberInput` instance by passing an `<input type="text">` element and the [options](../api/intl-number-input.numberinputoptions.html) of your choice:

```javascript
import { NumberInput } from 'intl-number-input'

const numberInput = new NumberInput({
  el: document.querySelector('input'),
  options: {
    // see API reference
  }
})

// set initial value
numberInput.setValue(1234)
```

Edit example on [Stackblitz](https://stackblitz.com/edit/typescript-wzvyz7?file=index.ts).
