"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.cartUtils = void 0;
var react_1 = require("@chakra-ui/react");
var styles_1 = require("./styles");
var Carritos_1 = require("./Carritos");
exports.cartUtils = Carritos_1.cartUtils;
var config = {
    initialColorMode: "light",
    useSystemColorMode: false
};
// Enhanced color palette
var colors = {
    primary: __assign(__assign({}, react_1.theme.colors.blue), { 50: "#e6f2ff", 100: "#b3d9ff", 200: "#80bfff", 300: "#4da6ff", 400: "#1a8cff", 500: "#0073e6", 600: "#0059b3", 700: "#004080", 800: "#00264d", 900: "#000d1a" }),
    secondary: __assign(__assign({}, react_1.theme.colors.teal), { 50: "#e0f5f2", 100: "#b3e6df", 200: "#80d6cc", 300: "#4dc7b9", 400: "#26b8a6", 500: "#00a894", 600: "#008472", 700: "#006050", 800: "#003c32", 900: "#001410" }),
    accent: __assign(__assign({}, react_1.theme.colors.purple), { 50: "#f2e6ff", 100: "#d9b3ff", 200: "#bf80ff", 300: "#a64dff", 400: "#8c1aff", 500: "#7300e6", 600: "#5900b3", 700: "#400080", 800: "#26004d", 900: "#0d001a" }),
    brand: {
        green: {
            50: "#e8f5e9",
            100: "#c8e6c9",
            200: "#a5d6a7",
            300: "#81c784",
            400: "#66bb6a",
            500: "#4caf50",
            600: "#43a047",
            700: "#388e3c",
            800: "#2e7d32",
            900: "#1b5e20"
        }
    },
    ui: {
        success: react_1.theme.colors.green,
        error: react_1.theme.colors.red,
        warning: react_1.theme.colors.orange,
        info: react_1.theme.colors.blue
    },
    background: {
        light: "#f8f9fa",
        dark: "#1a202c"
    }
};
// Custom component styles
var components = __assign(__assign({}, Carritos_1.carritoStyles), { Button: {
        baseStyle: {
            fontWeight: "bold",
            borderRadius: "md",
            transition: "all 0.2s ease-in-out",
            letterSpacing: "0.025em"
        },
        sizes: {
            sm: {
                fontSize: "sm",
                px: 4,
                py: 2
            },
            md: {
                fontSize: "md",
                px: 6,
                py: 3
            },
            lg: {
                fontSize: "lg",
                px: 8,
                py: 4
            }
        },
        variants: {
            primary: {
                bg: "primary.500",
                color: "white",
                _hover: {
                    bg: "primary.600",
                    transform: "translateY(-2px)",
                    boxShadow: "md"
                },
                _active: {
                    bg: "primary.700",
                    transform: "translateY(0)"
                },
                _focus: {
                    boxShadow: "0 0 0 3px " + colors.primary[200]
                }
            },
            secondary: {
                bg: "secondary.500",
                color: "white",
                _hover: {
                    bg: "secondary.600",
                    transform: "translateY(-2px)",
                    boxShadow: "md"
                },
                _active: {
                    bg: "secondary.700",
                    transform: "translateY(0)"
                },
                _focus: {
                    boxShadow: "0 0 0 3px " + colors.secondary[200]
                }
            },
            accent: {
                bg: "accent.500",
                color: "white",
                _hover: {
                    bg: "accent.600",
                    transform: "translateY(-2px)",
                    boxShadow: "md"
                },
                _active: {
                    bg: "accent.700",
                    transform: "translateY(0)"
                },
                _focus: {
                    boxShadow: "0 0 0 3px " + colors.accent[200]
                }
            },
            whatsapp: {
                bg: "brand.green.500",
                color: "white",
                _hover: {
                    bg: "brand.green.600",
                    transform: "translateY(-2px)",
                    boxShadow: "lg"
                },
                _active: {
                    bg: "brand.green.700",
                    transform: "translateY(0)"
                },
                _focus: {
                    boxShadow: "0 0 0 3px " + colors.brand.green[200]
                }
            },
            outline: {
                border: "2px solid",
                borderColor: "primary.500",
                color: "primary.500",
                bg: "transparent",
                _hover: {
                    bg: "primary.50",
                    transform: "translateY(-2px)",
                    boxShadow: "md"
                },
                _active: {
                    bg: "primary.100",
                    transform: "translateY(0)"
                }
            },
            ghost: {
                bg: "transparent",
                color: "primary.500",
                _hover: {
                    bg: "primary.50"
                },
                _active: {
                    bg: "primary.100"
                }
            }
        },
        defaultProps: {
            variant: "primary",
            size: "md"
        }
    }, Link: {
        baseStyle: {
            color: "primary.500",
            transition: "all 0.2s ease",
            _hover: {
                textDecoration: "none",
                color: "primary.600"
            },
            _focus: {
                boxShadow: "outline"
            }
        },
        variants: {
            nav: {
                fontWeight: "medium",
                _hover: {
                    transform: "translateY(-1px)"
                }
            },
            footer: {
                color: "gray.500",
                fontSize: "sm"
            }
        }
    }, Container: {
        baseStyle: {
            transition: "all 0.3s ease",
            px: { base: 4, md: 6 },
            maxW: "1200px"
        }
    }, Card: {
        baseStyle: {
            p: 5,
            borderRadius: "lg",
            bg: "white",
            boxShadow: "md",
            transition: "all 0.3s ease",
            _hover: {
                boxShadow: "lg",
                transform: "translateY(-4px)"
            }
        },
        variants: {
            elevated: {
                boxShadow: "lg"
            },
            outline: {
                border: "1px solid",
                borderColor: "gray.200"
            },
            filled: {
                bg: "gray.50"
            }
        }
    }, Badge: {
        baseStyle: {
            borderRadius: "full",
            px: 2,
            py: 1,
            fontWeight: "medium"
        },
        variants: {
            solid: {
                bg: "primary.500",
                color: "white"
            },
            outline: {
                border: "1px solid",
                borderColor: "primary.500",
                color: "primary.500"
            },
            subtle: {
                bg: "primary.50",
                color: "primary.700"
            }
        }
    }, Input: {
        variants: {
            filled: {
                field: {
                    bg: "gray.50",
                    borderRadius: "md",
                    _hover: {
                        bg: "gray.100"
                    },
                    _focus: {
                        bg: "white",
                        borderColor: "primary.500"
                    }
                }
            },
            outline: {
                field: {
                    borderRadius: "md",
                    _focus: {
                        borderColor: "primary.500",
                        boxShadow: "0 0 0 1px " + colors.primary[500]
                    }
                }
            }
        },
        defaultProps: {
            variant: "outline"
        }
    } });
// Add global styles for scrollbars
var globalStyles = {
    global: function (props) { return (__assign({ 
        // Apply custom scrollbar to the entire app
        '*': __assign({}, Carritos_1.customScrollbar(props)) }, (typeof styles_1.styles.global === 'function' ? styles_1.styles.global(props) : styles_1.styles.global))); }
};
exports["default"] = react_1.extendTheme({
    config: config,
    colors: colors,
    styles: globalStyles,
    components: components
});
