"use client"

import type { IconButtonProps } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { ThemeProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { LuSun, LuMoon } from "react-icons/lu"
import * as React from "react"

export type ColorMode = "light" | "dark"

export interface ColorModeProviderProps extends ThemeProviderProps { }

export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  )
}

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme } = useTheme()
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }
  return {
    colorMode: resolvedTheme as ColorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  const MoonIcon = React.createElement(LuMoon)
  const SunIcon = React.createElement(LuSun)
  return colorMode === "dark" ? MoonIcon : SunIcon
}

export interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> { }

export function ColorModeButton(props: ColorModeButtonProps) {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<ColorModeIcon />}
      aria-label="Toggle color mode"
      {...props}
    />
  )
}
