# LightningChart<sup>&#174;</sup> JS HTML usage example

This repository showcases how to use the LightningChart<sup>&#174;</sup> JS charting library without a bundler.

## Getting Started

To view the example:

1. Download the LightningChart JS package.
    * The package can be downloaded from [](TODO link to Store).
    * Alternatively, the package can be downloaded using `npm`. To use this method install Node.Js and run `npm install` in the folder containing `package.json`.
2. Extract the package and move the `lcjs.iife.js` file contained inside of it to the `scripts` folder.
    * This step can be skipped if `npm` was used. A `postinstall` script has been setup to do this copy operation.
3. Open the `index.html` file in your browser.

> Note: Only modern browsers are supported. Internet Explorer 11 needs some polyfills that aren't loaded in this example.

## Using the interactive examples

There exists a lot of examples of how to use the LightningChart JS library on our website. https://www.arction.com/lightningchart-js-interactive-examples
These examples can be easily used in html. On the interactive examples page find an example you would like to test and click `Edit this example`.
A new page will open that has all the example code visible. To make the code IIFE bundle compatible click the `CJS` button so that it reads `IIFE`.
After that you can copy the code on the right side of the page. Open the `index.html` file and replace the contents of the script tag that has a comment
instructing to replace the contents with the code you copied from our examples.
