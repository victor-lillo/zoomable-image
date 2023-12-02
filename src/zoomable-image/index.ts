import './styles.css'
import createCloseAnimation from './createCloseAnimation'
import getImageData from './getImageData'
import getNewSize from './getNewSizes'

const DATA = 'data-zoomable-image'

function createModal($originalImage: HTMLImageElement) {
  const { alt, currentSrc, naturalHeight, naturalWidth } = getImageData($originalImage)

  const { newHeight, newWidth } = getNewSize({ naturalHeight, naturalWidth })

  const $modal = document.createElement('dialog')
  $modal.classList.add('zoom-modal')

  const $image = document.createElement('img')
  $image.setAttribute('src', currentSrc)
  $image.classList.add('zoom-modal-image')
  $image.alt = alt ? alt : ' '
  $image.style.width = newWidth
  $image.style.height = newHeight

  $modal.addEventListener('click', (e) => {
    const $clickedElement = e.target as HTMLDialogElement
    if ($clickedElement.matches('dialog')) closeAfterAnimation()
  })

  const $closeButton = document.createElement('button')
  $closeButton.classList.add('zoom-modal-button')
  $closeButton.innerHTML = `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"><path stroke="none" d="M0 0h24v24H0z"/><path d="M18 6 6 18M6 6l12 12"/></svg>`
  $closeButton?.addEventListener('click', () => {
    closeAfterAnimation()
  })
  $modal.append($image, $closeButton)
  document.body.append($modal)

  const animation = createCloseAnimation($modal)

  function closeAfterAnimation() {
    animation.play()
    animation.onfinish = () => {
      $modal?.close()
    }
  }

  $modal.showModal()
  document.addEventListener('scroll', closeAfterAnimation)

  $modal.addEventListener('close', () => {
    $modal.remove()
    document.removeEventListener('scroll', closeAfterAnimation)
  })
}

function handleClick(e: Event) {
  const element = e.target as HTMLImageElement
  createModal(element)
}

export default function init({ dataSelector = DATA }: { dataSelector?: string } = {}) {
  const $images = document.querySelectorAll(`img[${dataSelector}]`)
  $images.forEach(($image) => {
    $image.addEventListener('click', handleClick)
  })
}
