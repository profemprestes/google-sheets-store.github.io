import React, { useEffect } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Flex,
  Text,
  Image,
  Box,
  Divider,
  IconButton,
  Badge,
  Button,
  useColorModeValue,
  useTheme,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { Product } from '../product/types';
import CompletarPedido from './CompletarPedido';

export interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Product[];
  removeFromCart: (index: number) => void;
  parseCurrency: (value: number) => string;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Carrito: React.FC<CartProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  removeFromCart, 
  parseCurrency
}) => {
  const total = cart.reduce((total, product) => total + product.price, 0);
  const theme = useTheme();
  
  // Color mode values
  const bgHeader = useColorModeValue('green.50', 'green.900');
  const textColor = useColorModeValue('green.700', 'green.100');
  const bgBody = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const totalBg = useColorModeValue('green.50', 'green.800');
  const totalTextColor = useColorModeValue('green.600', 'green.200');
  const emptyCartTextColor = useColorModeValue('gray.500', 'gray.400');
  const scrollTrackBg = useColorModeValue('gray.100', 'gray.700');
  const scrollThumbBg = useColorModeValue('gray.300', 'gray.600');
  const closeButtonBg = useColorModeValue("gray.100", "whiteAlpha.200");
  const closeButtonHoverBg = useColorModeValue("gray.200", "whiteAlpha.300");
  const emptyCartTextSecondary = useColorModeValue("gray.400", "gray.500");
  const iconFilter = useColorModeValue("none", "brightness(0) invert(0.8)");
  const deleteButtonHoverBg = "red.50";
  
  // Animation styles
  const fadeInAnimation = `${fadeIn} 0.3s ease-out`;
  const slideUpAnimation = `${slideUp} 0.4s ease-out`;
  const pulseAnimation = `${pulse} 2s infinite`;

  // Effect to scroll to top when cart opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const drawerBody = document.querySelector('.drawer-body');
        if (drawerBody) drawerBody.scrollTop = 0;
      }, 100);
    }
  }, [isOpen]);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay 
        backdropFilter="blur(4px)" 
        bg="blackAlpha.300"
        transition="all 0.3s"
      />
      <DrawerContent 
        borderLeftRadius="lg" 
        boxShadow="xl"
        animation={fadeInAnimation}
        bg={cardBg}
      >
        <DrawerCloseButton 
          size="lg" 
          bg={closeButtonBg} 
          borderRadius="full" 
          m={2}
          _hover={{ 
            bg: closeButtonHoverBg,
            transform: "rotate(90deg)"
          }}
          transition="all 0.2s"
        />
        <DrawerHeader 
          borderBottomWidth="1px" 
          bg={bgHeader} 
          py={4}
          fontSize="xl"
          fontWeight="bold"
          color={textColor}
          borderBottomColor={borderColor}
          boxShadow="sm"
        >
          <Flex align="center" gap={2}>
            <Box 
              animation={cart.length > 0 ? pulseAnimation : undefined}
              transition="all 0.3s"
            >
              <Image 
                src="/carritovacio.svg" 
                alt="Carrito" 
                width="24px" 
                height="24px" 
                filter={iconFilter}
              />
            </Box>
            <Text>Tu Carrito</Text>
            {cart.length > 0 && (
              <Badge 
                colorScheme="green" 
                borderRadius="full" 
                px={2} 
                py={1}
                fontSize="sm"
                animation={`${slideUp} 0.3s ease-out`}
              >
                {cart.length} {cart.length === 1 ? 'producto' : 'productos'}
              </Badge>
            )}
          </Flex>
        </DrawerHeader>

        <DrawerBody 
          bg={bgBody} 
          className="drawer-body"
          css={{
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              width: '10px',
              background: scrollTrackBg,
            },
            '&::-webkit-scrollbar-thumb': {
              background: scrollThumbBg,
              borderRadius: '24px',
            },
          }}
        >
          {cart.length === 0 ? (
            <Flex 
              direction="column" 
              align="center" 
              justify="center" 
              height="100%"
              animation={slideUpAnimation}
            >
              <Image 
                src="/carritovacio.svg" 
                alt="Carrito vacío" 
                width="120px" 
                height="120px" 
                opacity={0.5} 
                mb={4}
                filter={iconFilter}
              />
              <Text 
                mt={2} 
                color={emptyCartTextColor} 
                fontSize="lg" 
                fontWeight="medium"
                textAlign="center"
              >
                Tu carrito está vacío
              </Text>
              <Text 
                color={emptyCartTextSecondary} 
                fontSize="md" 
                textAlign="center" 
                maxWidth="80%"
                mt={2}
              >
                Agrega productos para comenzar tu pedido
              </Text>
              <Button 
                mt={6} 
                colorScheme="blue" 
                onClick={onClose}
                size="md"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "md"
                }}
                transition="all 0.2s"
              >
                Continuar comprando
              </Button>
            </Flex>
          ) : (
            <Stack spacing={4} divider={<Divider />} p={2}>
              {cart.map((product, index) => (
                <Flex 
                  key={`${product.id}-${index}`} 
                  justify="space-between" 
                  align="center"
                  bg={cardBg}
                  p={3}
                  borderRadius="md"
                  boxShadow="sm"
                  transition="all 0.3s"
                  _hover={{ 
                    boxShadow: "md", 
                    transform: "translateY(-2px)",
                    borderColor: "green.200",
                  }}
                  border="1px solid"
                  borderColor={borderColor}
                  animation={`${fadeIn} ${0.2 + index * 0.1}s ease-out`}
                >
                  <Flex align="center" flex={1}>
                    <Box 
                      position="relative" 
                      minWidth="60px" 
                      height="60px"
                      mr={3}
                      borderRadius="md"
                      overflow="hidden"
                      boxShadow="sm"
                    >
                      <Image 
                        src={product.image} 
                        alt={product.title} 
                        boxSize="60px" 
                        objectFit="cover" 
                        transition="transform 0.3s ease"
                        _hover={{ transform: "scale(1.1)" }}
                      />
                    </Box>
                    <Box flex={1}>
                      <Text 
                        fontWeight="bold" 
                        noOfLines={1}
                        fontSize="md"
                      >
                        {product.title}
                      </Text>
                      <Text 
                        color={totalTextColor} 
                        fontWeight="600"
                        fontSize="md"
                      >
                        {parseCurrency(product.price)}
                      </Text>
                    </Box>
                  </Flex>
                  <IconButton
                    aria-label="Eliminar producto"
                    icon={<Box as="span" fontSize="lg">✕</Box>}
                    size="sm"
                    variant="ghost"
                    colorScheme="red"
                    borderRadius="full"
                    onClick={() => removeFromCart(index)}
                    _hover={{ 
                      bg: deleteButtonHoverBg, 
                      transform: "rotate(90deg)" 
                    }}
                    transition="all 0.2s"
                  />
                </Flex>
              ))}
            </Stack>
          )}
        </DrawerBody>

        <DrawerFooter 
          borderTopWidth="1px" 
          bg={cardBg} 
          flexDirection="column" 
          p={4}
          boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
          borderTopColor={borderColor}
        >
          <Stack width="100%" spacing={4} animation={slideUpAnimation}>
            <Flex 
              justify="space-between" 
              fontWeight="bold" 
              fontSize="lg"
              p={3}
              bg={totalBg}
              borderRadius="md"
              boxShadow="sm"
            >
              <Text>Total:</Text>
              <Text 
                color={totalTextColor}
                fontWeight="extrabold"
              >
                {parseCurrency(total)}
              </Text>
            </Flex>
            <Box 
              transform="translateY(0)" 
              transition="transform 0.3s ease"
              _hover={{ transform: "translateY(-2px)" }}
            >
              <CompletarPedido 
                cart={cart} 
                parseCurrency={parseCurrency} 
              />
            </Box>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Carrito;