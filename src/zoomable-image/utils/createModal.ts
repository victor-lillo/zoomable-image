import closeAfterAnimation from './closeAfterAnimation'
import getImageData from './getImageData'
import getNewSize from './getNewSizes'

const SCROLLOFFSET = 150

type ZoomOptions = {
  scrollOffset?: number
}

export default function createModal($image: HTMLImageElement, options: ZoomOptions = {}) {
  const { scrollOffset = SCROLLOFFSET } = options
  const initialScroll = window.scrollY

  const { alt, currentSrc, naturalHeight, naturalWidth } = getImageData($image)
  const { newHeight, newWidth } = getNewSize({ naturalHeight, naturalWidth })

  const $modal = document.createElement('dialog')
  $modal.classList.add('zi')
  $modal.style.marginTop = `${initialScroll}px`

  const $dialogImage = document.createElement('img')
  $dialogImage.setAttribute('src', currentSrc)
  $dialogImage.classList.add('zi-image')
  $dialogImage.alt = alt ? alt : ' '
  $dialogImage.style.width = newWidth
  $dialogImage.style.height = newHeight

  $modal.addEventListener('click', (e) => {
    const $clickedElement = e.target as HTMLDialogElement
    if ($clickedElement.matches('dialog')) closeAfterAnimation($modal)
  })

  const $closeButton = document.createElement('button')
  const $accessibilityTag = document.createElement('span')
  $accessibilityTag.classList.add('zi-visually-hidden')
  $accessibilityTag.textContent = 'Close zoomed image'
  $closeButton.classList.add('zi-button')
  $closeButton.innerHTML = `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"><path stroke="none" d="M0 0h24v24H0z"/><path d="M18 6 6 18M6 6l12 12"/></svg>`
  $closeButton.append($accessibilityTag)
  const $imageWrapper = document.createElement('div')
  $imageWrapper.append($dialogImage, $closeButton)
  $modal.append($imageWrapper)
  $image.parentNode!.insertBefore($modal, $image.nextSibling)

  $closeButton?.addEventListener('click', () => {
    closeAfterAnimation($modal)
  })

  $modal.showModal()

  function handleScroll() {
    const currentScroll = window.scrollY
    const distanceScrolled = Math.abs(currentScroll - initialScroll)
    if (distanceScrolled > scrollOffset) {
      closeAfterAnimation($modal)
      document.removeEventListener('scroll', handleScroll)
    }
  }

  document.addEventListener('scroll', handleScroll)

  $modal.addEventListener('close', () => {
    $modal.remove()
  })
}
