export default function getImageData($image: HTMLImageElement) {
  const currentSrc = $image.currentSrc
  const alt = $image.alt
  const naturalHeight = $image.naturalHeight
  const naturalWidth = $image.naturalWidth
  const aspectRatio = naturalWidth / naturalHeight

  return { alt, aspectRatio, currentSrc, naturalHeight, naturalWidth }
}
