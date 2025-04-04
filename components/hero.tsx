import React from 'react';
import { Box, Button, Container, Flex, Heading, Text, VStack, Image, useBreakpointValue } from '@chakra-ui/react';
import NextLink from 'next/link';

const Hero = () => {
  const imageHeight = useBreakpointValue({ base: '200px', md: '300px', lg: '400px' });
  
  return (
    <Box 
      as="section" 
      position="relative"
      overflow="hidden"
      mb={10}
    >
      {/* Background gradient */}
      <Box 
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-r, blue.600, blue.400)"
        opacity={0.9}
        zIndex={1}
      />
      
      {/* Background pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage="url('/images/pattern.svg')"
        backgroundRepeat="repeat"
        backgroundSize="30px"
        opacity={0.1}
        zIndex={2}
      />
      
      <Container maxW="container.xl" position="relative" zIndex={3}>
        <Flex 
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          py={{ base: 12, md: 16 }}
          gap={{ base: 8, lg: 4 }}
        >
          {/* Hero content */}
          <VStack 
            align={{ base: 'center', lg: 'flex-start' }}
            spacing={6}
            maxW={{ base: '100%', lg: '50%' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
              color="white"
              lineHeight="shorter"
            >
              Los Mejores Productos para tu Hogar
            </Heading>
            
            <Text 
              fontSize={{ base: 'md', md: 'lg' }}
              color="whiteAlpha.900"
              maxW="600px"
            >
              Descubre nuestra selección de electrodomésticos y artículos de calidad a precios increíbles. Envíos a todo Uruguay.
            </Text>
            
            <Flex 
              gap={4} 
              direction={{ base: 'column', sm: 'row' }}
              w={{ base: '100%', sm: 'auto' }}
            >
              <NextLink href="#productos" passHref>
                <Button 
                  size="lg" 
                  colorScheme="whatsapp"
                  rounded="md"
                  px={8}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  className="pulse-button"
                >
                  Ver Productos
                </Button>
              </NextLink>
              
              <NextLink href="https://wa.me/59892315819" passHref>
                <Button 
                  as="a"
                  size="lg" 
                  colorScheme="white"
                  variant="outline"
                  rounded="md"
                  px={8}
                  _hover={{
                    bg: 'whiteAlpha.200',
                    transform: 'translateY(-2px)',
                  }}
                >
                  Contactar
                </Button>
              </NextLink>
            </Flex>
          </VStack>
          
          {/* Hero image */}
          <Box
            maxW={{ base: '100%', lg: '50%' }}
            h={imageHeight}
            position="relative"
            rounded="xl"
            overflow="hidden"
            boxShadow="2xl"
            transform={{ base: 'none', lg: 'rotate(2deg)' }}
            transition="transform 0.3s ease"
            _hover={{ transform: 'rotate(0deg) scale(1.02)' }}
          >
            <Image
              src="/images/hero-image.jpg"
              alt="Productos para el hogar"
              fallbackSrc="https://via.placeholder.com/600x400?text=PrecioHogar"
              objectFit="cover"
              width="100%"
              height="100%"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Flex>
        
        {/* Features section */}
        <Flex 
          bg="whiteAlpha.900" 
          rounded="lg" 
          p={6} 
          mb={8}
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
          gap={4}
          boxShadow="md"
        >
          {['Envíos a Todo Uruguay', 'Garantía de Calidad', 'Atención Personalizada'].map((feature, index) => (
            <Flex key={index} align="center" gap={3} flex={1}>
              <Box 
                bg="blue.500" 
                color="white" 
                rounded="full" 
                w={10} 
                h={10} 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                fontSize="lg"
                fontWeight="bold"
              >
                {index + 1}
              </Box>
              <Text fontWeight="medium">{feature}</Text>
            </Flex>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;