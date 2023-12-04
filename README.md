# Zoomable Image 🔍🖼️

> Light JavaScript library (`<1Kb`) for creating a zoom image modal on click.

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

> Gzipped weight: **946B**

This method will add **click event listeners** to the images in the document that contains the `dataSelector` attribute.

It takes an object `options` as a parameter, which may contain the following keys:

- **`dataSelector`** _String_: **Optional**. A string representing the data selector to use. Default value: `data-zoomable-image`.
- **`scrollOffset`** _Number_: **Optional**. A number representing the scroll distance needed to close the modal. Default value: `150`.

```js
import 'zoomable-image/dist/style.css'
import { initZoomableImages } from 'zoomable-image'

// And when your document is ready...
initZoomableImages()

// Or with custom options...
initZoomableImages({
  dataSelector: 'data-custom-selector',
  scrollOffset: 300,
})
```

### `zoomImage(imageToZoom)`

> Gzipped weight: **868B**

This method will **zoom the image when used**.

It takes an object `options` as a parameter, which may contain the following keys:

- **`$image`** _HTMLImageElement_: **Required**. The HTML Image Element that will be zoomed.
- **`scrollOffset`** _Number_: **Optional**. A number representing the scroll distance needed to close the modal. Default value: `150`.

```js
import 'zoomable-image/dist/style.css'
import { zoomImage } from 'zoomable-image'

const myImage = document.getElementById('image-to-zoom')

// I am opening a modal with this image
zoomImage({ $image: myImage })
```

## Visual settings 🎨

For customizing the UI, you can create these `custom properties` and add them in your `CSS root`. They will be used instead of the default value.

| Custom Property              |    Default Value    | Definition                           |
| ---------------------------- | :-----------------: | ------------------------------------ |
| `--zi-backdrop-color`        |     `#000000e4`     | Color of the backdrop                |
| `--zi-button-background`     |      `#bcbcbc`      | Background color of the button       |
| `--zi-button-color`          |       `black`       | Text color of the button             |
| `--zi-button-outline`        | `4px solid #9000a3` | Outline property style of the button |
| `--zi-button-position-right` |       `-16px`       | Right position of the button         |
| `--zi-button-position-top`   |       `-16px`       | Top position of the button           |
| `--zi-image-border`          |       `none`        | Border property style of the image   |
| `--zi-image-max-height`      |       `92vh`        | Maximum image height                 |
| `--zi-image-max-width`       |       `92vw`        | Maximum image width                  |

#### Why custom properties?

Deriving settings to CSS helps maintain a **lighter bundle weight**.

By adopting this approach, we invoke these methods just once and integrate the **custom properties within the desired scope**. This method offers increased flexibility and responsiveness.

## Personal recommendation 📌

Defer this library styles
