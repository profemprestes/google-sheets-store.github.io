import { ChakraProvider, Container, Box, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { useState, useCallback } from 'react';
import type { AppProps } from 'next/app';
import { NextPage, NextPageContext } from 'next';
import theme from '../theme';
import Head from '../components/Head';
import NavBar from '../components/NavBar';
import Carrito from '../components/Carrito';
import { Product } from '../product/types';

export type CustomAppProps = AppProps & {
  Component: NextPage & {
    getInitialProps?: (ctx: NextPageContext) => Promise<{ products: Product[] }>;
  };
};

function App({ Component, pageProps }: CustomAppProps) {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'white');
  const { isOpen, onClose } = useDisclosure();
  const [cart, setCart] = useState<Product[]>([]);

  // Function to add an item to the cart
  const addToCart = useCallback((product: Product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = useCallback((index: number) => {
    setCart((prev) => {
      const newCart = [...prev];
      newCart.splice(index, 1);
      return newCart;
    });
  }, []);

  // Function to format currency
  const parseCurrency = useCallback((amount: number) => {
    return new Intl.NumberFormat('es-UY', {
      style: 'currency',
      currency: 'UYU',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Head />
      <NavBar title="Precio Hogar" slogan="Los mejores precios para tu hogar" />
      <Box minH="100vh" bg={bgColor} color={textColor}>
        <Container maxW="container.xl" py={4}>
          <Component {...pageProps} cart={cart} addToCart={addToCart} />
        </Container>
      </Box>

      <Carrito
        isOpen={isOpen}
        onClose={onClose}
        cart={cart}
        removeFromCart={removeFromCart}
        parseCurrency={parseCurrency}
      />
    </ChakraProvider>
  );
}

export default App;
