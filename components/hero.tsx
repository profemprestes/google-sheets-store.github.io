import React from 'react';
import { Box, Button, Container, Flex, Heading, Text, VStack, Image, useBreakpointValue, BoxProps, FlexProps, HeadingProps, TextProps, ButtonProps, ContainerProps, StackProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import { heroStyles, getFeatureCardStyles } from '../theme/herostyles';

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
        bgGradient="linear(to-r, blue.700, blue.500, blue.600)"
        opacity={0.92}
        zIndex={1}
      />
      
      {/* Background pattern */}
      <Box 
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage="url('/images/pattern.png')"
        backgroundRepeat="repeat"
        backgroundSize="50px"
        opacity={0.08}
        zIndex={2}
      />
      
      <Container 
        maxW="container.xl"
        position="relative"
        zIndex={3}
      >
        <Flex 
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          py={{ base: 12, md: 16 }}
          gap={{ base: 8, lg: 4 }}
        >
          {/* Hero content */}
          <VStack 
            spacing={6}
            align={{ base: 'center', lg: 'flex-start' }}
            maxW={{ base: '100%', lg: '50%' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="extrabold"
              color="white"
              lineHeight="shorter"
              textShadow="0 2px 10px rgba(0, 0, 0, 0.2)"
              letterSpacing="tight"
            >
              Los Mejores Productos para tu Hogar
            </Heading>
            
            <Text 
              fontSize={{ base: 'md', md: 'lg' }}
              color="whiteAlpha.900"
              maxW="600px"
              fontWeight="medium"
            >
              Descubre nuestra selección de electrodomésticos y artículos de calidad a precios increíbles. Envíos a todo Uruguay.
            </Text>
            
            <Flex 
              gap={4}
              direction={{ base: 'column', sm: 'row' }}
              w={{ base: '100%', sm: 'auto' }}
            >
              <NextLink href="/#productos" passHref>
                <Button 
                  size="lg"
                  colorScheme="whatsapp"
                  rounded="md"
                  px={8}
                  fontWeight="bold"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.3s ease"
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
                  fontWeight="medium"
                  _hover={{
                    bg: 'whiteAlpha.200',
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.3s ease"
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
            border="4px solid"
            borderColor="whiteAlpha.300"
          >
            <Image
              src="/images/logotienda.svg"
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
        <Box mb={12}>
          <Heading 
            as="h2"
            textAlign="center"
            fontSize={{ base: "xl", md: "2xl" }}
            mb={6}
            color="blue.700"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "3px",
              bgGradient: "linear(to-r, blue.400, blue.600)",
              borderRadius: "full"
            }}
          >
            ¿Por qué elegirnos?
          </Heading>
          
          <Text 
            textAlign="center"
            fontSize={{ base: "sm", md: "md" }}
            color="gray.600"
            maxW="800px"
            mx="auto"
            mb={8}
          >
            Descubre las ventajas de comprar en PrecioHogar, donde la calidad y el servicio son nuestra prioridad.
          </Text>
          
          <Flex 
            bg="white"
            rounded="xl"
            p={{ base: 4, md: 6 }}
            justify="space-between"
            direction={{ base: 'column', md: 'row' }}
            gap={6}
            boxShadow="lg"
            borderWidth="1px"
            borderColor="gray.100"
            overflow="hidden"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              bgGradient: "linear(to-r, blue.400, blue.600, blue.400)"
            }}
          >
            {[
              {
                title: 'Envíos a Todo Uruguay',
                description: 'Envío gratis según la zona dentro de Montevideo',
                icon: '🚚',
                color: 'blue'
              },
              {
                title: 'Pago Seguro',
                description: 'Pagas al recibir el envío, sin riesgos',
                icon: '🔒',
                color: 'green'
              },
              {
                title: 'Atención Personalizada',
                description: 'Asistencia directa por WhatsApp las 24 horas',
                icon: '👨‍💼',
                color: 'purple'
              }
            ].map((feature, index) => (
              <Box 
                key={index}
                flex={1}
                p={4}
                borderRadius="lg"
                bg={`${feature.color}.50`}
                borderLeft="4px solid"
                borderColor={`${feature.color}.500`}
                transition="all 0.3s ease"
                transform="translateY(0)"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "xl",
                  bg: `${feature.color}.100`
                }}
                role="group"
              >
                <Flex direction="column" align="flex-start">
                  <Flex 
                    align="center"
                    mb={3}
                    w="full"
                    justify="space-between"
                  >
                    <Flex align="center">
                      <Box 
                        fontSize="2xl"
                        mr={3}
                        transition="all 0.3s ease"
                        _groupHover={{ transform: "scale(1.2)" }}
                      >
                        {feature.icon}
                      </Box>
                      <Heading 
                        as="h3"
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="bold"
                        color={`${feature.color}.700`}
                      >
                        {feature.title}
                      </Heading>
                    </Flex>
                    <Box 
                      bg={`${feature.color}.100`}
                      color={`${feature.color}.700`}
                      rounded="full"
                      w={6}
                      h={6}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="xs"
                      fontWeight="bold"
                      border="1px solid"
                      borderColor={`${feature.color}.200`}
                      opacity={0.8}
                      _groupHover={{ opacity: 1 }}
                    >
                      {index + 1}
                    </Box>
                  </Flex>
                  <Text 
                    color="gray.600"
                    fontSize={{ base: "xs", md: "sm" }}
                    transition="all 0.3s ease"
                    _groupHover={{ color: "gray.800" }}
                  >
                    {feature.description}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;