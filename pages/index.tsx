import { useState, useMemo } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Button, Flex, Image, Grid, Link, Stack, Text, Box, Heading, Container } from '@chakra-ui/react';

import api from '../product/api';
import { Product } from '../product/types';

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
  const text = useMemo(
    () =>
      cart
        .reduce(
          (message, product) =>
            message.concat(
              `* ${product.title} - ${parseCurrency(product.price)}\n`
            ),
          ``
        )
        .concat(
          `\nTotal: ${parseCurrency(
            cart.reduce((total, product) => total + product.price, 0)
          )}`
        ),
    [cart]
  );

  return (
    <>

      
      {/* Header */}
      <Box as="header" bg="blue.600" color="white" py={4} mb={6}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Heading as="h1" size="xl">PrecioHogar</Heading>
              <Text fontSize="sm">Tu fuente confiable de electrodomésticos de calidad</Text>
            </Box>
            <Box>
              <Text fontSize="sm">WhatsApp: (+598) 092 315 819</Text>
              <Text fontSize="sm">Montevideo, Uruguay</Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      
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
                  onClick={() => setCart((cart) => cart.concat(product))}
                  leftIcon={<Box as="span" fontSize="1.2em">🛒</Box>}
                >
                  Agregar al carrito
                </Button>
              </Stack>
            ))}
          </Grid>
          {Boolean(cart.length) && (
            <Flex
              position="sticky"
              justifyContent="center"
              bottom={0}
              padding={4}
              backdropFilter="blur(8px)"
              bg="rgba(255, 255, 255, 0.9)"
              borderTop="1px solid"
              borderColor="gray.200"
              zIndex={10}
            >
              <Button
                isExternal
                as={Link}
                bg="#25D366"
                color="white"
                size="lg"
                fontWeight="bold"
                borderRadius="full"
                boxShadow="0 4px 12px rgba(37, 211, 102, 0.5)"
                px={8}
                py={6}
                _hover={{ 
                  bg: "#128C7E",
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 16px rgba(37, 211, 102, 0.6)',
                }}
                _active={{
                  bg: "#075E54",
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
                href={`https://wa.me/59892315819?text=${encodeURIComponent(
                  text
                )}`}
              >
                Completar pedido ({cart.length} productos)
              </Button>
            </Flex>
          )}
        </Stack>
      </Container>
      
      {/* Footer */}
      <Box as="footer" bg="gray.100" mt={10} py={6}>
        <Container maxW="container.xl">
          <Stack spacing={4}>
            <Heading as="h3" size="md">Contacto</Heading>
            <Text>Email: preciohogaruruguay@gmail.com</Text>
            <Text>WhatsApp: (+598) 092 315 819</Text>
            <Text>Ubicación: Montevideo, Uruguay</Text>
            <Text fontSize="sm" mt={4}>© 2025 PrecioHogar. Todos los derechos reservados.</Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.getProducts();
  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};

export default Home;
