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
  },
})
