import './styles.css'
import createModal from './utils/createModal'

const DATA = 'data-zoomable-image'

export default function init({
  dataSelector = DATA,
  scrollOffset,
}: { dataSelector?: string; scrollOffset?: number } = {}) {
  const $images = document.querySelectorAll(`img[${dataSelector}]`)

  $images.forEach(($image) => {
    $image.addEventListener('click', (e) => {
      const $clickedImage = e.target as HTMLImageElement
      createModal({ $clickedImage, scrollOffset })
    })
  })
}
