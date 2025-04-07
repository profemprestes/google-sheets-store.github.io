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
  useTheme,
  type StyleFunctionProps,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon } from '@chakra-ui/icons';
import { Product } from '../product/types';
import CompletarPedido from './CompletarPedido';
import { carritoStyles, cartUtils, cartAnimations } from '../theme/Carritos';

interface CarritoProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Product[];
  removeFromCart: (index: number) => void;
  parseCurrency: (value: number) => string;
}

const Carrito: React.FC<CarritoProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  removeFromCart,
  parseCurrency
}) => {
  const theme = useTheme();
  const colorMode = theme.colorMode;

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="md"
      {...carritoStyles.Drawer}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={cartAnimations.fadeIn.from}
            animate={cartAnimations.fadeIn.to}
            exit={cartAnimations.fadeIn.from}
            transition={{ duration: 0.3 }}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>
                <Flex
                  justify="space-between"
                  align="center"
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  height="auto"
                  color={useColorModeValue('gray.800', 'gray.100')}
                  textAlign="center"
                >
                  <Text fontSize="xl" fontWeight="bold">
                    Carrito ({cart.length} {cartUtils.formatItemCount(cart.length)})
                  </Text>
                  <DrawerCloseButton />
                </Flex>
              </DrawerHeader>

              <DrawerBody>
                {cart.length === 0 ? (
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    color={useColorModeValue('gray.500', 'gray.400')}
                    textAlign="center"
                  >
                    <Text>
                      Tu carrito está vacío
                    </Text>
                  </Box>
                ) : (
                  <Stack spacing={4}>
                    {cart.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={cartAnimations.slideUp.from}
                        animate={cartAnimations.slideUp.to}
                        exit={cartAnimations.slideUp.from}
                        transition={{ delay: index * 0.1 }}
                        style={carritoStyles.cartItem.baseStyle({ colorMode, theme })}
                      >
                        <Flex align="center" justify="space-between">
                          <Flex align="center">
                            <Image
                              src={product.image}
                              alt={product.title}
                              boxSize="60px"
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
                          <IconButton
                            aria-label="Remove item"
                            icon={<CloseIcon />}
                            size="sm"
                            variant="ghost"
                            colorScheme="red"
                            onClick={() => removeFromCart(index)}
                          />
                        </Flex>
                      </motion.div>
                    ))}
                  </Stack>
                )}
              </DrawerBody>

              <DrawerFooter>
                <Box
                  position="sticky"
                  bottom={4}
                  width="100%"
                  padding={4}
                  backgroundColor={useColorModeValue(
                    'rgba(56, 175, 82, 0.8)',
                    'rgba(56, 175, 82, 0.6)'
                  )}
                  backdropFilter="blur(8px)"
                  borderRadius="lg"
                  boxShadow="0 -4px 10px rgba(0, 0, 0, 0.1)"
                  zIndex={10}
                  display="flex"
                  justifyContent="center"
                  gap={4}
                  transition="all 0.3s ease"
                  _hover={{
                    backgroundColor: useColorModeValue(
                      'rgba(56, 175, 82, 0.9)',
                      'rgba(56, 175, 82, 0.7)'
                    ),
                  }}
                >
                  <Text fontWeight="bold">
                    Total: {parseCurrency(
                      cart.reduce((total, product) => total + product.price, 0)
                    )}
                  </Text>
                  <CompletarPedido
                    cart={cart}
                    parseCurrency={parseCurrency}
                    fullWidth
                  />
                </Box>
              </DrawerFooter>
            </DrawerContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Drawer>
  );
};

export default Carrito;