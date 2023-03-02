import { ComponentProps } from 'react'
import { styled } from '~/styles/stitches.config'

export const Button = styled('button', {
  fonsFamily: '$default',
  fontWeight: '$bold',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '$md',

  color: '$white',
  backgroundColor: '$ignite300',

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$lg',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
