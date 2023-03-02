import { styled } from '~/styles/stitches.config'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gap: '$2',
  marginTop: '$1',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$xss',
  backgroundColor: '$gray600',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})