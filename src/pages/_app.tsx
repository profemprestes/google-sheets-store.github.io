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
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import { FaSun, FaMoon } from 'react-icons/fa';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// Change this line to use named import instead of default import
import { theme } from '../theme';
import Footer from '../components/Footer';
import Hero from '../components/hero';
import HeroTienda from '../components/herotienda';
import ClientOnly from '../components/ClientOnly';
import NavBar from '../components/NavBar';

// Create a context to share state between pages
export const AppContext = createContext({
  isMounted: false,
  toggleColorMode: () => {},
  colorMode: 'light',
});

// Theme toggle button component
const ThemeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleToggle = () => {
    setIsAnimating(true);
    toggleColorMode();
    
    // Reset animation after it completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={handleToggle}
      className={`theme-toggle-button ${isAnimating ? 'theme-toggle-active' : ''}`}
      size="lg"
      variant="ghost"
    />
  );
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Use client-side rendering for the Hero component
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  
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
    <AppContext.Provider value={{ isMounted, toggleColorMode, colorMode }}>
      <ChakraProvider theme={theme}>
        <ClientOnly>
          {isMounted && <NavBar />}
        </ClientOnly>
        
        <Divider marginY={6} borderColor={useColorModeValue("blue.200", "blue.700")} />
        
        {/* Conditionally render the appropriate hero */}
        <ClientOnly>
          {renderHero()}
        </ClientOnly>
        
        <Component {...pageProps} />
        <Footer />
        
        {/* Add the theme toggle button */}
        <ClientOnly>
          {isMounted && <ThemeToggle />}
        </ClientOnly>
      </ChakraProvider>
    </AppContext.Provider>
  );
};

export default App;
