import './styles.css'
import createModal from './utils/createModal'
import prefetchImage from './utils/prefetchImage'

const DATA = 'data-zoomable-image'
const HD_DATA_CAMEL = 'zoomableHd'

const EVENTS = ['mouseenter', 'touchstart', 'focus']

type InitOptions = {
  scrollOffset?: number
}

function prefetch(e: Event) {
  const target = e.target as HTMLImageElement
  prefetchImage(target.dataset[HD_DATA_CAMEL]!)
}

export default function init({ scrollOffset }: InitOptions = {}) {
  const $images = document.querySelectorAll(`img[${DATA}]`) as NodeListOf<HTMLImageElement>
  const $hdImages = Array.from($images).filter(($image) => $image.dataset[HD_DATA_CAMEL])

  $images.forEach(($image) => {
    $image.addEventListener('click', (e) => {
      createModal(e.target as HTMLImageElement, { scrollOffset })
    })
  })

  $hdImages.forEach(($hdImage) => {
    EVENTS.map((event) => $hdImage.addEventListener(event, prefetch, { passive: true, once: true }))
  })
}
