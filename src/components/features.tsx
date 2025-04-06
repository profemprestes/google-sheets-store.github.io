import React from 'react';
import { Box, Flex, Heading, Text, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { getFeatureCardStyles, fadeInUp, staggerContainer } from '../theme/herostyles';

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

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

interface FeaturesProps {
  title?: string;
  subtitle?: string;
}

const Features: React.FC<FeaturesProps> = ({ 
  title = "¿Por qué elegirnos?", 
  subtitle = "Descubre las ventajas de comprar en PrecioHogar, donde la calidad y el servicio son nuestra prioridad."
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
        {features.map((feature, index) => {
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

export default Features;