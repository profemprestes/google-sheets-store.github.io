import React, { useState } from 'react';
import { Button, Image, Link, Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, VStack, Box, Stack, useColorModeValue, useTheme } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Product } from '../product/types';
import { carritoStyles, cartUtils, cartAnimations } from '../theme/Carritos';

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
  const colorMode = theme.colorMode;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendOrder = () => {
    const message = `*Pedido de Precio Hogar*\n\n`;
    const productsText = cart
      .map((product, index) => `${index + 1}. ${product.title} - ${parseCurrency(product.price)}`)
      .join('\n');

    const total = cart.reduce((total, product) => total + product.price, 0);
    const clientInfo = `
*Datos del Cliente:*
Nombre: ${clientData.name}
Dirección: ${clientData.address}
Teléfono: ${clientData.phone}`;

    const fullMessage = `${message}${productsText}\n*Total:* ${parseCurrency(total)}${clientInfo}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`,
      '_blank'
    );
    handleCloseModal();
  };

  return (
    <>
      <Button
        colorScheme="whatsapp"
        size="lg"
        height="60px"
        fontWeight="bold"
        fontSize="md"
        px={8}
        boxShadow="md"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
          textDecoration: "none",
        }}
        _active={{
          transform: "translateY(0)",
          boxShadow: "md",
        }}
        transition="all 0.2s ease-in-out"
        onClick={handleOpenModal}
      >
        Completar Pedido
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow="xl"
          borderRadius="lg"
          overflow="hidden"
        >
          <ModalHeader
            bg={useColorModeValue('green.50', 'green.900')}
            color={useColorModeValue('green.700', 'green.100')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
          >
            Completar Pedido
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <VStack spacing={6}>
              {cart.map((product, index) => (
                <Box
                  key={product.id}
                  p={4}
                  bg={useColorModeValue('gray.50', 'gray.800')}
                  borderRadius="md"
                  boxShadow="sm"
                  transition="all 0.3s"
                  _hover={{ boxShadow: "md" }}
                >
                  <Flex align="center" justify="space-between">
                    <Flex align="center">
                      <Image
                        src={product.image}
                        alt={product.title}
                        boxSize="40px"
                        borderRadius="md"
                        mr={4}
                      />
                      <Stack spacing={1}>
                        <Text fontWeight="bold">{product.title}</Text>
                        <Text fontSize="sm" color="gray.600">
                          {parseCurrency(product.price)}
                        </Text>
                      </Stack>
                    </Flex>
                    <Text fontWeight="bold" color="green.600">
                      {parseCurrency(product.price)}
                    </Text>
                  </Flex>
                </Box>
              ))}

              <Box
                p={4}
                bg={useColorModeValue('green.50', 'green.800')}
                borderRadius="md"
                boxShadow="sm"
                transition="all 0.3s"
                _hover={{ boxShadow: "md" }}
              >
                <Flex justify="space-between" align="center">
                  <Text fontWeight="bold">Total</Text>
                  <Text fontWeight="bold" color="green.600">
                    {parseCurrency(cart.reduce((total, product) => total + product.price, 0))}
                  </Text>
                </Flex>
              </Box>

              <FormControl isRequired>
                <FormLabel>Nombre Completo</FormLabel>
                <Input
                  name="name"
                  value={clientData.name}
                  onChange={handleInputChange}
                  placeholder="Ingresa tu nombre completo"
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Dirección de Entrega</FormLabel>
                <Input
                  name="address"
                  value={clientData.address}
                  onChange={handleInputChange}
                  placeholder="Ingresa tu dirección de entrega"
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Teléfono de Contacto</FormLabel>
                <Input
                  name="phone"
                  value={clientData.phone}
                  onChange={handleInputChange}
                  placeholder="Ingresa tu teléfono de contacto"
                  size="lg"
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="whatsapp"
              onClick={handleSendOrder}
              size="lg"
              width="100%"
              leftIcon={<Image src="/whatsapp.svg" alt="WhatsApp" boxSize="6" />}
            >
              Enviar Pedido por WhatsApp
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CompletarPedido;