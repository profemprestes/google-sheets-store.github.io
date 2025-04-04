import { useState, useMemo } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Button, Flex, Image, Grid, Link, Stack, Text, Box, Heading, Container, useDisclosure } from '@chakra-ui/react';

import api from '../product/api';
import { Product } from '../product/types';
import CheckoutForm, { CustomerInfo } from '../product/CheckoutForm';
import Footer from './footer'; // Import the Footer component

interface Props {
  products: Product[];
}

function parseCurrency(value: number): string {
  return new Intl.NumberFormat('es-UY', {
    style: 'currency',
    currency: 'UYU',
  }).format(value);
}

const Home: NextPage<Props> = ({ products }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Función para agregar productos al carrito
  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      // Usamos el método groupCartItems para manejar las cantidades
      return api.groupCartItems([...currentCart, product]);
    });
  };
  
  // Función para incrementar la cantidad de un producto
  const incrementQuantity = (productId: string) => {
    setCart((currentCart) => {
      return currentCart.map(item => 
        item.id === productId 
          ? api.updateProductQuantity(item, (item.quantity || 1) + 1)
          : item
      );
    });
  };
  
  // Función para decrementar la cantidad de un producto
  const decrementQuantity = (productId: string) => {
    setCart((currentCart) => {
      return currentCart.map(item => {
        if (item.id === productId && item.quantity && item.quantity > 1) {
          return api.updateProductQuantity(item, item.quantity - 1);
        }
        return item;
      });
    });
  };
  
  // Función para eliminar un producto del carrito
  const removeFromCart = (productId: string) => {
    setCart((currentCart) => currentCart.filter(item => item.id !== productId));
  };
  
  const handleCheckoutSubmit = (info: CustomerInfo) => {
    setCustomerInfo(info);
    // Redirigir a WhatsApp con la información del cliente
    const customerText = `
Informacion del Pedido
Nombre: ${info.name}
Dirección: ${info.address}
Teléfono: ${info.phone}
Necesito mas Informacion sobre los productos solicitados:

Productos:`;

    const productsText = cart
      .reduce(
        (message, product) =>
          message.concat(
            `* ${product.title} x ${product.quantity || 1} - ${parseCurrency(product.price * (product.quantity || 1))}\n`
          ),
        ``
      );
      
    const totalText = `\nTotal: ${parseCurrency(
      cart.reduce((total, product) => total + product.price * (product.quantity || 1), 0)
    )}`;
    
    const fullText = customerText + '\n' + productsText + totalText;
    
    window.open(`https://wa.me/59892315819?text=${encodeURIComponent(fullText)}`, '_blank');
  };
  
  // Modificamos el text para que no se use directamente (ahora usamos handleCheckoutSubmit)
  const text = useMemo(
    () =>
      cart
        .reduce(
          (message, product) =>
            message.concat(
              `* ${product.title} x ${product.quantity || 1} - ${parseCurrency(product.price * (product.quantity || 1))}\n`
            ),
          ``
        )
        .concat(
          `\nTotal: ${parseCurrency(
            cart.reduce((total, product) => total + product.price * (product.quantity || 1), 0)
          )}`
        ),
    [cart]
  );

  return (
    <>
      {/* Agregar el componente CheckoutForm */}
      <CheckoutForm 
        isOpen={isOpen} 
        onClose={onClose} 
        onSubmit={handleCheckoutSubmit} 
      />
      
      <Container maxW="container.xl">
        <Stack spacing={6}>
          <Grid
            gridGap={6}
            templateColumns="repeat(auto-fill, minmax(240px,1fr))"
          >
            {products.map((product) => (
              <Stack
                key={product.id}
                backgroundColor="white"
                borderRadius="md"
                boxShadow="md"
                padding={4}
                spacing={3}
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
              >
                <Image
                  borderRadius="md"
                  maxHeight="150px"
                  objectFit="cover"
                  src={product.image}
                  alt={product.title}
                />
                <Stack spacing={1}>
                  <Text fontWeight="500">{product.title}</Text>
                  <Text color="blue.600" fontSize="lg" fontWeight="700">
                    {parseCurrency(product.price)}
                  </Text>
                </Stack>
                <Button
                  colorScheme="blue"
                  size="md"
                  fontWeight="bold"
                  borderRadius="full"
                  boxShadow="sm"
                  _hover={{ 
                    transform: 'scale(1.05)',
                    boxShadow: 'md',
                    bg: 'blue.500'
                  }}
                  _active={{
                    transform: 'scale(0.95)',
                    bg: 'blue.700'
                  }}
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  onClick={() => addToCart(product)}
                  leftIcon={<Box as="span" fontSize="1.2em">🛒</Box>}
                >
                  Agregar al carrito
                </Button>
              </Stack>
            ))}
          </Grid>
          
          {Boolean(cart.length) && (
            <>
              {/* Mostrar resumen del carrito */}
              <Box 
                bg="white" 
                p={4} 
                borderRadius="md" 
                boxShadow="md"
                mb={4}
              >
                <Heading size="md" mb={3}>Resumen del Carrito</Heading>
                <Stack spacing={3}>
                  {cart.map((item) => (
                    <Flex key={item.id} justify="space-between" align="center">
                      <Text fontWeight="medium">{item.title}</Text>
                      <Flex align="center">
                        <Button 
                          size="xs" 
                          colorScheme="blue" 
                          variant="outline"
                          onClick={() => decrementQuantity(item.id)}
                          isDisabled={(item.quantity || 1) <= 1}
                        >
                          -
                        </Button>
                        <Text mx={2} fontWeight="bold">{item.quantity || 1}</Text>
                        <Button 
                          size="xs" 
                          colorScheme="blue" 
                          variant="outline"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          +
                        </Button>
                        <Text ml={4} fontWeight="bold">
                          {parseCurrency(item.price * (item.quantity || 1))}
                        </Text>
                        <Button 
                          size="xs" 
                          colorScheme="red" 
                          ml={2}
                          onClick={() => removeFromCart(item.id)}
                        >
                          ✕
                        </Button>
                      </Flex>
                    </Flex>
                  ))}
                  <Flex justify="space-between" borderTop="1px solid" borderColor="gray.200" pt={2} mt={2}>
                    <Text fontWeight="bold">Total:</Text>
                    <Text fontWeight="bold">
                      {parseCurrency(cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0))}
                    </Text>
                  </Flex>
                </Stack>
              </Box>
              
              {/* Botón de WhatsApp - Modificado para abrir el formulario en lugar de ir directamente a WhatsApp */}
              <Flex
                position="sticky"
                justifyContent="center"
                bottom={0}
                padding={4}
                backdropFilter="blur(8px)"
                bg="rgba(255, 255, 255, 0.8)"
                zIndex={10}
              >
                <Button
                  colorScheme="whatsapp"
                  size="lg"
                  fontWeight="bold"
                  borderRadius="full"
                  boxShadow="0 4px 12px rgba(37, 211, 102, 0.5)"
                  px={8}
                  py={6}
                  _hover={{ 
                    transform: 'translateY(-3px)',
                    boxShadow: '0 6px 16px rgba(37, 211, 102, 0.6)',
                  }}
                  _active={{
                    transform: 'translateY(1px)',
                    boxShadow: '0 2px 8px rgba(37, 211, 102, 0.4)',
                  }}
                  transition="all 0.3s ease"
                  leftIcon={
                    <Box as="span" fontSize="1.5em" mr={2}>
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="#FFFFFF">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.419-.1.824z"/>
                      </svg>
                    </Box>
                  }
                  onClick={onOpen} // Cambiado para abrir el modal en lugar de ir a WhatsApp
                >
                  Completar pedido ({cart.reduce((total, item) => total + (item.quantity || 1), 0)} productos)
                </Button>
              </Flex>
            </>
          )}
        </Stack>
      </Container>
      
      {/* Replace the existing footer with the Footer component */}
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.getProducts();
  return {
    props: {
      products,
    }
    // Se eliminó revalidate: 10
  };
};

export default Home;