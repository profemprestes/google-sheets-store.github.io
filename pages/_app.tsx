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
  useColorModeValue, 
  Flex 
} from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import theme from '../theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Box 
          padding={{ base: 2, md: 4 }}
          minHeight="100vh"
          bgGradient="linear(to-b, primary.50, white)"
        >
          <Container
            backgroundColor={bgColor}
            borderRadius="lg"
            boxShadow="xl"
            marginY={{ base: 2, md: 4 }}
            maxWidth="container.xl"
            padding={{ base: 3, md: 6 }}
            transition="all 0.3s ease"
            _hover={{ boxShadow: "2xl" }}
          >
            <VStack marginBottom={{ base: 4, md: 8 }} spacing={3}>
              <Flex 
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="center"
                width="full"
              >
                <Image
                  alt="Logo"
                  maxHeight={{ base: "100px", md: "128px" }}
                  src="/logotienda.svg"
                  transition="transform 0.3s ease"
                  _hover={{ transform: "scale(1.05)" }}
                  mr={{ md: 6 }}
                />
                <VStack align={{ base: "center", md: "start" }} mt={{ base: 4, md: 0 }}>
                  <Heading 
                    as="h1" 
                    size={{ base: "xl", md: "2xl" }}
                    color={textColor}
                    fontWeight="bold"
                  >
                    Precio Hogar
                  </Heading>
                  <Text 
                    fontSize={{ base: "sm", md: "md" }}
                    color="gray.600"
                    fontWeight="medium"
                  >
                    Tu tienda online de confianza para productos del hogar
                  </Text>
                </VStack>
              </Flex>
            </VStack>
            <Divider marginY={{ base: 4, md: 6 }} />
            <Component {...pageProps} />
          </Container>
        </Box>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default App;
