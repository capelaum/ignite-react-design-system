import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  sizeValue?: 'sm' | 'md'
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, sizeValue, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer sizeValue={sizeValue}>
        {!!prefix && <Prefix>{prefix}</Prefix>}

        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
    // eslint-disable-next-line prettier/prettier
  }
)

TextInput.displayName = 'TextInput'
