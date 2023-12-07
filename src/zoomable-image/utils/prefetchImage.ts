export default function prefetchImage(href: string) {
  const $prefetchLink = document.createElement('link')
  $prefetchLink.setAttribute('rel', 'preload')
  $prefetchLink.setAttribute('as', 'image')
  $prefetchLink.setAttribute('href', href)
  document.head.append($prefetchLink)
}
