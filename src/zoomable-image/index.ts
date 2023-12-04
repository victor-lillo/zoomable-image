import './styles.css'
import createModal from './utils/createModal'

const DATA = 'data-zoomable-image'

type InitOptions = {
  dataSelector?: string
  scrollOffset?: number
}

export default function init({ dataSelector = DATA, scrollOffset }: InitOptions = {}) {
  const $images = document.querySelectorAll(`img[${dataSelector}]`)

  $images.forEach(($image) => {
    $image.addEventListener('click', (e) => {
      createModal(e.target as HTMLImageElement, { scrollOffset })
    })
  })
}
