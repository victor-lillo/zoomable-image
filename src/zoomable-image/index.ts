import './styles.css'
import createModal from './utils/createModal'

const DATA = 'data-zoomable-image'

type InitOptions = {
  scrollOffset?: number
}

export default function init({ scrollOffset }: InitOptions = {}) {
  const $images = document.querySelectorAll(`img[${DATA}]`)

  $images.forEach(($image) => {
    $image.addEventListener('click', (e) => {
      createModal(e.target as HTMLImageElement, { scrollOffset })
    })
  })
}
