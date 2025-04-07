import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast
} from '@chakra-ui/react';

export interface CustomerInfo {
  name: string;
  address: string;
  phone: string;
}

interface CargarDatosProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (info: CustomerInfo) => void;
}

const CargarDatos: React.FC<CargarDatosProps> = ({ isOpen, onClose, onSubmit }) => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    address: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Simple validation
    if (!customerInfo.name || !customerInfo.address || !customerInfo.phone) {
      toast({
        title: 'Información incompleta',
        description: 'Por favor complete todos los campos',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate processing
    setTimeout(() => {
      onSubmit(customerInfo);
      setIsLoading(false);
      onClose();
      
      // Reset form after submission
      setCustomerInfo({
        name: '',
        address: '',
        phone: ''
      });
    }, 500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay backdropFilter="blur(4px)" />
      <ModalContent borderRadius="lg" boxShadow="xl">
        <ModalHeader 
          bg="green.50" 
          color="green.700" 
          borderTopRadius="lg"
          fontWeight="bold"
        >
          Información de Contacto
        </ModalHeader>
        <ModalCloseButton />
        
        <ModalBody py={6}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel fontWeight="medium">Nombre completo</FormLabel>
              <Input 
                name="name"
                value={customerInfo.name}
                onChange={handleChange}
                placeholder="Ingrese su nombre"
                focusBorderColor="green.500"
              />
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel fontWeight="medium">Dirección de entrega</FormLabel>
              <Input 
                name="address"
                value={customerInfo.address}
                onChange={handleChange}
                placeholder="Ingrese su dirección"
                focusBorderColor="green.500"
              />
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel fontWeight="medium">Teléfono de contacto</FormLabel>
              <Input 
                name="phone"
                value={customerInfo.phone}
                onChange={handleChange}
                placeholder="Ingrese su teléfono"
                focusBorderColor="green.500"
                type="tel"
              />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter bg="gray.50" borderBottomRadius="lg">
          <Button 
            variant="outline" 
            mr={3} 
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button 
            colorScheme="whatsapp" 
            onClick={handleSubmit}
            isLoading={isLoading}
            loadingText="Procesando"
          >
            Continuar con el pedido
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CargarDatos;