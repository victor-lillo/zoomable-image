import './styles.css'
const DATA = 'data-zoomable-image'

function createModal({ altText, ratio, src }: { altText: string; ratio: number; src: string }) {
  const $modal = document.createElement('dialog')
  $modal.classList.add('zoom-modal')
  if (ratio < 0.4) $modal.classList.add('zoom-modal--horizontal')
  if (ratio > 1.6) $modal.classList.add('zoom-modal--vertical')

  const $image = document.createElement('img')
  $image.classList.add('zoom-modal-image')
  $image.alt = altText ? altText : ' '
  $image.setAttribute('src', src)

  $modal.addEventListener('click', (e) => {
    const $clickedElement = e.target as HTMLDialogElement
    if ($clickedElement.matches('dialog')) $clickedElement?.close()
  })

  const $closeButton = document.createElement('button')
  $closeButton.classList.add('zoom-modal-button')
  $closeButton.innerHTML = `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"><path stroke="none" d="M0 0h24v24H0z"/><path d="M18 6 6 18M6 6l12 12"/></svg>`
  $closeButton?.addEventListener('click', () => {
    $modal?.close()
  })
  $modal.append($image, $closeButton)
  document.body.append($modal)

  $modal.showModal()

  $modal.addEventListener('close', () => {
    $modal.remove()
  })
}

function handleClick(e: Event) {
  const element = e.target as HTMLImageElement
  const currentSrc = element.currentSrc
  const alt = element.alt
  const naturalHeight = element.naturalHeight
  const naturalWidth = element.naturalWidth
  const ratio = naturalHeight / naturalWidth

  createModal({ altText: alt, ratio, src: currentSrc })
}

export default function init({ dataSelector = DATA }: { dataSelector?: string } = {}) {
  const $images = document.querySelectorAll(`img[${dataSelector}]`)
  $images.forEach(($image) => $image.addEventListener('click', handleClick))
}
