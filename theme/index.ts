import { extendTheme, theme as baseTheme, type ThemeConfig } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

import { styles } from "./styles";
import { carritoStyles, cartUtils } from "./Carritos";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  cssVarPrefix: "chakra",
};

// Enhanced color palette
const colors = {
  primary: {
    ...baseTheme.colors.blue,
    50: "#e6f2ff",
    100: "#b3d9ff",
    200: "#80bfff",
    300: "#4da6ff",
    400: "#1a8cff",
    500: "#0073e6", // Main primary color
    600: "#0059b3",
    700: "#004080",
    800: "#00264d",
    900: "#000d1a",
  },
  secondary: {
    ...baseTheme.colors.teal,
    50: "#e0f5f2",
    100: "#b3e6df",
    200: "#80d6cc",
    300: "#4dc7b9",
    400: "#26b8a6",
    500: "#00a894", // Main secondary color
    600: "#008472",
    700: "#006050",
    800: "#003c32",
    900: "#001410",
  },
  accent: {
    ...baseTheme.colors.purple,
    50: "#f2e6ff",
    100: "#d9b3ff",
    200: "#bf80ff",
    300: "#a64dff",
    400: "#8c1aff",
    500: "#7300e6", // Main accent color
    600: "#5900b3",
    700: "#400080",
    800: "#26004d",
    900: "#0d001a",
  },
  brand: {
    green: {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50", // Main brand green
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
    },
  },
  ui: {
    success: baseTheme.colors.green,
    error: baseTheme.colors.red,
    warning: baseTheme.colors.orange,
    info: baseTheme.colors.blue,
  },
  background: {
    light: "#f8f9fa",
    dark: "#1a202c",
  },
};

// Custom component styles
const components = {
  // Include carrito styles in components
  ...carritoStyles,
  
  Button: {
    baseStyle: {
      fontWeight: "bold",
      borderRadius: "md",
      transition: "all 0.2s ease-in-out",
      letterSpacing: "0.025em",
      _hover: {
        transform: "scale(1.02)",
      },
    },
    sizes: {
      sm: {
        fontSize: "sm",
        px: 4,
        py: 2,
      },
      md: {
        fontSize: "md",
        px: 6,
        py: 3,
      },
      lg: {
        fontSize: "lg",
        px: 8,
        py: 4,
      },
    },
    variants: {
      solid: (props: StyleFunctionProps) => ({
        bg: props.colorScheme ? `${props.colorScheme}.500` : "primary.500",
        color: "white",
        _hover: {
          bg: props.colorScheme ? `${props.colorScheme}.600` : "primary.600",
        },
        _active: {
          bg: props.colorScheme ? `${props.colorScheme}.700` : "primary.700",
        },
      }),
      outline: (props: StyleFunctionProps) => ({
        border: "1px solid",
        borderColor: props.colorScheme ? `${props.colorScheme}.500` : "primary.500",
        color: props.colorScheme ? `${props.colorScheme}.500` : "primary.500",
        _hover: {
          bg: props.colorScheme ? `${props.colorScheme}.50` : "primary.50",
        },
      }),
    },
  },
  
  Card: {
    baseStyle: {
      borderRadius: "lg",
      overflow: "hidden",
      boxShadow: "sm",
      transition: "all 0.3s ease",
      _hover: {
        boxShadow: "md",
        transform: "translateY(-2px)",
      },
    },
  },
  
  Text: {
    baseStyle: {
      fontFamily: "system-ui, sans-serif",
      fontWeight: "normal",
    },
  },
};

const fonts = {
  heading: "system-ui, sans-serif",
  body: "system-ui, sans-serif",
};

// Global styles
const globalStyles = {
  global: styles.global,
};

const theme = extendTheme({
  config,
  colors,
  components,
  fonts,
  styles: globalStyles,
});

export default theme;

// Export cart utilities for use in components
export { cartUtils };
