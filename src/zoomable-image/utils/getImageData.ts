export default function getImageData($image: HTMLImageElement) {
  // TODO HD image & prefetch
  const currentSrc = $image.currentSrc
  const alt = $image.alt
  const naturalHeight = $image.naturalHeight
  const naturalWidth = $image.naturalWidth
  const hdImage = $image.dataset.zoomableHd

  return { alt, imageSrc: hdImage ?? currentSrc, naturalHeight, naturalWidth }
}
