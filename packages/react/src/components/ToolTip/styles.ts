import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '~/styles/stitches.config'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '$xs',
  padding: '$3 $4',
  fontSize: '$sm',
  lineHeight: '$shorter',
  fontFamily: '$default',
  fontWeight: '$medium',

  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },

  variants: {
    variant: {
      primary: {
        color: '$gray100',
        backgroundColor: '$gray900',
      },

      secondary: {
        color: '$gray100',
        backgroundColor: '$ignite500',
      },

      tertiary: {
        color: '$gray900',
        backgroundColor: '$gray100',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  variants: {
    variant: {
      primary: {
        fill: '$gray900',
      },

      secondary: {
        fill: '$ignite500',
      },

      tertiary: {
        fill: '$gray100',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})
