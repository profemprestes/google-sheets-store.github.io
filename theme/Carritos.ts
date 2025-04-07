import { StyleFunctionProps } from '@chakra-ui/styled-system';
import { useColorModeValue } from '@chakra-ui/react';

// Cart component theme customizations
export const carritoStyles = {
  // Drawer component customization
  Drawer: {
    parts: ['dialog', 'overlay', 'header', 'body', 'footer', 'closeButton'],
    baseStyle: (props: StyleFunctionProps) => ({
      overlay: {
        bg: 'blackAlpha.400',
        backdropFilter: 'blur(4px)',
      },
      dialog: {
        borderLeftRadius: 'lg',
        boxShadow: 'xl',
        bg: useColorModeValue('white', 'gray.800'),
      },
      header: {
        py: 4,
        bg: useColorModeValue('green.50', 'green.900'),
        color: useColorModeValue('green.700', 'green.100'),
        borderBottomWidth: '1px',
        borderBottomColor: useColorModeValue('gray.200', 'gray.700'),
        boxShadow: 'sm',
      },
      body: {
        bg: useColorModeValue('gray.50', 'gray.800'),
      },
      footer: {
        borderTopWidth: '1px',
        borderTopColor: useColorModeValue('gray.200', 'gray.700'),
        bg: useColorModeValue('white', 'gray.800'),
        boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
      },
      closeButton: {
        bg: useColorModeValue('gray.100', 'whiteAlpha.200'),
        borderRadius: 'full',
        m: 2,
        transition: 'all 0.2s',
        _hover: {
          bg: useColorModeValue('gray.200', 'whiteAlpha.300'),
          transform: 'rotate(90deg)',
        },
      },
    }),
  },

  // Cart item styling
  cartItem: {
    baseStyle: (props: StyleFunctionProps) => ({
      bg: useColorModeValue('white', 'gray.700'),
      p: 3,
      borderRadius: 'md',
      boxShadow: 'sm',
      transition: 'all 0.3s',
      border: '1px solid',
      borderColor: useColorModeValue('gray.200', 'gray.600'),
      _hover: {
        boxShadow: 'md',
        transform: 'translateY(-2px)',
        borderColor: useColorModeValue('green.200', 'green.500'),
      },
    }),
  },

  // CompletarPedido button styling
  completarPedido: {
    baseStyle: (props: StyleFunctionProps) => ({
      colorScheme: 'whatsapp',
      size: 'lg',
      height: '60px',
      fontWeight: 'bold',
      fontSize: 'md',
      px: 8,
      boxShadow: 'md',
      _hover: {
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
        textDecoration: 'none',
      },
      _active: {
        transform: 'translateY(0)',
        boxShadow: 'md',
      },
      transition: 'all 0.2s ease-in-out',
    }),
  },

  // Empty cart styling
  emptyCart: {
    baseStyle: (props: StyleFunctionProps) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: useColorModeValue('gray.500', 'gray.400'),
      textAlign: 'center',
    }),
  },

  // Total price display styling
  totalPrice: {
    baseStyle: (props: StyleFunctionProps) => ({
      p: 4,
      bg: useColorModeValue('green.50', 'green.800'),
      borderRadius: 'md',
      boxShadow: 'sm',
      transition: 'all 0.3s',
      _hover: {
        boxShadow: 'md',
        transform: 'translateY(-2px)',
      },
    }),
  },
};

// Export custom scrollbar styles
export const customScrollbar = (props: StyleFunctionProps) => ({
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    width: '10px',
    background: useColorModeValue('gray.100', 'gray.700'),
  },
  '&::-webkit-scrollbar-thumb': {
    background: useColorModeValue('gray.300', 'gray.600'),
    borderRadius: '24px',
  },
});

// Export utility functions for cart components
export const cartUtils = {
  getStaggeredAnimation(index: number, animationName: string, duration: number = 0.3) {
    return {
      delay: index * duration,
    };
  },

  formatItemCount(count: number) {
    return count === 1 ? 'producto' : 'productos';
  },
};