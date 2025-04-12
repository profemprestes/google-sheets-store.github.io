import React, { useState } from 'react';
import { Button, Image, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { Product } from '../product/types';
import CargarDatos, { CustomerInfo } from './CargarDatos';

interface CompletarPedidoProps {
  cart: Product[];
  parseCurrency: (value: number) => string;
  phoneNumber?: string;
  fullWidth?: boolean;
}

const CompletarPedido: React.FC<CompletarPedidoProps> = ({
  cart,
  parseCurrency,
  phoneNumber = '59892315819',
  fullWidth = false,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [, setCustomerInfo] = useState<CustomerInfo | null>(null);

  // Skip rendering if cart is empty
  if (cart.length === 0) return null;

  const handleSubmitInfo = (info: CustomerInfo) => {
    setCustomerInfo(info);

    // Generate the WhatsApp message text with customer info
    const text = ` *NUEVO PEDIDO* 
━━━━━━━━━━━━━━━━━━━━━

 *DATOS DEL CLIENTE:*
• *Nombre:* ${info.name}
• *Dirección:* ${info.address}
• *Teléfono:* ${info.phone}

 *DETALLE DEL PEDIDO:*
━━━━━━━━━━━━━━━━━━━━━
${cart
  .map((product, index) => `${index + 1}. *${product.title}*\n    ${parseCurrency(product.price)}`)
  .join('\n\n')}

━━━━━━━━━━━━━━━━━━━━━
 *TOTAL A PAGAR:* ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}

 ¡Gracias por su compra! `;

    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <Button
        colorScheme="whatsapp"
        size="lg"
        width={fullWidth ? '100%' : 'auto'}
        height="60px"
        rightIcon={
          <Flex align="center" justify="center" bg="whiteAlpha.300" p={2} borderRadius="full">
            <Image src="/whatsapp-icon.svg" alt="WhatsApp" width="24px" height="24px" />
          </Flex>
        }
        fontWeight="bold"
        fontSize="md"
        px={8}
        boxShadow="md"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
          textDecoration: 'none',
        }}
        _active={{
          transform: 'translateY(0)',
          boxShadow: 'md',
        }}
        transition="all 0.2s ease-in-out"
        onClick={onOpen}
      >
        <Flex direction="column" align="center">
          <Text>Completar pedido</Text>
          <Text fontSize="xs" fontWeight="normal" opacity={0.9}>
            ({cart.length} {cart.length === 1 ? 'producto' : 'productos'})
          </Text>
        </Flex>
      </Button>

      <CargarDatos isOpen={isOpen} onClose={onClose} onSubmit={handleSubmitInfo} />
    </>
  );
};

export default CompletarPedido;
