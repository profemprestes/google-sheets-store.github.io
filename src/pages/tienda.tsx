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
          variants={fadeInUp}
        >
          Nuestros Productos
        </MotionHeading>
        
        <MotionGrid
          sx={tiendaStyles.productGrid}
          variants={staggerContainer}
        >
          {products.map((product, index) => (
            <MotionStack
              key={product.id}
              sx={tiendaStyles.productCard}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="product-card"
            >
              {/* Badge for special products */}
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
                  quality={80}
                  className="product-image"
                />
              </Box>
              
              <Stack sx={tiendaStyles.productContent}>
                <Text sx={tiendaStyles.productTitle}>
                  {product.title}
                </Text>
                
                <Text sx={tiendaStyles.productDescription}>
                  {product.description || "Producto de alta calidad para tu hogar. Garantía y servicio técnico incluidos."}
                </Text>
                
                <Flex justify="space-between" align="center" mt="auto" pt={2}>
                  <Text sx={tiendaStyles.productPrice}>
                    {parseCurrency(product.price)}
                  </Text>
                  
    
                </Flex>
                
                <Button
                  sx={tiendaStyles.addToCartButton}
                  onClick={() => addToCart(product)}
                  leftIcon={<Box as="span" fontSize="1.2em">🛒</Box>}
                >
                  Agregar al carrito
                </Button>
              </Stack>
            </MotionStack>
          ))}
        </MotionGrid>
        
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