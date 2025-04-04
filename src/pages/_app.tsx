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
import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';

// Change this line to use named import instead of default import
import { theme } from '../theme';
import Footer from '../components/Footer';
import Hero from '../components/hero';
import HeroTienda from '../components/herotienda';
import ClientOnly from '../components/ClientOnly';
import NavBar from '../components/NavBar';

// Create a context to share state between pages
export const AppContext = createContext({
  isMounted: false
});

const App = ({ Component, pageProps }: AppProps) => {
  // Use client-side rendering for the Hero component
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Determine which hero to show based on the current path
  const renderHero = () => {
    if (!isMounted) return null;
    
    // If we're on the tienda page, show HeroTienda
    if (router.pathname === '/tienda') {
      return <HeroTienda />;
    }
    
    // Otherwise show the default Hero
    return <Hero />;
  };

  return (
    <AppContext.Provider value={{ isMounted }}>
      <ChakraProvider theme={theme}>
        <ClientOnly>
          {isMounted && <NavBar />}
        </ClientOnly>
        
        <Divider marginY={6} borderColor="blue.200" />
        
        {/* Conditionally render the appropriate hero */}
        <ClientOnly>
          {renderHero()}
        </ClientOnly>
        
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </AppContext.Provider>
  );
};

export default App;
