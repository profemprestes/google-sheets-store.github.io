import React from 'react';
import { Box, Flex, Heading, Text, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { getFeatureCardStyles, fadeInUp, staggerContainer } from '../theme/herotiendastyles';

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const featurestienda = [
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

interface FeaturesTiendaProps {
  title?: string;
  subtitle?: string;
}

const FeaturesTienda: React.FC<FeaturesTiendaProps> = ({ 
  title = "¿Cómo Comprar?", 
  subtitle = "Sigue estos simples pasos para realizar tu compra en PrecioHogar y recibir tus productos en la puerta de tu casa."
}) => {
  return (
    <Container maxW="container.xl" py={10}>
      <MotionBox 
        w="full"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        textAlign="center"
        mb={10}
      >
        <MotionHeading 
          as="h2"
          size="xl"
          mb={4}
          bgGradient="linear(to-r, blue.500, blue.700)"
          bgClip="text"
          variants={fadeInUp}
        >
          {title}
        </MotionHeading>
        
        <MotionText 
          fontSize="lg"
          color="gray.600"
          maxW="container.md"
          mx="auto"
          variants={fadeInUp}
        >
          {subtitle}
        </MotionText>
      </MotionBox>
      
      <MotionFlex 
        flexWrap="wrap"
        justifyContent="center"
        gap={6}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {featurestienda.map((feature, index) => {
          const styles = getFeatureCardStyles(feature.color);
          return (
            <MotionBox 
              key={index}
              sx={styles.featureCard}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              flex="1"
              minW={{ base: "100%", md: "30%" }}
              maxW={{ base: "100%", md: "30%" }}
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
    </Container>
  );
};

export default FeaturesTienda;