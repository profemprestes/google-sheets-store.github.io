import { useState, useMemo } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import {
  Button,
  Flex,
  Image,
  Grid,
  Stack,
  Text,
  Box,
  Badge,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';

import api from '../product/api';
import { Product } from '../product/types';
import Carrito from '../components/Carrito';
import CompletarPedido from '../components/CompletarPedido';

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <>
      <Head>
        <title>Precio Hogar - Tu tienda online</title>
        <meta name="description" content="Tienda online de productos para el hogar" />
      </Head>

      <Flex direction="column" minH="100vh">
        <Box flex="1">
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={6}
            padding={4}
          >
            {products.map((product) => (
              <Box
                key={product.id}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="lg"
                boxShadow="sm"
                p={4}
                transition="all 0.3s ease"
                _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
              >
                <Stack spacing={4}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    height={200}
                    width="100%"
                    objectFit="cover"
                    borderRadius="lg"
                  />
                  <Stack spacing={2}>
                    <Text fontSize="lg" fontWeight="bold">
                      {product.title}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {product.description}
                    </Text>
                    <Text fontSize="xl" fontWeight="bold" color="green.600">
                      {parseCurrency(product.price)}
                    </Text>
                    <Button
                      colorScheme="whatsapp"
                      onClick={() => {
                        addToCart(product);
                        onOpen();
                      }}
                    >
                      Agregar al carrito
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Grid>
        </Box>

        <Carrito
          isOpen={isOpen}
          onClose={onClose}
          cart={cart}
          removeFromCart={removeFromCart}
          parseCurrency={parseCurrency}
        />
      </Flex>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products = await api.getProducts();
  return {
    props: { products },
    revalidate: 60, // Revalidate every minute
  };
};

export default Home;
