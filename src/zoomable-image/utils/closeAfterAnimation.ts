function createCloseAnimation($element: HTMLDialogElement) {
  const keyframes = new KeyframeEffect(
    $element,
    [
      { opacity: '1', transform: 'scale(1)' },
      { opacity: '0', transform: 'scale(0)' },
    ],

    { duration: 200, fill: 'forwards' }
  )

  const animation = new Animation(keyframes, document.timeline)
  return animation
}

export default function closeAfterAnimation($dialog: HTMLDialogElement) {
  const animation = createCloseAnimation($dialog)

  requestAnimationFrame(() => {
    animation.play()
  })

  animation.onfinish = () => {
    $dialog?.close()
  }
}
