import React from 'react';
import NextLink from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Box, Container, Grid, GridItem, Heading, Text, Link, Input, Button, Flex, VStack, HStack, Divider } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer">
      <Container maxW="container.xl" px={4} py={8}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
          {/* About Section */}
          <GridItem>
            <Heading as="h3" size="md" mb={4}>Acerca de Nosotros</Heading>
            <Text color="gray.300">
              Somos una tienda dedicada a ofrecer los mejores productos con la mejor calidad y precios accesibles para todos nuestros clientes.
            </Text>
          </GridItem>

          {/* Quick Links */}
          <GridItem>
            <Heading as="h3" size="md" mb={4}>Enlaces Rápidos</Heading>
            <VStack spacing={2} align="flex-start">
              <NextLink href="/" passHref legacyBehavior>
                <Link>Inicio</Link>
              </NextLink>
              <NextLink href="/productos" passHref legacyBehavior>
                <Link>Productos</Link>
              </NextLink>
              <NextLink href="/categorias" passHref legacyBehavior>
                <Link>Categorías</Link>
              </NextLink>
              <NextLink href="/ofertas" passHref legacyBehavior>
                <Link>Ofertas</Link>
              </NextLink>
            </VStack>
          </GridItem>

          {/* Contact Info */}
          <GridItem>
            <Heading as="h3" size="md" mb={4}>Contacto</Heading>
            <VStack spacing={2} align="flex-start" color="gray.300">
              <Text>Dirección: Calle Principal #123</Text>
              <Text>Teléfono: (123) 456-7890</Text>
              <Text>Email: info@mitienda.com</Text>
              <Text>Horario: Lun-Vie 9:00 - 18:00</Text>
            </VStack>
          </GridItem>
          
          {/* Social Media */}
          <GridItem>
            <Heading as="h3" size="md" mb={4}>Síguenos</Heading>
            <HStack spacing={4} mb={4}>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={24} />
              </Link>
            </HStack>
            <Box mt={4}>
              <Heading as="h4" size="sm" mb={2}>Suscríbete</Heading>
              <Flex>
                <Input 
                  type="email" 
                  placeholder="Tu email" 
                  borderRightRadius={0}
                />
                <Button 
                  borderLeftRadius={0}
                  colorScheme="blue"
                >
                  Enviar
                </Button>
              </Flex>
            </Box>
          </GridItem>
        </Grid>

        {/* Copyright */}
        <Divider borderColor="gray.700" my={6} />
        <Box textAlign="center" color="gray.400">
          <Text>&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</Text>
          <HStack spacing={4} justify="center" mt={2}>
            <NextLink href="/privacidad" passHref legacyBehavior>
              <Link>Política de Privacidad</Link>
            </NextLink>
            <NextLink href="/terminos" passHref legacyBehavior>
              <Link>Términos y Condiciones</Link>
            </NextLink>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;