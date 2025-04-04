import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Grid, GridItem, Heading, Text, Link, Input, Button, Flex, VStack, HStack, Divider, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

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
            <Heading as="h3" size="md" mb={4} color={headingColor} fontWeight="bold">
              PrecioHogar
            </Heading>
            <Text mb={4}>
              Somos una tienda dedicada a ofrecer los mejores electrodomésticos con la mejor calidad y precios accesibles para todos nuestros clientes.
            </Text>
            <Text fontStyle="italic" fontSize="sm" mt={4}>
              Tu fuente confiable de electrodomésticos de calidad en Uruguay.
            </Text>
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
                <Icon as={FaMapMarkerAlt} color="blue.300" />
                <Text>Montevideo, Uruguay</Text>
              </HStack>
              <HStack>
                <Icon as={FaPhone} color="blue.300" />
                <Text>(+598) 092 315 819</Text>
              </HStack>
              <HStack>
                <Icon as={FaEnvelope} color="blue.300" />
                <Text>preciohogaruruguay@gmail.com</Text>
              </HStack>
              <HStack>
                <Icon as={FaClock} color="blue.300" />
                <Text>24hs Puedes Realizar el Pedido</Text>
              </HStack>
              <Button 
                leftIcon={<FaWhatsapp />} 
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