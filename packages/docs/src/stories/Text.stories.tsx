import { Text, TextProps } from '@capelaum/ignite-react-05-design-system-react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident animi hic impedit tenetur ratione saepe harum, quod eligendi nam blanditiis et, sunt pariatur dolorem quaerat aspernatur quo laborum ullam dolor.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
