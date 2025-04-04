import { extendTheme, theme as baseTheme, type ThemeConfig } from "@chakra-ui/react";

import { styles } from "./styles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  primary: baseTheme.colors["blue"],
  secondary: baseTheme.colors["teal"],
  whatsapp: {
    50: "#e9f9f0",
    100: "#c5ecd8",
    200: "#9fdfbe",
    300: "#79d2a4",
    400: "#53c68a",
    500: "#25D366", // Color principal de WhatsApp
    600: "#128C7E", // Color secundario de WhatsApp
    700: "#075E54", // Color oscuro de WhatsApp
    800: "#054c44",
    900: "#022e29",
  },
  brand: {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3", // Color principal de la marca
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
  }
};

const fonts = {
  heading: "'Montserrat', sans-serif",
  body: "'Open Sans', sans-serif",
};

const shadows = {
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  hover: "0 8px 30px rgba(0, 0, 0, 0.12)",
  card: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
  elevated: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: "600",
      borderRadius: "md",
    },
    variants: {
      solid: (props: any) => ({
        bg: `${props.colorScheme}.500`,
        color: "white",
        _hover: {
          bg: `${props.colorScheme}.600`,
          transform: "translateY(-2px)",
          boxShadow: "md",
        },
        _active: {
          bg: `${props.colorScheme}.700`,
          transform: "translateY(0)",
        },
        transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }),
      outline: (props: any) => ({
        borderColor: `${props.colorScheme}.500`,
        color: `${props.colorScheme}.500`,
        _hover: {
          bg: `${props.colorScheme}.50`,
          transform: "translateY(-2px)",
          boxShadow: "sm",
        },
        transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }),
      ghost: (props: any) => ({
        color: `${props.colorScheme}.500`,
        _hover: {
          bg: `${props.colorScheme}.50`,
          transform: "translateY(-1px)",
        },
        transition: "all 0.2s ease",
      }),
    },
  },
  Card: {
    baseStyle: {
      p: "6",
      bg: "white",
      borderRadius: "lg",
      boxShadow: "md",
      transition: "all 0.3s ease",
      _hover: {
        boxShadow: "elevated",
        transform: "translateY(-5px)",
      },
    },
  },
  Container: {
    baseStyle: {
      maxW: "container.xl",
      px: { base: "4", md: "6" },
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: "heading",
      fontWeight: "bold",
      letterSpacing: "-0.02em",
    },
  },
  Input: {
    baseStyle: {
      field: {
        borderRadius: "md",
        _focus: {
          boxShadow: "outline",
          borderColor: "primary.500",
        },
        transition: "all 0.2s",
      },
    },
  },
  Link: {
    baseStyle: {
      transition: "all 0.2s",
      _hover: {
        textDecoration: "none",
        color: "primary.600",
      },
    },
  },
  Text: {
    variants: {
      gradient: {
        bgGradient: "linear(to-r, primary.500, secondary.500)",
        bgClip: "text",
        fontWeight: "bold",
      },
    },
  },
  // Estilos para el Footer
  Footer: {
    baseStyle: {
      bg: "gray.800",
      color: "white",
      py: 8,
      transition: "all 0.3s ease",
    },
  },
};

export default extendTheme({
  config,
  colors,
  fonts,
  shadows,
  components,
  styles,
});
