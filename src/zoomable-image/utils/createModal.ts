import closeAfterAnimation from './closeAfterAnimation'
import getImageData from './getImageData'
import getNewSize from './getNewSizes'

const SCROLLOFFSET = 150

export default function createModal({
  $clickedImage,
  scrollOffset = SCROLLOFFSET,
}: {
  $clickedImage: HTMLImageElement
  scrollOffset?: number
}) {
  const { alt, currentSrc, naturalHeight, naturalWidth } = getImageData($clickedImage)
  const { newHeight, newWidth } = getNewSize({ naturalHeight, naturalWidth })

  const $modal = document.createElement('dialog')
  $modal.classList.add('zi')

  const $image = document.createElement('img')
  $image.setAttribute('src', currentSrc)
  $image.classList.add('zi-image')
  $image.alt = alt ? alt : ' '
  $image.style.width = newWidth
  $image.style.height = newHeight

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
  $modal.append($image, $closeButton)
  document.body.append($modal)

  $closeButton?.addEventListener('click', () => {
    closeAfterAnimation($modal)
  })

  $modal.showModal()

  function handleScroll() {
    const currentScroll = document.documentElement.scrollTop
    if (currentScroll > scrollOffset) closeAfterAnimation($modal)
  }

  document.addEventListener('scroll', handleScroll)

  $modal.addEventListener('close', () => {
    $modal.remove()
    document.removeEventListener('scroll', handleScroll)
  })
}
