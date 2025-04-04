import { useState, useMemo } from 'react';
import type { NextPage, GetStaticProps } from 'next';
// Remove the Head import from next/head
import NextImage from 'next/image';
import { Button, Flex, Grid, Link, Stack, Text, Box, Heading, Container, useDisclosure, Divider } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

import api from '../product/api';
import { Product } from '../product/types';
import CheckoutForm, { CustomerInfo } from '../product/CheckoutForm';
import ResumenCarrito from '../components/resumencarrito';
// Import our custom Head component
import Head from '../components/Head';

// The Footer is now imported in _app.tsx, so we don't need to import it here

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

  // Use useMemo for date to ensure consistent rendering
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  
  return (
    <>
      {/* Replace the inline Head with our custom Head component */}
      <Head 
        title="PrecioHogar - Electrodomésticos y más para tu hogar"
        description="Descubre nuestra selección de electrodomésticos y artículos de calidad a precios increíbles. Envíos a todo Uruguay."
        canonical="https://preciohogar.com" // Replace with your actual domain
      />

      {/* Agregar el componente CheckoutForm */}
      <CheckoutForm 
        isOpen={isOpen} 
        onClose={onClose} 
        onSubmit={handleCheckoutSubmit} 
      />
      
      {/* Note: Hero is now added in _app.tsx, so we don't need to add it here */}
      
      <Container maxW="container.xl" id="productos">
        <Heading 
          as="h2" 
          size="xl" 
          textAlign="center" 
          my={8}
          bgGradient="linear(to-r, blue.500, blue.700)"
          bgClip="text"
        >
          Nuestros Productos
        </Heading>
        <Divider mb={8} />
        
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
                className="product-card"
              >
                <Box 
                  position="relative" 
                  height="150px" 
                  width="100%" 
                  borderRadius="md" 
                  overflow="hidden"
                >
                  <NextImage
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ 
                      objectFit: 'cover',
                      borderRadius: 'md'
                    }}
                    priority={false}
                    loading="lazy"
                    quality={75}
                  />
                </Box>
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
            <ResumenCarrito
              cart={cart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              removeFromCart={removeFromCart}
              parseCurrency={parseCurrency}
              onCheckout={onOpen}
            />
          )}
        </Stack>
      </Container>
      
      {/* We don't need to add the Footer here as it's already in _app.tsx */}
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