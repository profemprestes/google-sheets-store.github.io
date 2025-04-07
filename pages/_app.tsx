import type { AppProps } from 'next/app';
import {
  ChakraProvider,
  Container,
  Box,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useState, useCallback } from 'react';

import theme from '../theme';
import Head from '../components/Head';
import NavBar from '../components/NavBar';
import Carrito from '../components/Carrito';
import BusquedaProductos from '../components/BusquedaProductos';
import { Product } from '../product/types';
import api from '../product/api';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cart, setCart] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Function to add an item to the cart
  const addToCart = useCallback((product: Product) => {
    setCart(prevCart => {
      // Use the groupCartItems function from API to handle duplicates
      return api.groupCartItems([...prevCart, { ...product, quantity: 1 }]);
    });
    // Open the cart drawer when adding items
    onOpen();
  }, [onOpen]);

  // Function to remove an item from the cart
  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Function to format currency
  const parseCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-UY', {
      style: 'currency',
      currency: 'UYU',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Handle filtered products from BusquedaProductos
  const handleFilteredProducts = (filtered: Product[]) => {
    setFilteredProducts(filtered);
  };

  return (
    <ChakraProvider theme={theme}>
      <Head />
      <NavBar 
        title="Precio Hogar" 
        slogan="Los mejores precios para tu hogar"
      />
      

      
      <Box minH="100vh" bg={bgColor} color={textColor}>
        <Container maxW="container.xl" py={4}>
          <Component {...pageProps} cart={cart} addToCart={addToCart} {...pageProps} />
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
};

export default App;
