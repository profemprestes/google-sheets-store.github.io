import { useState, useEffect } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { Button, Flex, Grid, Stack, Text, Box, useDisclosure, Container, VStack, Divider, Spinner, Center, Image } from '@chakra-ui/react';

import api from '../product/api';
import { Product as ApiProduct } from '../product/types';
import CompletarPedido from '../components/CompletarPedido';
import BusquedaProductos from '../components/BusquedaProductos';
import { useInfiniteScroll } from '../theme/principal';
import { DEFAULT_CATEGORY } from '../product/categoriastypes';

// Use the ApiProduct type directly instead of creating a new interface
// This ensures type compatibility with the API and other components

interface Props {
  products: ApiProduct[];
}

const Home: NextPage<Props> = ({ products }) => {
  const [cart, setCart] = useState<ApiProduct[]>([]);
  const { onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<ApiProduct[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  
  // Convert products to ensure they all have a category
  const productsWithCategory = products.map(product => ({
    ...product,
    category: product.category || DEFAULT_CATEGORY
  }));
  
  // Use the custom hook for infinite scrolling with filtered products
  const { visibleItems, containerRef } = useInfiniteScroll<ApiProduct>(
    filteredProducts.length > 0 ? filteredProducts : productsWithCategory,
    8 // Initial batch size
  );

  // Initialize filtered products with all products
  useEffect(() => {
    setFilteredProducts(productsWithCategory);
  }, [products, productsWithCategory]);

  const handleAddToCart = (product: ApiProduct) => {
    // Use the groupCartItems function from the API to handle duplicates
    const updatedCart = api.groupCartItems([...cart, { ...product, quantity: 1 }]);
    setCart(updatedCart);
  };

  const parseCurrency = (amount: number) => {
    // Force a specific locale and formatting options to ensure consistency
    return new Intl.NumberFormat('es-UY', {
      style: 'currency',
      currency: 'UYU',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Handle filtered products from BusquedaProductos
  const handleFilteredProducts = (filtered: ApiProduct[]) => {
    setFilteredProducts(filtered);
    setIsLoading(false);
    // Set search active state based on whether we're showing filtered results
    setIsSearchActive(filtered.length !== productsWithCategory.length);
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Nuestros Productos Destacados
          </Text>
          <Divider />
        </Box>

        {/* BusquedaProductos component with onFilter callback */}
        <BusquedaProductos 
          products={productsWithCategory} 
          onAddToCart={handleAddToCart}
          onFilter={handleFilteredProducts}
        />

        {/* Only show grid if search is not active */}
        {!isSearchActive && (
          <Box ref={containerRef} w="100%">
            <Grid
              gridGap={6}
              templateColumns="repeat(auto-fill, minmax(280px,1fr))"
            >
              {visibleItems.map((product) => (
                <Stack
                  key={product.id}
                  backgroundColor="white"
                  borderRadius="lg"
                  padding={4}
                  spacing={3}
                  boxShadow="md"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "lg"
                  }}
                  position="relative"
                  overflow="hidden"
                >
                  {/* Product image */}
                  <Box
                    height="180px"
                    borderRadius="md"
                    overflow="hidden"
                    mb={2}
                  >
                    <Image
                      src={product.image || '/placeholder-image.jpg'}
                      alt={product.title}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                    />
                  </Box>
                  
                  {/* Product info */}
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    noOfLines={2}
                    mb={1}
                  >
                    {product.title}
                  </Text>
                  
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    noOfLines={2}
                    mb={2}
                  >
                    {product.description || "Sin descripción disponible"}
                  </Text>
                  
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="green.500"
                    mb={2}
                  >
                    ${product.price.toLocaleString()}
                  </Text>
                  
                  {/* Add to cart button */}
                  <Button
                    colorScheme="primary"
                    size="md"
                    borderRadius="full"
                    leftIcon={<Box as="img" src="/carritovacio.svg" width="18px" height="18px" filter="brightness(0) invert(1)" />}
                    onClick={() => handleAddToCart({
                      id: product.id,
                      title: product.title,
                      description: product.description,
                      image: product.image || '',
                      price: product.price,
                      quantity: 1,
                      rating: product.rating || 4.5,
                      badge: product.badge,
                      category: product.category,
                    })}
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                    transition="all 0.2s ease"
                  >
                    Agregar
                  </Button>
                </Stack>
              ))}
            </Grid>
            
            {/* Loading indicator */}
            {isLoading && (
              <Center py={6}>
                <Spinner size="lg" color="primary.500" thickness="4px" />
              </Center>
            )}
          </Box>
        )}
        
        {Boolean(cart.length) && (
          <Flex
            position="sticky"
            justifyContent="center"
            bottom={4}
            padding={4}
            backgroundColor="rgba(56, 175, 82, 0.8)"
            backdropFilter="blur(8px)"
            borderRadius="lg"
            boxShadow="0 -4px 10px rgba(0, 0, 0, 0.1)"
            width="100%"
            zIndex={10}
            gap={4}
          >
            <Button
              colorScheme="blue"
              size="lg"
              leftIcon={<Box as="img" src="/carritovacio.svg" width="20px" height="20px" filter="brightness(0) invert(1)" />}
              fontWeight="bold"
              px={6}
              py={6}
              onClick={onOpen}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              _active={{
                transform: 'translateY(0)',
              }}
              transition="all 0.2s ease-in-out"
            >
              Ver Carrito ({cart.reduce((total, item) => total + (item.quantity || 1), 0)})
            </Button>
            
            <CompletarPedido 
              cart={cart} 
              parseCurrency={parseCurrency} 
              phoneNumber="59892315819"
            />
          </Flex>
        )}
      </VStack>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products = await api.getProducts();
  return {
    props: {
      products,
    },
    revalidate: 60, // Revalidar cada 60 segundos
  };
};

export default Home;
