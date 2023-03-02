import { colors } from '@capelaum/ignite-react-05-design-system-tokens'
import { styled } from '~/styles/stitches.config'

const Button = styled('button', {
  fonsFamily: '$default',
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$ignite500',
})

export function App() {
  return (
    <>
      <h1 style={{ color: colors.ignite300 }}>Hello React</h1>
      <Button>Test</Button>
    </>
  )
}
