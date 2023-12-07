export default function getImageData($image: HTMLImageElement) {
  const currentSrc = $image.currentSrc
  const alt = $image.alt
  const naturalHeight = $image.naturalHeight
  const naturalWidth = $image.naturalWidth
  const hdImage = $image.dataset.zoomableHd

  return { alt, imageSrc: hdImage ?? currentSrc, naturalHeight, naturalWidth }
}
