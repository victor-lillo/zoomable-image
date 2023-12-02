import './styles.css'
import createModal from './utils/createModal'

const DATA = 'data-zoomable-image'

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
