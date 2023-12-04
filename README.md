# Zoomable Image 🔍🖼️

> Light and customizable JavaScript library (`~1Kb`) for creating a zoom image modal.

With this library, we can easily created performant zoomed images on click or programmatically.

## Features

- 📱 **Responsive:** dynamically scale according to viewport.
- ⚖️ **Lightweight:** less than `1kb`.
- 🚀 **Performant:** optimized to be fast.
- 🔎 **Flexibility:** select the images you want to be zoomable or do it programmatically.
- 🌈 **Accessible:** designed and conceived to leave no one behind.
- 🖱 **Mouse, keyboard and gesture friendly:** click out the image, click the close button, press `ESC` or scroll to close the zoom.
- 🕵🏽 **Customization:** set your scroll offset, image sizes, backdrop color & close button styles.
- 🌐 **Framework agnostic:** works with React, Vue, Svelte, Solid, MDX, etc.

## Installation ⚙️

The module is available on the [npm](https://www.npmjs.com) registry.

```sh
npm install zoomable-image
```

## API 🤖

### `initZoomableImages(InitOptions)`

> Gzipped weight: `1KB`

This method will add **click event listeners** to the images in the document that contains the `dataSelector` attribute.

It takes an object `InitOptions` as a parameter, which may contain the following keys:

- **`dataSelector`** _String_: **Optional**. A string representing the data selector to use. Default value: `data-zoomable-image`.
- **`scrollOffset`** _Number_: **Optional**. The scroll distance needed to close the modal. Default value: `150`.

```js
import 'zoomable-image/dist/style.css'
import { initZoomableImages } from 'zoomable-image'

// And when your document is ready...
initZoomableImages()

// Or with custom options..
initZoomableImages({
  dataSelector: 'data-custom-selector',
  scrollOffset: 300,
})
```

### `zoomImage(imageToZoom, ZoomOptions)`

> Gzipped weight: `948B`

This method will **zoom the image when used**. It generates a `dialog` HTML element and appends it as the **next sibling** to the original image.

It takes 2 parameters:

- **`image`** _HTMLImageElement_: **Required**. The HTML Image Element that will be zoomed.
- **`ZoomOptions`** _ZoomOptions_: **Optional**. Options to configure the image zoom.
  - **`scrollOffset`** _number_: **Optional**. The scroll distance needed to close the modal. Default value: `150`.

```js
import 'zoomable-image/dist/style.css'
import { zoomImage } from 'zoomable-image'

const myImage = document.getElementById('image-to-zoom')

// I am opening a modal with this image
zoomImage(myImage)

// Or with custom options..
zoomImage(myImage, { scrollOffset: 300 })
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
| `--zi-image-max-height`      |       `92vh`        | Maximum image height                 |
| `--zi-image-max-width`       |       `92vw`        | Maximum image width                  |
| `--zi-image-outline`         |       `none`        | Outline property style of the image  |

> [!NOTE]
> Why custom properties?
>
> ---
>
> Deriving settings to CSS helps maintain a **lighter bundle weight**.
>
> By adopting this approach, we invoke these methods just once and integrate the **custom properties within the desired scope**. Remember the new image will be created as the next sibling to the original image.
>
> This method offers increased flexibility and responsiveness.

## Personal recommendation 📌

To improve the Core Web Vitals of the page, I recommend **deferring the styles** of this library since they are non-critical.
