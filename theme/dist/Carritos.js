"use strict";
exports.__esModule = true;
exports.cartUtils = exports.customScrollbar = exports.carritoStyles = void 0;
var theme_tools_1 = require("@chakra-ui/theme-tools");
// Cart component theme customizations
exports.carritoStyles = {
    // Drawer component customization
    Drawer: {
        parts: ['dialog', 'overlay', 'header', 'body', 'footer', 'closeButton'],
        baseStyle: function (props) { return ({
            overlay: {
                bg: 'blackAlpha.400',
                backdropFilter: 'blur(4px)'
            },
            dialog: {
                borderLeftRadius: 'lg',
                boxShadow: 'xl',
                bg: theme_tools_1.mode('white', 'gray.800')(props)
            },
            header: {
                py: 4,
                bg: theme_tools_1.mode('green.50', 'green.900')(props),
                color: theme_tools_1.mode('green.700', 'green.100')(props),
                borderBottomWidth: '1px',
                borderBottomColor: theme_tools_1.mode('gray.200', 'gray.700')(props),
                boxShadow: 'sm'
            },
            body: {
                bg: theme_tools_1.mode('gray.50', 'gray.800')(props)
            },
            footer: {
                borderTopWidth: '1px',
                borderTopColor: theme_tools_1.mode('gray.200', 'gray.700')(props),
                bg: theme_tools_1.mode('white', 'gray.800')(props),
                boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
            },
            closeButton: {
                bg: theme_tools_1.mode('gray.100', 'whiteAlpha.200')(props),
                borderRadius: 'full',
                m: 2,
                transition: 'all 0.2s',
                _hover: {
                    bg: theme_tools_1.mode('gray.200', 'whiteAlpha.300')(props),
                    transform: 'rotate(90deg)'
                }
            }
        }); }
    },
    // Cart item styling
    cartItem: {
        baseStyle: function (props) { return ({
            bg: theme_tools_1.mode('white', 'gray.700')(props),
            p: 3,
            borderRadius: 'md',
            boxShadow: 'sm',
            transition: 'all 0.3s',
            border: '1px solid',
            borderColor: theme_tools_1.mode('gray.200', 'gray.600')(props),
            _hover: {
                boxShadow: 'md',
                transform: 'translateY(-2px)',
                borderColor: theme_tools_1.mode('green.200', 'green.500')(props)
            }
        }); }
    },
    // Cart animations
    animations: {
        fadeIn: {
            from: { opacity: 0, transform: 'translateX(20px)' },
            to: { opacity: 1, transform: 'translateX(0)' }
        },
        slideUp: {
            from: { opacity: 0, transform: 'translateY(10px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
        },
        pulse: {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.05)' },
            '100%': { transform: 'scale(1)' }
        }
    },
    // Floating cart button styling
    floatingCart: {
        baseStyle: function (props) { return ({
            position: 'sticky',
            bottom: 4,
            width: '100%',
            padding: 4,
            backgroundColor: theme_tools_1.mode('rgba(56, 175, 82, 0.8)', 'rgba(56, 175, 82, 0.6)')(props),
            backdropFilter: 'blur(8px)',
            borderRadius: 'lg',
            boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            transition: 'all 0.3s ease',
            _hover: {
                backgroundColor: theme_tools_1.mode('rgba(56, 175, 82, 0.9)', 'rgba(56, 175, 82, 0.7)')(props)
            }
        }); }
    },
    // CompletarPedido button styling
    completarPedido: {
        baseStyle: function (props) { return ({
            height: '60px',
            width: '100%',
            fontWeight: 'bold',
            fontSize: 'md',
            boxShadow: 'md',
            transition: 'all 0.2s ease-in-out',
            _hover: {
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
                textDecoration: 'none'
            },
            _active: {
                transform: 'translateY(0)',
                boxShadow: 'md'
            }
        }); }
    },
    // Empty cart styling
    emptyCart: {
        baseStyle: function (props) { return ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: theme_tools_1.mode('gray.500', 'gray.400')(props),
            textAlign: 'center'
        }); }
    },
    // Total price display styling
    totalPrice: {
        baseStyle: function (props) { return ({
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
            fontSize: 'lg',
            padding: 3,
            backgroundColor: theme_tools_1.mode('green.50', 'green.800')(props),
            borderRadius: 'md',
            boxShadow: 'sm'
        }); }
    }
};
// Export custom scrollbar styles
exports.customScrollbar = function (props) { return ({
    '&::-webkit-scrollbar': {
        width: '8px'
    },
    '&::-webkit-scrollbar-track': {
        width: '10px',
        background: theme_tools_1.mode('gray.100', 'gray.700')(props)
    },
    '&::-webkit-scrollbar-thumb': {
        background: theme_tools_1.mode('gray.300', 'gray.600')(props),
        borderRadius: '24px'
    }
}); };
// Export utility functions for cart components
exports.cartUtils = {
    // Generate staggered animation for cart items
    getStaggeredAnimation: function (index, animationName, duration) {
        if (duration === void 0) { duration = 0.3; }
        return animationName + " " + (0.2 + index * 0.1) + "s ease-out";
    },
    // Format cart item count with proper pluralization
    formatItemCount: function (count) {
        return count + " " + (count === 1 ? 'producto' : 'productos');
    }
};
