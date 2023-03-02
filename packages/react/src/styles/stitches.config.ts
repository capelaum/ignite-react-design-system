import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@capelaum/ignite-react-05-design-system-tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  theme,
  config,
  css,
  styled,
  keyframes,
  globalCss,
  getCssText,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },

  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,

    shadows: {
      default: '4px 4px 8px rgba(0, 0, 0, 0.25)',
      card: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },

    transitions: {
      default: 'all 0.3s ease-in-out',
      slow: 'all 0.5s ease-in-out',
      fast: 'all 0.15s ease-in-out',
    },
  },

  media: {
    bp1: '(max-width: 768px)',
    bp2: '(max-width: 576px)',
    bp3: '(max-width: 480px)',
  },
})
