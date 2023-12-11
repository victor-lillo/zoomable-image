import { describe, expect, expectTypeOf, test, vi, beforeAll, beforeEach } from 'vitest'
import { initZoomableImages, zoomImage } from '../src/index'

beforeAll(() => {
  // Waiting for this PR merge 👉🏽 https://github.com/jsdom/jsdom/pull/3403
  // But... until it... 👉🏽 https://github.com/jsdom/jsdom/issues/3294#issuecomment-1196577616
  HTMLDialogElement.prototype.show = vi.fn()
  HTMLDialogElement.prototype.showModal = vi.fn()
  HTMLDialogElement.prototype.close = vi.fn()
})

beforeEach(() => {
  document.body.innerHTML = `
      <img
        data-zoomable-image
        class="image"
        src="src/stories/assets/moon.webp"
        alt=""
      />`
})

describe('Named exports works properly', () => {
  test('initZoomableImages', () => {
    expectTypeOf(initZoomableImages).toBeFunction()
  })

  test('zoomImage', () => {
    expectTypeOf(zoomImage).toBeFunction()
  })
})

describe('zoomImage works properly', () => {
  test('creates a dialog', () => {
    const image = document.querySelector('img')!
    zoomImage(image)
    const dialog = document.querySelector('dialog')
    expect(dialog).toBeTruthy()
  })

  test('adds expected class in dialog', () => {
    const image = document.querySelector('img')!
    zoomImage(image)
    const dialog = document.querySelector('dialog')
    expect(dialog?.classList.contains('zi')).toBeTruthy()
  })

  test('creates an image', () => {
    const image = document.querySelector('img')!
    zoomImage(image)
    const dialog = document.querySelector('dialog')
    const modalImage = dialog?.querySelector('img')
    expect(modalImage).toBeTruthy()
  })

  test('creates a button', () => {
    const image = document.querySelector('img')!
    zoomImage(image)
    const dialog = document.querySelector('dialog')
    const button = dialog?.querySelector('button')
    expect(button).toBeTruthy()
  })

  test('uses the "data-zoomable-hd" attribute as src', () => {
    const hdImageSrc = 'src/stories/assets/drop-hd.jpg'
    document.body.innerHTML = `
    <img
    data-zoomable-image
    src="src/stories/assets/moon.webp"
    data-zoomable-hd="${hdImageSrc}"
    alt=""
    />`
    const image = document.querySelector('img')!
    zoomImage(image)
    const dialogImage = document.querySelector('dialog img') as HTMLImageElement
    expect(dialogImage?.src.includes(hdImageSrc)).toBeTruthy()
  })
})

describe('initZoomableImages works properly', () => {
  test("doesn't create dialog on init", () => {
    initZoomableImages()
    const dialog = document.querySelector('dialog')
    expect(dialog).toBeNull()
  })

  test('creates dialog on click', () => {
    initZoomableImages()
    const img = document.querySelector('img')
    img?.click()
    const dialog = document.querySelector('dialog')
    expect(dialog).toBeTruthy()
  })

  test("doesn't create dialog on click changing data attributes", () => {
    const customSelector = 'data-random-selector'
    document.body.innerHTML = `
    <img
    ${customSelector}
    class="image"
    src="src/stories/assets/moon.webp"
    alt=""
    />`
    initZoomableImages()
    const img = document.querySelector('img')
    img?.click()
    const dialog = document.querySelector('dialog')
    expect(dialog).toBeNull()
  })
})

describe('a11y', () => {
  test('passes the alt attribute to the generated image', () => {
    const altText = 'My alt text'
    document.body.innerHTML = `
    <img
      data-zoomable-image
      src="src/stories/assets/moon.webp"
      alt="${altText}"
    />`
    const image = document.querySelector('img')!
    zoomImage(image)
    const dialogImage = document.querySelector('dialog img') as HTMLImageElement
    expect(dialogImage?.alt === altText).toBeTruthy()
  })

  test('add hidden text in button', () => {
    const image = document.querySelector('img')!
    zoomImage(image)
    const dialog = document.querySelector('dialog')!
    const button = dialog.querySelector('button')
    const a11yText = button?.textContent
    expect(a11yText === 'Close zoomed image').toBeTruthy()
  })
})
