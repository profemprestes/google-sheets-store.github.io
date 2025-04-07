import {
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  useBreakpointValue,
  IconButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { navbarStyles } from '../theme/navbar';

interface NavBarProps {
  title: string;
  slogan: string;
}

const NavBar: React.FC<NavBarProps> = ({ title, slogan }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const textColor = useColorModeValue(navbarStyles.colors.text, 'white');
  const secondaryColor = useColorModeValue(navbarStyles.colors.secondary, 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  // Use the logo from the public directory
  const logoSrc = '/logotienda.svg';

  return (
    <Box as="nav" {...navbarStyles.base}>
      <Flex {...navbarStyles.container}>
        {/* Logo y título */}
        <Flex alignItems="center" gap={4} flex={{ base: 1, md: 'auto' }}>
          <Image src={logoSrc} alt="Logo Precio Hogar" {...navbarStyles.logo} />
          <Box display={{ base: 'none', md: 'block' }}>
            <Text as="h1" {...navbarStyles.title} color={textColor}>
              {title}
            </Text>
            <Text {...navbarStyles.slogan} color={secondaryColor}>
              {slogan}
            </Text>
          </Box>
        </Flex>

        {/* Botón WhatsApp para escritorio */}
        <Box display={{ base: 'none', md: 'block' }}>
          <Button
            colorScheme="whatsapp"
            leftIcon={<HamburgerIcon />}
            onClick={() => {
              const phoneNumber = '59892315819';
              const text = 'Necesito más información';
              window.open(
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
                '_blank'
              );
            }}
          >
            Contacto por WhatsApp
          </Button>
        </Box>

        {/* Menú móvil */}
        {isMobile && (
          <IconButton
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            size="md"
            onClick={isOpen ? onClose : onOpen}
          />
        )}

        {/* Contenido del menú */}
        {isOpen && isMobile && (
          <Box {...navbarStyles.mobileMenu}>
            <Box mb={6} borderBottomWidth="1px" borderBottomColor={borderColor} pb={4}>
              <Text as="h1" {...navbarStyles.title} color={textColor} mb={2}>
                {title}
              </Text>
              <Text {...navbarStyles.slogan} color={secondaryColor} mb={4}>
                {slogan}
              </Text>
            </Box>

            <Button
              width="full"
              colorScheme="whatsapp"
              leftIcon={<HamburgerIcon />}
              onClick={() => {
                const phoneNumber = '59892315819';
                const text = 'Necesito más información';
                window.open(
                  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
                  '_blank'
                );
              }}
            >
              Contacto por WhatsApp
            </Button>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default NavBar;
