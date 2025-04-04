import type { AppProps } from 'next/app';
import {
  ChakraProvider,
  Container,
  Image,
  VStack,
  Heading,
  Text,
  Box,
  Divider,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import theme from '../theme';
import Footer from '../components/Footer';
import Hero from '../components/hero';
import ClientOnly from '../components/ClientOnly';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Use client-side rendering for the Hero component
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box padding={4} bgGradient="linear(to-b, blue.50, white)">
        <Container
          backgroundColor="white"
          borderRadius="md"
          boxShadow="lg"
          marginY={4}
          maxWidth="container.xl"
          padding={4}
        >
          <Flex 
            direction={{ base: "column", md: "row" }} 
            align="center" 
            justify="space-between"
            marginBottom={6}
          >
            <HStack 
              spacing={{ base: 3, md: 5 }}
              bg="white"
              p={{ base: 2, md: 3 }}
              borderRadius="lg"
              boxShadow="sm"
              _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
              transition="all 0.3s ease"
            >
              <Image
                alt="PrecioHogar Logo"
                maxHeight={{ base: "70px", md: "90px" }}
                src="/logotienda.svg"
                fallbackSrc="https://via.placeholder.com/100?text=PrecioHogar"
                borderRadius="full"
                border="3px solid"
                borderColor="blue.500"
                p={1}
                bg="white"
                boxShadow="0 0 15px rgba(66, 153, 225, 0.4)"
                transition="all 0.3s ease"
                _hover={{ transform: "rotate(5deg)" }}
              />
              <VStack 
                align={{ base: "center", md: "flex-start" }} 
                spacing={1}
                ml={{ base: 0, md: 2 }}
              >
                <Heading 
                  bgGradient="linear(to-r, blue.500, blue.700, blue.500)" 
                  bgClip="text" 
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  textShadow="0 0 1px rgba(66, 153, 225, 0.2)"
                >
                  PrecioHogar
                </Heading>
                <Text 
                  color="gray.600" 
                  fontStyle="italic"
                  fontSize={{ base: "xs", md: "sm", lg: "md" }}
                  fontWeight="medium"
                  letterSpacing="wide"
                  bgGradient="linear(to-r, gray.600, blue.400, gray.600)"
                  bgClip="text"
                  opacity={0.9}
                >
                  Tu fuente confiable de electrodomésticos de calidad
                </Text>
              </VStack>
            </HStack>
            
            <Box 
              mt={{ base: 4, md: 0 }}
              bg="blue.50" 
              p={3} 
              borderRadius="md" 
              borderLeft="4px" 
              borderColor="blue.500"
            >
              <Text fontWeight="medium" color="blue.700">Pedidos al WhatsApp</Text>
              <Text fontSize="sm" color="gray.600">(+598) 092 315 819</Text>
            </Box>
          </Flex>
          <Divider marginY={6} borderColor="blue.200" />
          
          {/* Wrap Hero in ClientOnly component to prevent hydration issues */}
          <ClientOnly>
            {isMounted && <Hero />}
          </ClientOnly>
          
          <Component {...pageProps} />
          <Footer />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
