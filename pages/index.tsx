import { useState, useMemo } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Button, Flex, Image as ChakraImage, Grid, Stack, Text, Box, Badge, useDisclosure } from '@chakra-ui/react';

import api from '../product/api';
import { Product } from '../product/types';
import Carrito from '../components/Carrito';
import CompletarPedido from '../components/CompletarPedido';
import { getAllCategories } from '../product/categoriastypes';
import { nuevoStyles } from '../theme/nuevoStyles';

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
  const [filteredCategory, setFilteredCategory] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (!filteredCategory) return products;
    return products.filter(product => product.category === filteredCategory);
  }, [products, filteredCategory]);

  const removeFromCart = (index: number) => {
    setCart((currentCart) => {
      const newCart = [...currentCart];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  return (
    <>
      <Head>
        <title>PrecioHogar</title>
        <meta name="description" content="Tu tienda online de confianza para productos del hogar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Cart drawer component */}
      <Carrito
        isOpen={isOpen} 
        onClose={onClose} 
        cart={cart} 
        removeFromCart={removeFromCart}
        parseCurrency={parseCurrency}
      />
  
      {/* Hero Section */}
      <Box sx={nuevoStyles.hero.container}>
        <Box sx={nuevoStyles.hero.gradient} />
        <Box sx={nuevoStyles.hero.pattern} />
        
        {/* Animated particles */}
        <Box sx={nuevoStyles.hero.particles}>
          {[...Array(6)].map((_, i) => (
            <Box 
              key={i} 
              sx={nuevoStyles.hero.particle} 
              style={{ left: `${10 + (i * 15)}%`, animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </Box>
        
        <Flex sx={nuevoStyles.hero.content}>
          <Text
            sx={nuevoStyles.hero.title}
            className="hero-title"
          >
            Precio<Box as="span" color="yellow.300">Hogar</Box>
          </Text>
          <Text
            sx={nuevoStyles.hero.subtitle}
            className="hero-subtitle"
          >
            Los mejores productos para tu hogar a precios increíbles
          </Text>
          <Flex sx={nuevoStyles.hero.buttonContainer}>
            <Button
              sx={nuevoStyles.hero.primaryButton}
              className="hero-button"
              onClick={() => window.scrollTo({ top: document.getElementById('products')?.offsetTop || 0, behavior: 'smooth' })}
              leftIcon={
                <Box 
                  as="img" 
                  src="/carritovacio.svg" 
                  width="22px" 
                  height="22px" 
                  filter="brightness(0)" 
                  transition="transform 0.3s ease"
                  className="button-icon"
                />
              }
            >
              Ver Productos
            </Button>
            <Button
              sx={nuevoStyles.hero.secondaryButton}
              className="hero-button"
              onClick={() => window.open('https://wa.me/59892315819', '_blank')}
              leftIcon={
                <Box 
                  as="img" 
                  src="/whatsapp-icon.svg" 
                  width="22px" 
                  height="22px" 
                  filter="brightness(0) invert(1)" 
                  transition="transform 0.3s ease"
                  className="button-icon"
                />
              }
            >
              Contactar
            </Button>
          </Flex>
        </Flex>
        
        {/* Animated decorative elements */}
        <Box sx={nuevoStyles.hero.decorativeShape1} />
        <Box sx={nuevoStyles.hero.decorativeShape2} />
        
        <Box sx={nuevoStyles.hero.imageContainer} className="hero-image">
          <ChakraImage
            src="/LogoTiendaoscuro.svg"
            alt="Decoración"
            sx={nuevoStyles.hero.image}
            fallbackSrc="https://via.placeholder.com/300?text=Precio+Hogar"
            objectFit="contain"
            htmlWidth="100%"
            htmlHeight="100%"
          />
        </Box>
      </Box>

      {/* Category filter buttons */}
      <Box 
        mb={6} 
        mt={4} 
        px={4}
        py={3}
        borderRadius="lg"
        boxShadow="sm"
        bg="white"
        overflowX="auto"
      >
        <Flex 
          wrap="nowrap" 
          gap={3} 
          justifyContent={{ base: "flex-start", md: "center" }}
          width="100%"
        >
          <Button
            size="sm"
            colorScheme="gray"
            variant="outline"
            borderRadius="full"
            onClick={() => setFilteredCategory(null)}
            fontWeight={filteredCategory === null ? "bold" : "normal"}
            _hover={{ bg: "gray.100" }}
            minW="max-content"
          >
            Todos
          </Button>
          {getAllCategories().map((category) => (
            <Button
              key={category}
              size="sm"
              colorScheme="primary"
              variant={filteredCategory === category ? "solid" : "outline"}
              borderRadius="full"
              onClick={() => setFilteredCategory(category)}
              _hover={{ transform: "translateY(-2px)" }}
              transition="all 0.2s"
              minW="max-content"
            >
              {category}
            </Button>
          ))}
        </Flex>
      </Box>
    
      <Stack spacing={6}>
        <Grid
          id="products"
          gridGap={6}
          templateColumns="repeat(auto-fill, minmax(280px,1fr))"
        >
          {filteredProducts.map((product) => (
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
              {/* Product content remains unchanged */}
              {product.badge && (
                <Badge 
                  position="absolute" 
                  top={2} 
                  right={2} 
                  colorScheme="red" 
                  borderRadius="full" 
                  px={2}
                >
                  {product.badge}
                </Badge>
              )}
              <Box 
                position="relative"
                height="200px"
                overflow="hidden"
                borderRadius="md"
              >
                <ChakraImage
                  borderRadius="md"
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  src={product.image}
                  alt={product.title}
                  transition="transform 0.5s ease"
                  _hover={{ transform: "scale(1.05)" }}
                />
              </Box>
              <Stack spacing={2}>
                <Text 
                  fontWeight="bold" 
                  fontSize="lg"
                  noOfLines={1}
                >
                  {product.title}
                </Text>
                <Text 
                  color="gray.600" 
                  fontSize="sm" 
                  noOfLines={2}
                  height="40px"
                >
                  {product.description || "Sin descripción disponible"}
                </Text>
                <Flex justify="space-between" align="center">
                  <Text 
                    color="green.500" 
                    fontSize="xl" 
                    fontWeight="700"
                  >
                    {parseCurrency(product.price)}
                  </Text>
                  <Button
                    colorScheme="primary"
                    size="md"
                    borderRadius="full"
                    leftIcon={<Box as="img" src="/carritovacio.svg" width="18px" height="18px" filter="brightness(0) invert(1)" />}
                    onClick={() => setCart((cart) => cart.concat(product))}
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                    transition="all 0.2s ease"
                  >
                    Agregar
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          ))}
        </Grid>
        
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
              Ver Carrito ({cart.length})
            </Button>
            
            <CompletarPedido 
              cart={cart} 
              parseCurrency={parseCurrency} 
              phoneNumber="59892315819"
            />
          </Flex>
        )}
      </Stack>
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
