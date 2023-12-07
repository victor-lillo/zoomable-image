export default function getImageData($image: HTMLImageElement) {
  // TODO HD image & prefetch
  // Pegar una vuelta al mock de KeyframeEffect
  // https://github.com/search?q=%28path%3A*.test.ts+OR+path%3A*.test.js%29+KeyframeEffect+&type=code&ref=advsearch
  const currentSrc = $image.currentSrc
  const alt = $image.alt
  const naturalHeight = $image.naturalHeight
  const naturalWidth = $image.naturalWidth
  const hdImage = $image.dataset.zoomableHd

  return { alt, imageSrc: hdImage ?? currentSrc, naturalHeight, naturalWidth }
}
