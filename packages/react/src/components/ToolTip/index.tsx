import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export interface ToolTipProps extends ComponentProps<typeof TooltipContent> {
  children: ReactNode
  text: string
  variant: 'primary' | 'secondary' | 'tertiary'
}

export function ToolTip({ children, text, variant, ...props }: ToolTipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent sideOffset={4} variant={variant} {...props}>
            {text}
            <TooltipArrow variant={variant} />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
