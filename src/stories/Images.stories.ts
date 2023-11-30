import type { StoryObj, Meta } from '@storybook/html'
import './image-grid.css'
import init from '../zoomable-image/index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Zoomable Image',
  render: () => {
    return `
<section class="wrapper">
  <p>I am zoomable</p>
  <img
    data-zoomable-image
    class="image"
    src="src/stories/assets/styling.png"
    alt=""
  />
  <p>I am also zoomable</p>
  <img
    data-zoomable-image
    class="image"
    src="src/stories/assets/testing.png"
    alt=""
  />
  <p>I am not zoomable</p>
  <img
    class="image"
    src="src/stories/assets/assets.png"
    alt=""
  />
  <p>I am also zoomable</p>
  <img
    class="image"
    src="src/stories/assets/context.png"
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
