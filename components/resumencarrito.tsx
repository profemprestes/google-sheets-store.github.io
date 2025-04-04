import React from 'react';
import { 
  Box, 
  Heading, 
  Stack, 
  Flex, 
  Text, 
  Button, 
  Badge,
  Icon,
  Tooltip,
  useDisclosure,
  TextProps,
  FlexProps
} from '@chakra-ui/react';
import { FaShoppingCart, FaMinus, FaPlus, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { Product } from '../product/types';
import { cartStyles } from '../theme/resumenstyles';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface ResumenCarritoProps {
  cart: Product[];
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  parseCurrency: (value: number) => string;
  onCheckout: () => void;
}

const ResumenCarrito: React.FC<ResumenCarritoProps> = ({
  cart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  parseCurrency,
  onCheckout
}) => {
  if (!cart.length) {
    return null;
  }

  const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  const totalAmount = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        // Removed duplicate transition property
        {...cartStyles.container}
      >
        <Flex {...cartStyles.header}>
          <Heading {...cartStyles.title}>
            <Icon as={FaShoppingCart} />
            Resumen del Carrito
            <Badge colorScheme="blue" borderRadius="full" px={2} ml={2}>
              {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
            </Badge>
          </Heading>
        </Flex>

        <Stack spacing={3}>
          {cart.map((item) => (
            <MotionBox
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // Removed duplicate transition property
              {...cartStyles.itemContainer}
            >
              <Flex justify="space-between" align="center">
                <Tooltip label={item.title} placement="top" hasArrow>
                  <Text {...cartStyles.itemTitle}>{item.title}</Text>
                </Tooltip>
                <Flex align="center">
                  <Flex {...cartStyles.quantityControl}>
                    <Button
                      {...cartStyles.quantityButton}
                      colorScheme="blue"
                      variant="ghost"
                      onClick={() => decrementQuantity(item.id)}
                      isDisabled={(item.quantity || 1) <= 1}
                    >
                      <Icon as={FaMinus} fontSize="10px" />
                    </Button>
                    <Text 
                      mx={2}
                      fontWeight="bold"
                      fontSize="sm"
                      color="gray.700"
                      minW="20px"
                      textAlign="center" as="span"
                    >
                      {item.quantity || 1}
                    </Text>
                    <Button
                      {...cartStyles.quantityButton}
                      colorScheme="blue"
                      variant="ghost"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      <Icon as={FaPlus} fontSize="10px" />
                    </Button>
                  </Flex>
                  <Text {...cartStyles.priceText}>
                    {parseCurrency(item.price * (item.quantity || 1))}
                  </Text>
                  <Button
                    {...cartStyles.removeButton}
                    colorScheme="red"
                    variant="ghost"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Icon as={FaTimes} fontSize="12px" />
                  </Button>
                </Flex>
              </Flex>
            </MotionBox>
          ))}

          <Flex {...cartStyles.totalContainer}>
            <Text {...cartStyles.totalLabel}>Total:</Text>
            <Text {...cartStyles.totalAmount}>
              {parseCurrency(totalAmount)}
            </Text>
          </Flex>
        </Stack>
      </MotionBox>

      <Flex 
        position="sticky" 
        bottom={0} 
        justifyContent="center" 
        padding={4} 
        backdropFilter="blur(8px)" 
        bg="rgba(255, 255, 255, 0.8)" 
        zIndex={10} 
        borderTop="1px solid" 
        borderColor="gray.100"
      >
        <Button
          {...cartStyles.checkoutButton}
          leftIcon={<Icon as={FaWhatsapp} fontSize="1.5em" />}
          onClick={onCheckout}
        >
          Completar pedido ({totalItems} {totalItems === 1 ? 'producto' : 'productos'})
        </Button>
      </Flex>
    </>
  );
};

export default ResumenCarrito;