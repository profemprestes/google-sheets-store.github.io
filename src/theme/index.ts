import { extendTheme, theme as baseTheme, type ThemeConfig } from "@chakra-ui/react";

import { styles } from "./styles";

// Define a type for component style props
type StyleProps = {
  colorScheme: string;
  [key: string]: any;
};

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
  outline: "0 0 0 3px rgba(33, 150, 243, 0.6)",
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
      transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
    variants: {
      solid: (props: StyleProps) => ({
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
      }),
      outline: (props: StyleProps) => ({
        borderColor: `${props.colorScheme}.500`,
        color: `${props.colorScheme}.500`,
        _hover: {
          bg: `${props.colorScheme}.50`,
          transform: "translateY(-2px)",
          boxShadow: "sm",
        },
        _active: {
          borderColor: `${props.colorScheme}.600`,
          color: `${props.colorScheme}.600`,
          transform: "translateY(0)",
        },
      }),
      ghost: (props: StyleProps) => ({
        color: `${props.colorScheme}.500`,
        _hover: {
          bg: `${props.colorScheme}.50`,
          transform: "translateY(-1px)",
        },
        _active: {
          bg: `${props.colorScheme}.100`,
          transform: "translateY(0)",
        },
      }),
      gradient: (props: StyleProps) => ({
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
      }),
      whatsapp: {
        bg: "whatsapp.500",
        color: "white",
        _hover: {
          bg: "whatsapp.600",
          transform: "translateY(-2px)",
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.5)",
        },
        _active: {
          bg: "whatsapp.700",
          transform: "translateY(0)",
        },
      },
      floating: (props: StyleProps) => ({
        bg: `${props.colorScheme}.500`,
        color: "white",
        borderRadius: "full",
        boxShadow: "floating",
        _hover: {
          transform: "translateY(-3px) scale(1.05)",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
        },
        _active: {
          transform: "translateY(0) scale(0.95)",
        },
      }),
      link: (props: StyleProps) => ({
        color: `${props.colorScheme}.500`,
        padding: 0,
        height: "auto",
        lineHeight: "normal",
        verticalAlign: "baseline",
        _hover: {
          textDecoration: "underline",
          color: `${props.colorScheme}.600`,
        },
        _active: {
          color: `${props.colorScheme}.700`,
        },
      }),
      pill: (props: StyleProps) => ({
        bg: `${props.colorScheme}.500`,
        color: "white",
        borderRadius: "full",
        px: 6,
        _hover: {
          bg: `${props.colorScheme}.600`,
          transform: "translateY(-2px)",
        },
        _active: {
          bg: `${props.colorScheme}.700`,
          transform: "translateY(0)",
        },
      }),
    },
    sizes: {
      xl: {
        h: 14,
        minW: 14,
        fontSize: "lg",
        px: 8,
      },
      lg: {
        h: 12,
        minW: 12,
        fontSize: "md",
        px: 6,
      },
      md: {
        h: 10,
        minW: 10,
        fontSize: "md",
        px: 4,
      },
      sm: {
        h: 8,
        minW: 8,
        fontSize: "sm",
        px: 3,
      },
      xs: {
        h: 6,
        minW: 6,
        fontSize: "xs",
        px: 2,
      },
    },
    defaultProps: {
      variant: "solid",
      size: "md",
      colorScheme: "brand",
    },
  },
  
  Card: {
    baseStyle: {
      p: "6",
      bg: "white",
      borderRadius: "lg",
      boxShadow: "card",
      transition: "all 0.3s ease",
    },
    variants: {
      elevated: {
        boxShadow: "elevated",
        bg: "white",
      },
      outline: {
        boxShadow: "none",
        border: "thin",
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
      interactive: {
        className: "shadow-hover",
      }
    },
  },
  
  Container: {
    baseStyle: {
      className: "container",
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
        bgGradient: "linear(to-r, brand.500, secondary.500)",
        bgClip: "text",
        fontWeight: "extrabold",
      },
      withGradientUnderline: {
        position: "relative",
        _after: {
          content: '""',
          display: "block",
          width: "40px",
          height: "3px",
          bgGradient: "linear(to-r, brand.500, secondary.500)",
          marginTop: "0.2em",
          borderRadius: "full",
        }
      }
    },
  },
  
  Input: {
    baseStyle: {
      field: {
        borderRadius: "md",
        _focus: {
          boxShadow: "outline",
          borderColor: "brand.500",
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
            borderColor: "brand.500",
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
        color: "brand.600",
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
          bg: "brand.500",
          transition: "width 0.3s ease",
        },
        _hover: {
          _after: {
            width: "100%",
          },
        },
      },
      gradient: {
        className: "text-gradient",
      }
    },
  },
  
  Text: {
    variants: {
      gradient: {
        className: "text-gradient",
      },
      subtle: {
        color: "gray.600",
        fontSize: "sm",
      },
      emphasis: {
        fontWeight: "medium",
        color: "gray.700",
      },
      fadeIn: {
        className: "fade-in",
      },
      float: {
        className: "float",
      }
    },
  },
  
  Footer: {
    baseStyle: {
      bg: "gray.800",
      color: "white",
      py: 8,
      transition: "all 0.3s ease",
    },
  },
  
  Badge: {
    baseStyle: {
      borderRadius: "full",
      px: 2,
      py: 1,
      textTransform: "lowercase",
      fontWeight: "medium",
    },
    variants: {
      solid: (props: StyleProps) => ({
        bg: `${props.colorScheme}.500`,
        color: "white",
      }),
      subtle: (props: StyleProps) => ({
        bg: `${props.colorScheme}.100`,
        color: `${props.colorScheme}.800`,
      }),
      outline: (props: StyleProps) => ({
        color: `${props.colorScheme}.500`,
        boxShadow: `inset 0 0 0px 1px ${props.colorScheme}.500`,
      }),
    },
  },
};

// Add this to your theme configuration
const transition = {
  motion: {
    defaultTransition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      duration: 0.3
    }
  }
};

// Then include it in your extendTheme call at the bottom of the file
const theme = extendTheme({
  config,
  colors,
  fonts,
  shadows,
  borders,
  components,
  styles,
  transition, // Add this line
});

// Change from default export to named export
export { theme };
