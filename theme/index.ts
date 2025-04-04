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
  }
};

const fonts = {
  heading: "'Montserrat', sans-serif",
  body: "'Open Sans', sans-serif",
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
        transition: "all 0.2s ease-in-out",
      }),
    },
  },
  Card: {
    baseStyle: {
      p: "6",
      bg: "white",
      borderRadius: "lg",
      boxShadow: "md",
    },
  },
};

export default extendTheme({
  config,
  colors,
  fonts,
  components,
  styles,
});
