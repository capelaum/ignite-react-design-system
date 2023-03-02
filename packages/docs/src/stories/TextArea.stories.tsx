import {
  Box,
  Text,
  TextArea,
  TextAreaProps,
} from '@capelaum/ignite-react-05-design-system-react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Comment</Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your comment here',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
  },
}
