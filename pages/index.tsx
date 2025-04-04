import { useState, useMemo, useEffect } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Button, Flex, Image, Grid, Link, Stack, Text, Box, Heading, Container, useDisclosure } from '@chakra-ui/react';

import api from '../product/api';
import { Product } from '../product/types';
import CheckoutForm, { CustomerInfo } from '../product/CheckoutForm';

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
      
      {/* Header con categorías */}
      <Box 
        position="sticky" 
        top="0" 
        zIndex="20"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={isScrolled ? "md" : "none"}
        transition="box-shadow 0.3s ease"
        py={3}
      >
        <Container maxW="container.xl">
          <Flex overflowX="auto" pb={2} css={{
            '&::-webkit-scrollbar': {
              height: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,0.2)',
              borderRadius: '10px',
            }
          }}>
            {categories.map(category => (
              <Button
                key={category}
                size="sm"
                mx={1}
                colorScheme="blue"
                variant={selectedCategory === category || (category === 'Todos' && !selectedCategory) ? "solid" : "outline"}
                onClick={() => setSelectedCategory(category === 'Todos' ? null : category)}
                minW="auto"
                whiteSpace="nowrap"
                borderRadius="full"
                _first={{ ml: 0 }}
              >
                {category}
              </Button>
            ))}
          </Flex>
        </Container>
      </Box>
      
      <Container maxW="container.xl" py={6}>
        {/* Título de la sección */}
        <Heading 
          as="h1" 
          size="xl" 
          mb={6}
          textAlign="center"
          bgGradient="linear(to-r, blue.400, blue.600)"
          bgClip="text"
          letterSpacing="tight"
        >
          {selectedCategory ? `Productos de ${selectedCategory}` : 'Todos los Productos'}
        </Heading>
        
        {/* Grid de productos con animación */}
        <SimpleGrid 
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }} 
          spacing={6}
          mb={10}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <Box
                className="product-card"
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                height="100%"
                display="flex"
                flexDirection="column"
              >
                <Box position="relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    height="200px"
                    width="100%"
                    objectFit="cover"
                  />
                  <Badge
                    position="absolute"
                    top={2}
                    right={2}
                    colorScheme="blue"
                    borderRadius="full"
                    px={2}
                  >
                    {product.category}
                  </Badge>
                </Box>
                
                <Stack p={4} flex="1" spacing={3}>
                  <Heading as="h3" size="md" noOfLines={2}>
                    {product.title}
                  </Heading>
                  
                  <Text fontSize="sm" color="gray.600" noOfLines={2}>
                    {product.description}
                  </Text>
                  
                  <Flex mt="auto" justify="space-between" align="center">
                    <Text
                      color="blue.600"
                      fontSize="xl"
                      fontWeight="bold"
                    >
                      {parseCurrency(product.price)}
                    </Text>
                    
                    <Tooltip label="Agregar al carrito" hasArrow>
                      <Button
                        colorScheme="blue"
                        size="sm"
                        borderRadius="full"
                        onClick={() => addToCart(product)}
                        _hover={{
                          transform: 'scale(1.1)',
                        }}
                        transition="all 0.2s"
                      >
                        <Icon as={FaShoppingCart} />
                      </Button>
                    </Tooltip>
                  </Flex>
                </Stack>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
        
        {/* Carrito de compras */}
        {Boolean(cart.length) && (
          <>
            <Box
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              boxShadow="lg"
              p={5}
              mb={6}
            >
              <Heading 
                size="md" 
                mb={4}
                display="flex"
                alignItems="center"
              >
                <Icon as={FaShoppingCart} mr={2} />
                Tu Carrito de Compras
              </Heading>
              
              <Divider mb={4} />
              
              <Stack spacing={4}>
                <AnimatePresence>
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Flex
                        className="cart-item"
                        justify="space-between"
                        align="center"
                        p={2}
                        borderRadius="md"
                      >
                        <Flex align="center" flex="1">
                          <Image
                            src={item.image}
                            alt={item.title}
                            boxSize="50px"
                            objectFit="cover"
                            borderRadius="md"
                            mr={3}
                          />
                          <Box>
                            <Text fontWeight="medium" noOfLines={1}>{item.title}</Text>
                            <Text fontSize="sm" color="gray.600">{parseCurrency(item.price)}</Text>
                          </Box>
                        </Flex>
                        
                        <Flex align="center">
                          <Flex align="center" bg="gray.100" borderRadius="full" p={1}>
                            <IconButton
                              aria-label="Decrementar cantidad"
                              icon={<FaMinus />}
                              size="xs"
                              isRound
                              variant="ghost"
                              onClick={() => decrementQuantity(item.id)}
                              isDisabled={(item.quantity || 1) <= 1}
                            />
                            <Text mx={2} fontWeight="bold" minW="20px" textAlign="center">
                              {item.quantity || 1}
                            </Text>
                            <IconButton
                              aria-label="Incrementar cantidad"
                              icon={<FaPlus />}
                              size="xs"
                              isRound
                              variant="ghost"
                              onClick={() => incrementQuantity(item.id)}
                            />
                          </Flex>
                          
                          <Text fontWeight="bold" mx={4} minW="80px" textAlign="right">
                            {parseCurrency(item.price * (item.quantity || 1))}
                          </Text>
                          
                          <IconButton
                            aria-label="Eliminar producto"
                            icon={<FaTrash />}
                            size="sm"
                            colorScheme="red"
                            variant="ghost"
                            isRound
                            onClick={() => removeFromCart(item.id)}
                          />
                        </Flex>
                      </Flex>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                <Flex 
                  justify="space-between" 
                  borderTop="2px" 
                  borderColor="blue.100" 
                  pt={4} 
                  mt={2}
                  fontWeight="bold"
                >
                  <Text fontSize="lg">Total:</Text>
                  <Text fontSize="xl" color="blue.600">
                    {parseCurrency(cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0))}
                  </Text>
                </Flex>
              </Stack>
            </Box>
            
            {/* Botón flotante de WhatsApp */}
            <Flex
              position="fixed"
              justifyContent="center"
              bottom={6}
              right={6}
              zIndex={10}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="pulse-button"
                  colorScheme="whatsapp"
                  size="lg"
                  borderRadius="full"
                  boxShadow="xl"
                  onClick={onOpen}
                  leftIcon={<Icon as={FaWhatsapp} fontSize="2xl" />}
                  px={6}
                  py={7}
                >
                  Completar pedido ({cart.reduce((total, item) => total + (item.quantity || 1), 0)})
                </Button>
              </motion.div>
            </Flex>
          </>
        )}
      </Container>
      
      {/* Footer mejorado */}
      <Box 
        as="footer" 
        bg="blue.700" 
        color="white" 
        mt={16} 
        py={10}
        borderTopLeftRadius="3xl"
        borderTopRightRadius="3xl"
      >
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Stack spacing={4}>
              <Heading as="h3" size="md" color="white">
                Sobre Nosotros
              </Heading>
              <Text>
                PrecioHogar es tu tienda de confianza para productos de hogar y electrodomésticos de calidad a precios accesibles.
              </Text>
            </Stack>
            
            <Stack spacing={4}>
              <Heading as="h3" size="md" color="white">
                Contacto
              </Heading>
              <Text>Email: preciohogaruruguay@gmail.com</Text>
              <Text>WhatsApp: (+598) 092 315 819</Text>
              <Text>Ubicación: Montevideo, Uruguay</Text>
            </Stack>
            
            <Stack spacing={4}>
              <Heading as="h3" size="md" color="white">
                Horario de Atención
              </Heading>
              <Text>Lunes a Viernes: 9:00 - 18:00</Text>
              <Text>Sábados: 9:00 - 13:00</Text>
            </Stack>
          </SimpleGrid>
          
          <Divider my={8} borderColor="blue.500" />
          
          <Text fontSize="sm" textAlign="center">
            © {new Date().getFullYear()} PrecioHogar. Todos los derechos reservados.
          </Text>
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
    }
    // Se eliminó revalidate: 10
  };
};

export default Home;
