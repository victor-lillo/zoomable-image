import type { StoryObj, Meta } from '@storybook/html'
import './image-grid.css'
import init from '../zoomable-image/index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Zoomable Image',
  render: () => {
    return `
  <section class="wrapper">
    <p>I am zoomable</p>
    <img
      data-zoomable-image
      class="image"
      src="src/stories/assets/moon.webp"
      alt=""
    />
    <p>I am also zoomable</p>
    <img
      data-zoomable-image
      class="image"
      src="src/stories/assets/sunset.webp"
      alt=""
    />
    <p>I am not zoomable</p>
    <img
      class="image"
      src="src/stories/assets/road.webp"
      alt=""
      />
      <p>I am also zoomable</p>
      <img
      data-zoomable-image
      class="image"
      src="src/stories/assets/bug.webp"
      alt=""
    />
  </section>  
`
  },
  argTypes: {},
} satisfies Meta

export default meta
type Story = StoryObj

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  play: async () => {
    init()
  },
}
