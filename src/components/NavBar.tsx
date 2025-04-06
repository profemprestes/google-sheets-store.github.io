import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Flex, 
  HStack, 
  VStack, 
  Image, 
  Heading, 
  Text, 
  Link, 
  IconButton,
  Collapse,
  useDisclosure,
  Badge,
  Button,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HamburgerIcon, CloseIcon, PhoneIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { navbarStyles, fadeIn, slideInRight, logoSpin, pulse, navItemAnimation } from '../theme/navbarstyles';
import { useRouter } from 'next/router';

// Motion components
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionHStack = motion(HStack);
const MotionBadge = motion(Badge);
const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { colorMode, toggleColorMode } = useColorMode();
  
  // Transform navbar opacity and height based on scroll position
  const navbarOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const navbarHeight = useTransform(scrollY, [0, 100], ['90px', '70px']);
  
  // Update scrolled state for additional styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Tienda', path: '/tienda' },
    { name: 'Contacto', path: '/#contacto' },
  ];

  // Theme toggle animation
  const themeToggleVariants = {
    initial: { rotate: 0 },
    animate: { rotate: 0 },
    hover: { scale: 1.1, rotate: 15 },
    tap: { scale: 0.9, rotate: 0 }
  };

  return (
    <MotionBox 
      sx={navbarStyles.container}
      style={{ 
        height: navbarHeight,
        opacity: navbarOpacity,
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
      }}
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <Box sx={navbarStyles.innerContainer}>
        <MotionFlex
          sx={navbarStyles.flexContainer}
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <NextLink href="/" passHref>
            <MotionBox 
              as="a"
              sx={navbarStyles.logoContainer}
              variants={fadeIn}
              whileHover={{ 
                y: -2,
                transition: { 
                  duration: 0.2,
                  ease: "easeOut"
                } 
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
            >
              <MotionHStack spacing={2}>
                <MotionImage
                  alt="PrecioHogar Logo"
                  src="/logotienda.svg"
                  fallbackSrc="https://via.placeholder.com/100?text=PrecioHogar"
                  sx={navbarStyles.logo}
                  variants={logoSpin}
                  whileHover={{ 
                    rotate: 10,
                    scale: 1.05,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 15
                    }
                  }}
                />
                <VStack sx={navbarStyles.logoTextContainer}>
                  <MotionHeading 
                    sx={navbarStyles.logoHeading}
                    variants={slideInRight}
                    whileHover={{
                      x: 3,
                      color: "#3182ce",
                      transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 15
                      }
                    }}
                  >
                    PrecioHogar
                  </MotionHeading>
                  <MotionText 
                    sx={navbarStyles.logoSubtext}
                    variants={slideInRight}
                    custom={1}
                    whileHover={{
                      x: 5,
                      transition: {
                        type: "spring",
                        stiffness: 300
                      }
                    }}
                  >
                    Tu fuente confiable de electrodomésticos
                  </MotionText>
                </VStack>
              </MotionHStack>
            </MotionBox>
          </NextLink>

          <HStack spacing={4} justifyContent="flex-end" width="100%">
            <HStack sx={navbarStyles.navLinks} justifyContent="flex-end" ml="auto">
              {navItems.map((item, index) => (
                <NextLink href={item.path} key={index} passHref>
                  <MotionBox
                    as="a"
                    custom={index}
                    variants={navItemAnimation}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    position="relative"
                  >
                    <Link 
                      sx={{
                        ...navbarStyles.navLink,
                        color: router.pathname === item.path ? "blue.600" : "gray.700",
                        fontWeight: router.pathname === item.path ? "bold" : "medium",
                      }}
                    >
                      {item.name}
                      {router.pathname === item.path && (
                        <MotionBox
                          position="absolute"
                          bottom="-2px"
                          left="0"
                          height="2px"
                          width="100%"
                          bg="blue.500"
                          layoutId="navIndicator"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </MotionBox>
                </NextLink>
              ))}
              
              {/* Theme toggle button */}
              <MotionIconButton
                aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                size="md"
                variant="ghost"
                color={colorMode === 'light' ? 'gray.600' : 'yellow.200'}
                _hover={{
                  bg: colorMode === 'light' ? 'gray.100' : 'whiteAlpha.200',
                }}
                variants={themeToggleVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                display={{ base: "none", md: "flex" }}
              />
            </HStack>
            
            <MotionButton
              as={NextLink}
              href="https://wa.me/59892315819"
              passHref
              sx={navbarStyles.contactButton}
              leftIcon={<PhoneIcon />}
              variants={slideInRight}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(49, 151, 149, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              display={{ base: "none", md: "flex" }}
            >
              Contactar
            </MotionButton>
    
            <IconButton
              aria-label="Open menu"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={onToggle}
              sx={navbarStyles.mobileMenuButton}
              transition="all 0.3s"
              transform={isOpen ? "rotate(90deg)" : "rotate(0deg)"}
            />
          </HStack>
        </MotionFlex>
        
        <Collapse in={isOpen} animateOpacity>
          <MotionBox 
            sx={navbarStyles.mobileMenu}
            initial="initial"
            animate="animate"
            variants={slideInRight}
          >
            {navItems.map((item, index) => (
              <NextLink href={item.path} key={index} passHref>
                <MotionBox
                  as="a"
                  custom={index}
                  variants={navItemAnimation}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    py={3}
                    px={4}
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    bg={router.pathname === item.path ? "blue.50" : "transparent"}
                    color={router.pathname === item.path ? "blue.600" : "gray.700"}
                    fontWeight={router.pathname === item.path ? "bold" : "medium"}
                    _hover={{ bg: "blue.50", color: "blue.500" }}
                    transition="all 0.2s"
                  >
                    {item.name}
                    {router.pathname === item.path && (
                      <MotionBadge colorScheme="blue" variant="solid" size="sm">
                        Actual
                      </MotionBadge>
                    )}
                  </Link>
                </MotionBox>
              </NextLink>
            ))}
            
            {/* Theme toggle button in mobile menu */}
            <MotionButton
              leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              colorScheme={colorMode === 'light' ? 'gray' : 'yellow'}
              size="md"
              width="full"
              mt={3}
              variants={pulse}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cambiar a modo {colorMode === 'light' ? 'oscuro' : 'claro'}
            </MotionButton>
            
            <MotionButton
              as={NextLink}
              href="https://wa.me/59892315819"
              passHref
              leftIcon={<PhoneIcon />}
              colorScheme="teal"
              size="md"
              width="full"
              mt={3}
              variants={pulse}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar por WhatsApp
            </MotionButton>
          </MotionBox>
        </Collapse>
      </Box>
    </MotionBox>
  );
};

export default NavBar;