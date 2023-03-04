import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export interface ToolTipProps {
  children: ReactNode
  text: string
}

export function ToolTip({ children, text }: ToolTipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent sideOffset={5}>
            {text}
            <TooltipArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
