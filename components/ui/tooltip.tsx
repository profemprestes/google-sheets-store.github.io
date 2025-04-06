import { Tooltip as ChakraTooltip } from "@chakra-ui/react"
import * as React from "react"

export interface TooltipProps {
  showArrow?: boolean
  children: React.ReactNode
  content: React.ReactNode
  isDisabled?: boolean
  placement?: 'top' | 'right' | 'bottom' | 'left' | 'auto'
  hasArrow?: boolean
  [key: string]: any
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const {
      showArrow = true,
      children,
      isDisabled = false,
      content,
      ...rest
    } = props

    if (isDisabled) return <>{children}</>

    return (
      <ChakraTooltip
        label={content}
        hasArrow={showArrow}
        placement="top"
        openDelay={300}
        ref={ref}
        {...rest}
      >
        {children}
      </ChakraTooltip>
    )
  },
)
