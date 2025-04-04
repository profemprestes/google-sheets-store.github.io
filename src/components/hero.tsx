import React from 'react';
import { Box, Button, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import { heroStyles, getFeatureCardStyles, fadeInUp, fadeInLeft, staggerContainer } from '../theme/herostyles';

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const Hero = () => {
  const features = [
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
  ];
  
  return (
    <Box sx={heroStyles.container}>
      {/* Background image with Next/Image for optimization */}
      <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
        <NextImage
          src="/BannerPrincipal.png"
          alt="Banner Principal"
          fill
          priority
          quality={90}
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </Box>
      
      {/* Overlay gradient */}
      <Box 
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={1}
      />
      
      <Container sx={heroStyles.contentContainer}>
        <Flex sx={heroStyles.flexContainer}>
          {/* Hero content */}
          <MotionVStack 
            sx={heroStyles.textContainer}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            spacing={{ base: 4, md: 6 }}
          >
            <MotionHeading
              sx={heroStyles.heading}
              variants={fadeInUp}
              as="h1"
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
            >
              Los Mejores Productos para tu Hogar
            </MotionHeading>
            
            <MotionText 
              sx={heroStyles.subheading}
              variants={fadeInUp}
              maxW={{ base: "100%", md: "90%", lg: "600px" }}
            >
              Descubre nuestra selección de electrodomésticos y artículos de calidad a precios increíbles. Envíos a todo Uruguay.
            </MotionText>
            
            <MotionFlex 
              sx={heroStyles.buttonContainer}
              variants={fadeInUp}
              mt={{ base: 2, md: 4 }}
              w="100%"
            >
              <NextLink href="/#productos" passHref>
                <MotionButton 
                  sx={heroStyles.primaryButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pulse-button"
                  w={{ base: "full", sm: "auto" }}
                >
                  Ver Productos
                </MotionButton>
              </NextLink>
              
              <NextLink href="https://wa.me/59892315819" passHref>
                <MotionButton 
                  sx={heroStyles.secondaryButton}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(49, 151, 149, 0.6)",
                    boxShadow: "0 0 15px rgba(49, 151, 149, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  leftIcon={
                    <Box as="span" fontSize="1.2em" mr={1}>
                      📞
                    </Box>
                  }
                  w={{ base: "full", sm: "auto" }}
                >
                  Contactar
                </MotionButton>
              </NextLink>
            </MotionFlex>
          </MotionVStack>
          
          {/* Hero image */}
          <MotionBox
            sx={heroStyles.imageContainer}
            variants={fadeInLeft}
            initial="initial"
            animate="animate"
            whileHover={{ 
              transform: 'rotate(0deg) scale(1.05)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            <Box 
              position="relative" 
              width="100%" 
              height="100%"
              borderRadius="xl"
              overflow="hidden"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="transparent"
            >
              <NextImage
                src="/logotiendaoscuro.svg"
                alt="Productos para el hogar"
                width={400}
                height={300}
                style={{ 
                  objectFit: 'contain',
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
                priority
              />
            </Box>
          </MotionBox>
        </Flex>
        
        {/* Features section */}
        <MotionBox 
          sx={heroStyles.featuresContainer}
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <MotionHeading 
            sx={heroStyles.featuresHeading}
            variants={fadeInUp}
          >
            ¿Por qué elegirnos?
          </MotionHeading>
          
          <MotionText 
            sx={heroStyles.featuresSubheading}
            variants={fadeInUp}
          >
            Descubre las ventajas de comprar en PrecioHogar, donde la calidad y el servicio son nuestra prioridad.
          </MotionText>
          
          <MotionFlex 
            sx={heroStyles.featuresFlexContainer}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {features.map((feature, index) => {
              const styles = getFeatureCardStyles(feature.color);
              return (
                <MotionBox 
                  key={index}
                  sx={styles.featureCard}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <Flex direction="column" align="flex-start">
                    <Flex 
                      align="center"
                      mb={3}
                      w="full"
                      justify="space-between"
                    >
                      <Flex align="center">
                        <MotionBox 
                          sx={styles.featureIcon}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          {feature.icon}
                        </MotionBox>
                        <Heading 
                          sx={styles.featureTitle}
                        >
                          {feature.title}
                        </Heading>
                      </Flex>
                      <Box sx={styles.featureNumber}>
                        {index + 1}
                      </Box>
                    </Flex>
                    <Text sx={styles.featureDescription}>
                      {feature.description}
                    </Text>
                  </Flex>
                </MotionBox>
              );
            })}
          </MotionFlex>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Hero;