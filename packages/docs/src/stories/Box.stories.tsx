import {
  Box,
  BoxProps,
  Text,
} from '@capelaum/ignite-react-05-design-system-react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testing the Box Component.</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const CustomTag: StoryObj<BoxProps> = {
  args: {
    children: (
      <>
        <Text>Testing the Box Component.</Text>
      </>
    ),
    as: 'section',
  },
}
