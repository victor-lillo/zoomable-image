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

  const sizes = {
    newWidth: viewportWidth,
    newHeight: viewportHeight,
  }

  if (widthRatio < heightRatio) {
    sizes.newHeight = naturalHeight * widthRatio
  } else {
    sizes.newWidth = naturalWidth * heightRatio
  }

  return sizes
}
