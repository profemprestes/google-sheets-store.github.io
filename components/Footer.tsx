import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Grid, GridItem, Heading, Text, Link, Button, Flex, VStack, HStack, Divider, useColorModeValue, Image } from '@chakra-ui/react';

const Footer = () => {
  const bgColor = useColorModeValue('gray.800', 'gray.900');
  const headingColor = useColorModeValue('blue.300', 'blue.200');
  const textColor = useColorModeValue('gray.300', 'gray.400');
  
  return (
    <Box as="footer" bg={bgColor} color={textColor} py={10}>
      <Container maxW="container.xl" px={4}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          {/* About Section */}
          <GridItem>
            <Flex direction="column" align="flex-start">
              <Flex align="center" mb={4}>
                <Image 
                  src="/images/logotienda.svg" 
                  alt="PrecioHogar Logo"
                  boxSize="60px"
                  mr={3}
                  borderRadius="full"
                  bg="white"
                  p={1}
                  border="2px solid"
                  borderColor="blue.300"
                  boxShadow="0 0 10px rgba(66, 153, 225, 0.3)"
                />
                <Heading as="h3" size="md" color={headingColor} fontWeight="bold">
                  PrecioHogar
                </Heading>
              </Flex>
              
              <Box 
                p={4} 
                bg="whiteAlpha.100" 
                borderRadius="md" 
                borderLeft="3px solid" 
                borderColor="blue.300"
                _hover={{ bg: "whiteAlpha.200", transform: "translateX(5px)" }}
                transition="all 0.3s ease"
              >
                <Text mb={3} fontSize="sm" lineHeight="tall">
                  Somos una tienda dedicada a ofrecer los mejores electrodomésticos con la mejor calidad y precios accesibles para todos nuestros clientes.
                </Text>
                <Text fontStyle="italic" fontSize="xs" fontWeight="medium" color="blue.200">
                  Tu fuente confiable de electrodomésticos de calidad en Uruguay.
                </Text>
              </Box>
            </Flex>
          </GridItem>

          {/* Quick Links */}
          <GridItem>
            <Heading as="h3" size="md" mb={4} color={headingColor} fontWeight="bold">
              Enlaces Rápidos
            </Heading>
            <VStack spacing={3} align="flex-start">
              <NextLink href="/" passHref legacyBehavior>
                <Link _hover={{ color: 'blue.300', textDecoration: 'none', transform: 'translateX(5px)' }} transition="all 0.3s ease">
                  Inicio
                </Link>
              </NextLink>
              <NextLink href="/#productos" passHref legacyBehavior>
                <Link _hover={{ color: 'blue.300', textDecoration: 'none', transform: 'translateX(5px)' }} transition="all 0.3s ease">
                  Productos
                </Link>
              </NextLink>
              <NextLink href="/privacidad" passHref legacyBehavior>
                <Link _hover={{ color: 'blue.300', textDecoration: 'none', transform: 'translateX(5px)' }} transition="all 0.3s ease">
                  Política de Privacidad
                </Link>
              </NextLink>
              <NextLink href="/terminos" passHref legacyBehavior>
                <Link _hover={{ color: 'blue.300', textDecoration: 'none', transform: 'translateX(5px)' }} transition="all 0.3s ease">
                  Términos y Condiciones
                </Link>
              </NextLink>
            </VStack>
          </GridItem>

          {/* Contact Info */}
          <GridItem>
            <Heading as="h3" size="md" mb={4} color={headingColor} fontWeight="bold">
              Contacto
            </Heading>
            <VStack spacing={3} align="flex-start">
              <HStack>
                <Box color="blue.300" fontWeight="bold" mr={2}>📍</Box>
                <Text>Montevideo, Uruguay</Text>
              </HStack>
              <HStack>
                <Box color="blue.300" fontWeight="bold" mr={2}>📞</Box>
                <Text>(+598) 092 315 819</Text>
              </HStack>
              <HStack>
                <Box color="blue.300" fontWeight="bold" mr={2}>📧</Box>
                <Text>preciohogaruruguay@gmail.com</Text>
              </HStack>
              <HStack>
                <Box color="blue.300" fontWeight="bold" mr={2}>🕒</Box>
                <Text>24hs Puedes Realizar el Pedido</Text>
              </HStack>
              <Button 
                leftIcon={<Box as="span" mr={1}>💬</Box>}
                colorScheme="whatsapp" 
                variant="solid" 
                size="sm" 
                mt={2}
                onClick={() => window.open('https://wa.me/59892315819', '_blank')}
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
                transition="all 0.3s ease"
              >
                Contactar por WhatsApp
              </Button>
            </VStack>
          </GridItem>
        </Grid>

        {/* Copyright */}
        <Divider borderColor="gray.700" my={6} />
        <Box textAlign="center" fontSize="sm">
          <Text>&copy; {new Date().getFullYear()} PrecioHogar. Todos los derechos reservados.</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;