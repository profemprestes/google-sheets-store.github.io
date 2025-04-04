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

import theme from '../theme';
import Footer from '../components/Footer';
import Hero from '../components/hero';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={4} bgGradient="linear(to-b, blue.50, white)" suppressHydrationWarning>
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
            <HStack spacing={4}>
              <Image
                alt="PrecioHogar Logo"
                maxHeight="100px"
                src="/logotienda.svg"
                fallbackSrc="https://via.placeholder.com/100?text=PrecioHogar"
                borderRadius="full"
                border="2px"
                borderColor="blue.500"
                p={1}
              />
              <VStack align={{ base: "center", md: "flex-start" }} spacing={0}>
                <Heading 
                  bgGradient="linear(to-r, blue.500, blue.700)" 
                  bgClip="text" 
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                >
                  PrecioHogar
                </Heading>
                <Text 
                  color="gray.600" 
                  fontStyle="italic"
                  fontSize={{ base: "sm", md: "md" }}
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
          <Hero /> {/* Added Hero component here */}
          <Component {...pageProps} />
          <Footer />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
