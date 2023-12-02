export default function getImageData($image: HTMLImageElement) {
  const currentSrc = $image.currentSrc
  const alt = $image.alt
  const naturalHeight = $image.naturalHeight
  const naturalWidth = $image.naturalWidth

  return { alt, currentSrc, naturalHeight, naturalWidth }
}
