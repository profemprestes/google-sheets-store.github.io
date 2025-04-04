import React from 'react';
import { Box, Button, Container, Flex, Heading, Text, VStack, Badge, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import { heroStyles, getFeatureCardStyles, fadeInUp, fadeInLeft, staggerContainer } from '../theme/herotiendastyles';

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionBadge = motion(Badge);
const MotionStack = motion(Stack);

const HeroTienda = () => {
  const features = [
    {
      title: 'Paso 1: Selecciona tus Productos',
      description: 'Explora nuestro catálogo y elige los artículos que necesitas para tu hogar',
      icon: '🛒',
      color: 'blue'
    },
    {
      title: 'Paso 2: Solicita Presupuesto',
      description: 'Completa tus datos y envíanos tu consulta directamente por WhatsApp',
      icon: '📝',
      color: 'green'
    },
    {
      title: 'Paso 3: Coordina la Entrega',
      description: 'Confirmamos disponibilidad y coordinamos el envío a tu domicilio',
      icon: '🚚',
      color: 'purple'
    }
  ];
  
  return (
    <Box sx={heroStyles.container}>

      
      {/* Overlay gradient */}
      {/* Replace background image with modern gradient background */}
      <Box 
        position="absolute" 
        top={0} 
        left={0} 
        right={0} 
        bottom={0} 
        zIndex={0}
        sx={heroStyles.gradientBackground}
      >
        {/* Animated gradient shapes */}
        <MotionBox
          position="absolute"
          top="-10%"
          left="-5%"
          width="40%"
          height="40%"
          borderRadius="50%"
          bgGradient="radial(blue.400, blue.600)"
          filter="blur(60px)"
          opacity={0.6}
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <MotionBox
          position="absolute"
          bottom="-5%"
          right="-5%"
          width="35%"
          height="35%"
          borderRadius="50%"
          bgGradient="radial(purple.400, purple.600)"
          filter="blur(60px)"
          opacity={0.5}
          animate={{
            x: [0, -20, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <MotionBox
          position="absolute"
          top="30%"
          right="20%"
          width="25%"
          height="25%"
          borderRadius="50%"
          bgGradient="radial(teal.400, teal.600)"
          filter="blur(50px)"
          opacity={0.4}
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </Box>
      
      {/* Overlay gradient - adjust for the new background */}
      <Box 
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-b, rgba(13,12,34,0.85), rgba(13,12,34,0.95))"
        zIndex={1}
      />
      
      <Container sx={heroStyles.contentContainer}>
        {/* Main title with highlight */}
        <MotionBox 
          textAlign="center" 
          mb={{ base: 6, md: 10 }}
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <MotionBadge
            colorScheme="blue"
            fontSize={{ base: "sm", md: "md" }}
            px={3}
            py={1}
            borderRadius="full"
            mb={3}
            variants={fadeInUp}
          >
            PRECIO HOGAR
          </MotionBadge>
          
          <MotionHeading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="extrabold"
            color="white"
            textShadow="0 2px 10px rgba(0, 0, 0, 0.3)"
            bgGradient="linear(to-r, blue.300, blue.600)"
            bgClip="text"
            variants={fadeInUp}
          >
            Tienda Online
          </MotionHeading>
          
          <MotionText
            fontSize={{ base: "md", md: "lg" }}
            color="whiteAlpha.900"
            mt={2}
            maxW="700px"
            mx="auto"
            variants={fadeInUp}
          >
            Realiza tu pedido en simples pasos y recibe tus productos en la puerta de tu casa
          </MotionText>
        </MotionBox>
        
     
        
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
            ¿Cómo Comprar en PrecioHogar?
          </MotionHeading>
          
          <MotionText 
            sx={heroStyles.featuresSubheading}
            variants={fadeInUp}
          >
            Sigue estos sencillos pasos para realizar tu compra de forma rápida y segura
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
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <Flex direction="column" align="flex-start">
                    <Flex 
                      align="center"
                      mb={4}
                      w="full"
                      justify="space-between"
                    >
                      <Flex align="center">
                        <MotionBox 
                          sx={styles.featureIcon}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {feature.icon}
                        </MotionBox>
                        <Heading 
                          sx={styles.featureTitle}
                        >
                          {feature.title}
                        </Heading>
                      </Flex>
                      <MotionBox 
                        sx={styles.featureNumber}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.7, 1, 0.7],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      >
                        {index + 1}
                      </MotionBox>
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

export default HeroTienda;