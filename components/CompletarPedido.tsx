import React, { useState } from 'react';
import { Button, Image, Link, Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, VStack, Box, useColorModeValue, useTheme, keyframes, motion } from '@chakra-ui/react';
import { Product } from '../product/types';
import { carritoStyles, cartUtils } from '../theme/Carritos';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientData, setClientData] = useState({
    name: '',
    address: '',
    phone: ''
  });
  const theme = useTheme();
  const pulse = keyframes(carritoStyles.animations.pulse);

  // Skip rendering if cart is empty
  if (cart.length === 0) return null;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const generateWhatsAppMessage = () => {
    const productsText = cart
      .reduce(
        (message, product) =>
          message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`),
        ``
      );

    const total = cart.reduce((total, product) => total + product.price, 0);
    const clientInfo = `

Datos del Cliente:
Nombre: ${clientData.name}
Dirección: ${clientData.address}
Teléfono: ${clientData.phone}`;

    return `${productsText}\nTotal: ${parseCurrency(total)}${clientInfo}`;
  };

  const handleSendWhatsApp = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
    handleCloseModal();
  };

  return (
    <>
      <Button
        onClick={handleOpenModal}
        {...carritoStyles.completarPedido.baseStyle({ colorMode: theme.colorMode })}
        width={fullWidth ? "100%" : "auto"}
        transition="all 0.2s ease-in-out"
      >
        <Flex direction="column" align="center">
          <Text>Completar pedido</Text>
          <Text fontSize="xs" fontWeight="normal" opacity={0.9}>
            ({cart.length} {cart.length === 1 ? 'producto' : 'productos'})
          </Text>
        </Flex>
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Completar Pedido</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={6}>
              {/* Client Information Form */}
              <Box w="full">
                <FormControl>
                  <FormLabel>Nombre Completo</FormLabel>
                  <Input
                    value={clientData.name}
                    onChange={(e) => setClientData({ ...clientData, name: e.target.value })}
                    placeholder="Ingrese su nombre completo"
                    required
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Dirección de Entrega</FormLabel>
                  <Input
                    value={clientData.address}
                    onChange={(e) => setClientData({ ...clientData, address: e.target.value })}
                    placeholder="Ingrese su dirección completa"
                    required
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Teléfono de Contacto</FormLabel>
                  <Input
                    value={clientData.phone}
                    onChange={(e) => setClientData({ ...clientData, phone: e.target.value })}
                    placeholder="Ingrese su teléfono de contacto"
                    required
                  />
                </FormControl>
              </Box>

              {/* Order Summary */}
              <Box w="full" border="1px" borderColor="gray.200" borderRadius="md" p={4}>
                <Text fontSize="lg" fontWeight="bold" mb={4}>Resumen del Pedido</Text>
                {cart.map((product, index) => (
                  <Flex key={index} justifyContent="space-between" mb={2}>
                    <Text>{product.title}</Text>
                    <Text fontWeight="bold">{parseCurrency(product.price)}</Text>
                  </Flex>
                ))}
                <Flex justifyContent="space-between" mt={4} borderTop="1px" borderColor="gray.200" pt={2}>
                  <Text fontWeight="bold">Total</Text>
                  <Text fontWeight="bold" color="primary.500">
                    {parseCurrency(cart.reduce((total, product) => total + product.price, 0))}
                  </Text>
                </Flex>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button 
              colorScheme="whatsapp" 
              onClick={handleSendWhatsApp}
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
            >
              Enviar Pedido
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CompletarPedido;