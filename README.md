# Zoomable Image 🔍🖼️

> Light and customizable JavaScript library (`~1Kb`) for creating a zoom image modal.

With this library, we can easily create performant zoomed images on click or programmatically.

## Features 🎯

- 📱 **Responsive:** dynamically scale according to viewport.
- ⚖️ **Lightweight:** approximately `1 kb`.
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

This library works with `image` and `picture` elements.

- The `alt` attribute will be transferred to the zoomed image.

- The `src` attribute will generate the zoomed image. When using a `picture` element, the library will utilize the `currentSrc`.

- Within your markup, you have the option to include a `data-zoomable-hd` attribute with an alternative image `src`. This image will replace the original image `src`. This is useful when you want to show a **better quality image** in the zoomed one.

### `initZoomableImages(InitOptions)`

> Gzipped weight: `1.27 kB`

This method will add **click event listeners** to the images in the document that contains the `data-zoomable-image` attribute.

Moreover, it will pre-fetch images with the attribute `data-zoomable-hd` upon `mouseenter`, `touchstart`, and `focus` events, enhancing the overall user experience.

It takes an object `InitOptions` as a parameter, which may contain the following keys:

- **`scrollOffset`** _Number_: **Optional**. The scroll distance needed to close the modal. Default value: `150`.

```js
import 'zoomable-image/dist/style.css'
import { initZoomableImages } from 'zoomable-image'

// And when your document is ready...
initZoomableImages()

// Or with custom options..
initZoomableImages({
  scrollOffset: 300,
})
```

Your HTML code may be like this one:

```html
<img
  data-zoomable-image
  data-zoomable-hd="../assets/high-definition.jpg"
  class="image"
  src="../assets/low-definition.webp"
  alt=""
/>
```

### `zoomImage(imageToZoom, ZoomOptions)`

> Gzipped weight: `1 kB`

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

| Custom Property              |           Default Value           | Definition                           |
| ---------------------------- | :-------------------------------: | ------------------------------------ |
| `--zi-backdrop-color`        |            `#000000e4`            | Color of the backdrop                |
| `--zi-button-background`     |             `#bcbcbc`             | Background color of the button       |
| `--zi-button-color`          |              `black`              | Text color of the button             |
| `--zi-button-outline`        |        `4px solid #9000a3`        | Outline property style of the button |
| `--zi-button-position-right` | Desktop: `-16px`. Mobile: `-10px` | Right position of the button         |
| `--zi-button-position-top`   | Desktop: `-16px`. Mobile: `-10px` | Top position of the button           |
| `--zi-image-max-height`      |              `92vh`               | Maximum image height                 |
| `--zi-image-max-width`       |              `92vw`               | Maximum image width                  |
| `--zi-image-outline`         |              `none`               | Outline property style of the image  |

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
