import {
  Box,
  Button,
  ToolTip,
  ToolTipProps,
} from '@capelaum-packages/ignite-react-05-design-system-react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Tool Tip',
  component: ToolTip,
  args: {
    variant: 'primary',
    children: <Button>View ToolTip</Button>,
    text: 'This is a tooltip',
  },
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            maxWidth: '200px',
            marginTop: '$8',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToolTipProps>

export const Primary: StoryObj<ToolTipProps> = {}

export const Secondary: StoryObj<ToolTipProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ToolTipProps> = {
  args: {
    variant: 'tertiary',
  },
}
