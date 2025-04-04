import { useState } from 'react';
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
  Stack,
  useToast
} from '@chakra-ui/react';

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (customerInfo: CustomerInfo) => void;
}

export interface CustomerInfo {
  name: string;
  address: string;
  phone: string;
}

const CheckoutForm = ({ isOpen, onClose, onSubmit }: CheckoutFormProps) => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    address: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
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
    
    setIsSubmitting(true);
    
    // Simular un pequeño retraso para mejor UX
    setTimeout(() => {
      onSubmit(customerInfo);
      setIsSubmitting(false);
      onClose();
    }, 500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Información de contacto</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Nombre completo</FormLabel>
                <Input 
                  name="name"
                  value={customerInfo.name}
                  onChange={handleChange}
                  placeholder="Ingrese su nombre completo"
                />
              </FormControl>
              
              <FormControl id="address" isRequired>
                <FormLabel>Dirección de entrega</FormLabel>
                <Input 
                  name="address"
                  value={customerInfo.address}
                  onChange={handleChange}
                  placeholder="Ingrese su dirección completa"
                />
              </FormControl>
              
              <FormControl id="phone" isRequired>
                <FormLabel>Teléfono de contacto</FormLabel>
                <Input 
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleChange}
                  placeholder="Ingrese su número de teléfono"
                  type="tel"
                />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button 
              colorScheme="blue" 
              type="submit"
              isLoading={isSubmitting}
              loadingText="Enviando..."
            >
              Continuar a WhatsApp
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default CheckoutForm;