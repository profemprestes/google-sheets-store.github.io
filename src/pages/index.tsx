import { useState, useMemo, useContext } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import NextImage from 'next/image';
import { 
  Button, 
  Flex, 
  Grid, 
  Link, 
  Stack, 
  Text, 
  Box, 
  Heading, 
  Container, 
  useDisclosure, 
  Divider,
  useColorModeValue
} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

import api from '../product/api';
import { Product } from '../product/types';
import CheckoutForm, { CustomerInfo } from '../product/CheckoutForm';
import ResumenCarrito from '../components/resumencarrito';
import Head from '../components/Head';
import { AppContext } from './_app';

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
  const { colorMode } = useContext(AppContext);
  
  // Get color mode dependent values
  const cardBg = useColorModeValue("white", "gray.800");
  const headingGradient = useColorModeValue(
    "linear(to-r, blue.500, blue.700)",
    "linear(to-r, blue.300, blue.500)"
  );
  const priceColor = useColorModeValue("blue.600", "blue.300");
  const descriptionColor = useColorModeValue("gray.600", "gray.400");
  
  // Move these hooks outside the callback
  const borderColor = useColorModeValue("transparent", "gray.700");
  const borderWidth = useColorModeValue("0px", "1px");
  const dividerColor = useColorModeValue("blue.200", "blue.700");
  
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
      <Head 
        title="PrecioHogar - Electrodomésticos y más para tu hogar"
        description="Descubre nuestra selección de electrodomésticos y artículos de calidad a precios increíbles. Envíos a todo Uruguay."
        canonical="https://preciohogar.com"
      />

      <CheckoutForm 
        isOpen={isOpen} 
        onClose={onClose} 
        onSubmit={handleCheckoutSubmit} 
      />
      
      <Container maxW="container.xl" id="productos">
        <Heading 
          as="h2" 
          size="xl" 
          textAlign="center" 
          my={8}
          bgGradient={headingGradient}
          bgClip="text"
        >
          Nuestros Productos
        </Heading>
        <Divider mb={8} borderColor={dividerColor} />
        
        <Stack spacing={6}>
          <Grid
            gridGap={6}
            templateColumns="repeat(auto-fill, minmax(260px,1fr))"
          >
            {products.map((product) => (
              <Stack
                key={product.id}
                backgroundColor={cardBg}
                borderRadius="lg"
                boxShadow="card"
                padding={5}
                spacing={4}
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-8px)', boxShadow: 'elevated' }}
                className="product-card"
                position="relative"
                overflow="hidden"
                borderColor={borderColor}
                borderWidth={borderWidth}
              >
                {/* Product image container */}
                <Box 
                  position="relative" 
                  height="180px" 
                  width="100%" 
                  borderRadius="md" 
                  overflow="hidden"
                  mb={2}
                  className="product-image-container"
                >
                  <NextImage
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 260px, (max-width: 1200px) 260px, 260px"
                    style={{ 
                      objectFit: 'contain',
                      borderRadius: 'md',
                      transition: 'transform 0.5s ease'
                    }}
                    priority={false}
                    loading="lazy"
                    quality={85}
                  />
                </Box>
                
                {/* Product details */}
                <Stack spacing={2}>
                  <Heading 
                    as="h3" 
                    size="md" 
                    fontWeight="600"
                    noOfLines={2}
                    height="50px"
                  >
                    {product.title}
                  </Heading>
                  
                  <Text 
                    color={descriptionColor}
                    fontSize="sm"
                    noOfLines={3}
                    height="60px"
                    className="product-description"
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {product.description || "Producto de alta calidad para tu hogar. Garantía y servicio técnico incluidos."}
                  </Text>
                  
                  <Text 
                    color={priceColor}
                    fontSize="xl" 
                    fontWeight="700"
                    className="product-price"
                  >
                    {parseCurrency(product.price)}
                  </Text>
                </Stack>
                
                {/* Add to cart button */}
                <Button
                  variant="addToCart"
                  colorScheme="brand"
                  size="md"
                  fontWeight="bold"
                  onClick={() => addToCart(product)}
                  leftIcon={<Box as="span" fontSize="1.2em" className="cart-icon">🛒</Box>}
                >
                  Agregar al carrito
                </Button>
              </Stack>
            ))}
          </Grid>
          
          {/* Cart summary */}
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