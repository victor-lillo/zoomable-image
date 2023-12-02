export default function getNewSize({
  naturalHeight,
  naturalWidth,
}: {
  naturalHeight: number
  naturalWidth: number
}) {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  const widthRatio = viewportWidth / naturalWidth
  const heightRatio = viewportHeight / naturalHeight

  const sizes: Record<string, string | 'auto'> = {
    newWidth: 'auto',
    newHeight: 'auto',
  }

  if (widthRatio < heightRatio) {
    sizes.newWidth = `100vw`
  } else {
    sizes.newHeight = `100vh`
  }

  return sizes
}
