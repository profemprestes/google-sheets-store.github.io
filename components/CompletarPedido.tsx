import React from 'react';
import { Button, Image, Link, Flex, Text } from '@chakra-ui/react';
import { Product } from '../product/types';

interface CompletarPedidoProps {
  cart: Product[];
  parseCurrency: (value: number) => string;
  phoneNumber?: string;
  fullWidth?: boolean;
}

const CompletarPedido: React.FC<CompletarPedidoProps> = ({ 
  cart, 
  parseCurrency,
  phoneNumber = "59892315819",
  fullWidth = false
}) => {
  // Skip rendering if cart is empty
  if (cart.length === 0) return null;

  // Generate the WhatsApp message text
  const text = cart
    .reduce(
      (message, product) =>
        message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`),
      ``
    )
    .concat(
      `\nTotal: ${parseCurrency(
        cart.reduce((total, product) => total + product.price, 0)
      )}`
    );

  return (
    <Button
      isExternal
      as={Link}
      colorScheme="whatsapp"
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`}
      size="lg"
      width={fullWidth ? "100%" : "auto"}
      height="60px"
      rightIcon={
        <Flex 
          align="center" 
          justify="center" 
          bg="whiteAlpha.300" 
          p={2} 
          borderRadius="full"
        >
          <Image 
            src="/whatsapp-icon.svg" 
            alt="WhatsApp" 
            width="24px" 
            height="24px" 
          />
        </Flex>
      }
      fontWeight="bold"
      fontSize="md"
      px={8}
      boxShadow="md"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
        textDecoration: 'none'
      }}
      _active={{
        transform: 'translateY(0)',
        boxShadow: 'md',
      }}
      transition="all 0.2s ease-in-out"
    >
      <Flex direction="column" align="center">
        <Text>Completar pedido</Text>
        <Text fontSize="xs" fontWeight="normal" opacity={0.9}>
          ({cart.length} {cart.length === 1 ? 'producto' : 'productos'})
        </Text>
      </Flex>
    </Button>
  );
};

export default CompletarPedido;