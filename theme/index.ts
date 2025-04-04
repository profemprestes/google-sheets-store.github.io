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
  },
  // Nuevos colores para mejorar la paleta
  accent: {
    50: "#fff8e1",
    100: "#ffecb3",
    200: "#ffe082",
    300: "#ffd54f",
    400: "#ffca28",
    500: "#ffc107", // Color de acento principal
    600: "#ffb300",
    700: "#ffa000",
    800: "#ff8f00",
    900: "#ff6f00",
  },
  success: {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50", // Color de éxito
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
  error: {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336", // Color de error
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
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
  subtle: "0 2px 15px -3px rgba(0, 0, 0, 0.07)",
  floating: "0 16px 70px -12.125px rgba(0, 0, 0, 0.3)",
};

const borders = {
  thin: "1px solid",
  medium: "2px solid",
  thick: "3px solid",
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
      // Nuevo variante de botón con efecto de gradiente
      gradient: (props: any) => ({
        bgGradient: `linear(to-r, ${props.colorScheme}.500, ${props.colorScheme}.600)`,
        color: "white",
        _hover: {
          bgGradient: `linear(to-r, ${props.colorScheme}.600, ${props.colorScheme}.700)`,
          transform: "translateY(-2px)",
          boxShadow: "md",
        },
        _active: {
          bgGradient: `linear(to-r, ${props.colorScheme}.700, ${props.colorScheme}.800)`,
          transform: "translateY(0)",
        },
        transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
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
    variants: {
      elevated: {
        boxShadow: "elevated",
        bg: "white",
      },
      outline: {
        boxShadow: "none",
        border: "1px solid",
        borderColor: "gray.200",
      },
      filled: {
        boxShadow: "none",
        bg: "gray.50",
      },
      unstyled: {
        bg: "none",
        boxShadow: "none",
        p: 0,
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
    variants: {
      gradient: {
        bgGradient: "linear(to-r, primary.500, secondary.500)",
        bgClip: "text",
        fontWeight: "extrabold",
      },
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
    variants: {
      filled: {
        field: {
          bg: "gray.50",
          _hover: {
            bg: "gray.100",
          },
          _focus: {
            bg: "white",
            borderColor: "primary.500",
          },
        },
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
    variants: {
      underline: {
        position: "relative",
        _after: {
          content: '""',
          position: "absolute",
          bottom: "-2px",
          left: 0,
          width: "0%",
          height: "2px",
          bg: "primary.500",
          transition: "width 0.3s ease",
        },
        _hover: {
          _after: {
            width: "100%",
          },
        },
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
      subtle: {
        color: "gray.600",
        fontSize: "sm",
      },
      emphasis: {
        fontWeight: "medium",
        color: "gray.700",
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
  // Estilos para el Badge
  Badge: {
    baseStyle: {
      borderRadius: "full",
      px: 2,
      py: 1,
      textTransform: "lowercase",
      fontWeight: "medium",
    },
    variants: {
      solid: (props: any) => ({
        bg: `${props.colorScheme}.500`,
        color: "white",
      }),
      subtle: (props: any) => ({
        bg: `${props.colorScheme}.100`,
        color: `${props.colorScheme}.800`,
      }),
      outline: (props: any) => ({
        color: `${props.colorScheme}.500`,
        boxShadow: `inset 0 0 0px 1px ${props.colorScheme}.500`,
      }),
    },
  },
};

export default extendTheme({
  config,
  colors,
  fonts,
  shadows,
  borders,
  components,
  styles,
});
