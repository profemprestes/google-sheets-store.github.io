import { useState, useMemo } from 'react';
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
  Badge 
} from '@chakra-ui/react';

import api from '../product/api';
import { Product } from '../product/types';
import CheckoutForm, { CustomerInfo } from '../product/CheckoutForm';
import ResumenCarrito from '../components/resumencarrito';
import Head from '../components/Head';

import { motion } from 'framer-motion';
import { tiendaStyles, fadeInUp, staggerContainer } from '../theme/tiendastyles';

// Motion components
const MotionContainer = motion(Container);
const MotionHeading = motion(Heading);
const MotionStack = motion(Stack);
const MotionGrid = motion(Grid);
const MotionBox = motion(Box);

interface Props {
  products: Product[];
}

function parseCurrency(value: number): string {
  return new Intl.NumberFormat('es-UY', {
    style: 'currency',
    currency: 'UYU',
  }).format(value);
}

// Change the component name from Home to Tienda
const Tienda: NextPage<Props> = ({ products }) => {
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
      
      <MotionContainer 
        sx={tiendaStyles.container} 
        id="productos"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <MotionHeading
          sx={tiendaStyles.heading}
          as="h1"
          size="2xl"
          mb={6}
          variants={fadeInUp}
          custom={0}
        >
          Nuestros Productos  
        </MotionHeading>

        <MotionBox 
          variants={fadeInUp}
          custom={1}
          mb={8}
        >
          <Divider sx={tiendaStyles.divider} />
        </MotionBox>

        <MotionGrid
          sx={{
            ...tiendaStyles.productGrid,
            gridTemplateColumns: {
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
              xl: "repeat(5, 1fr)"
            },
            gap: { base: 4, sm: 5, md: 6, lg: 8 },
          }}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {products.map((product, index) => (
            <MotionBox
              key={product.id}
              sx={tiendaStyles.productCard}
              variants={fadeInUp}
              custom={index}
              whileHover={{ 
                y: -8, 
                boxShadow: "xl",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              role="group"
            >
              {product.price < 1000 && (
                <Box sx={tiendaStyles.badgeContainer}>
                  <Badge sx={tiendaStyles.badge}>
                    Oferta
                  </Badge>
                </Box>
              )}
              
              <Box sx={tiendaStyles.productImageContainer}>
                <NextImage
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  priority={index < 4}
                  loading={index < 4 ? "eager" : "lazy"}
                  quality={85}
                  className="product-image"
                />
                <Box sx={tiendaStyles.imageOverlay} />
              </Box>
              
              <Stack sx={tiendaStyles.productContent} spacing={3}>
                <Heading 
                  as="h3" 
                  size="md"
                  sx={tiendaStyles.productTitle}
                  className="product-title"
                >
                  {product.title}
                </Heading>
                
                <Text 
                  sx={tiendaStyles.productDescription}
                  className="product-description"
                >
                  {product.description || "Producto de alta calidad para tu hogar. Garantía y servicio técnico incluidos."}
                </Text>
                
                <Flex sx={tiendaStyles.productRating}>
                  {[...Array(5)].map((_, i) => (
                    <Box 
                      key={i} 
                      as="span"
                      color={i < (product.rating || 4) ? "yellow.400" : "gray.300"} 
                      fontSize="sm"
                      mr="1px"
                    >
                      ★
                    </Box>
                  ))}
                </Flex>
                
                <Flex sx={tiendaStyles.productActions}>
                  <Text 
                    sx={tiendaStyles.productPrice}
                    className="product-price"
                  >
                    {parseCurrency(product.price)}
                  </Text>
                </Flex>
                
                <Button
                  sx={tiendaStyles.addToCartButton}
                  onClick={() => addToCart(product)}
                  leftIcon={<Box as="span" fontSize="1.2em">🛒</Box>}
                  className="add-to-cart-button"
                >
                  Agregar al carrito
                </Button>
              </Stack>
            </MotionBox>
          ))}
        </MotionGrid> 
        
        {Boolean(cart.length) && (
          <MotionBox
            variants={fadeInUp}
            custom={2}
            initial="initial"
            animate="animate"
          >
            <ResumenCarrito
              cart={cart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              removeFromCart={removeFromCart}
              parseCurrency={parseCurrency}
              onCheckout={onOpen}
            />
          </MotionBox>
        )}
      </MotionContainer>
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

export default Tienda;