# Zoomable Image 🔍🖼️

> Light JavaScript library for creating a zoom image modal on click.

## Features

- 📱 **Responsive:** dynamically scale according to viewport.
- ⚖️ **Lightweight:** less than `1kb`.
- 🚀 **Performant:** optimized to be fast.
- 🔎 **Flexibility:** select the images you want to be zoomable.
- 🌈 **Accessible:** screen reader and inclusivity designed.
- 🖱 **Mouse, keyboard and gesture friendly:** click out the image, press `ESC` or scroll to close the zoom.
- 🕵🏽 **Customization:** set your sizes, backdrop color & close button styles.
- 🌐 **Framework agnostic:** works with React, Vue, Svelte, Solid, MDX, etc.

## Installation ⚙️

The module is available on the [npm](https://www.npmjs.com) registry.

```sh
npm install zoomable-image
```

## API 🤖

### `initZoomableImages(options)`

This method will add **click event listeners** to the images in the document that contains the `dataSelector` attribute.

It takes an object `options` as a parameter, which may contain the following keys:

- **`dataSelector`** _String_: A string representing the data selector to use. Default value: `data-zoomable-image`.

```js
import { initZoomableImages } from 'zoomable-image'

// And when your document is ready...
initZoomableImages()

// Or with a custom selector...
initZoomableImages({ dataSelector: 'data-custom-selector' })
```

### `zoomImage(imageToZoom)`

This method will **zoom the image when used**.

It takes one parameter:

- **`$image`** _HTMLImageElement_: The HTML Image Element that will be zoomed.

```js
import { zoomImage } from 'zoomable-image'

const myImage = document.getElementById('image-to-zoom')

// I am opening a modal with this image
zoomImage(myImage)
```

## Visual settings 🎨

For customizing the UI, you can create these `custom properties` and add them in your `CSS root`. They will be used instead of the default value.

| Custom Property              |    Default Value    | Definition                       |
| ---------------------------- | :-----------------: | -------------------------------- |
| `--zi-backdrop-color`        |     `#000000e4`     | Color of the backdrop background |
| `--zi-button-background`     |      `#bcbcbc`      | Background color of the button   |
| `--zi-button-color`          |       `black`       | Text color of the button         |
| `--zi-button-outline`        | `4px solid #9000a3` | Border style of the button       |
| `--zi-button-position-right` |       `-16px`       | Right position of the button     |
| `--zi-button-position-top`   |       `-16px`       | Top position of the button       |
| `--zi-image-max-height`      |       `92vh`        | Maximum image height             |
| `--zi-image-max-width`       |       `92vw`        | Maximum image width              |
