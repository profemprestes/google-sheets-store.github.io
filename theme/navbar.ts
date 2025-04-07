export const navbarStyles = {
  base: {
    bg: 'white',
    boxShadow: 'sm',
    position: 'sticky' as const,
    top: 0,
    zIndex: 999,
    borderBottomWidth: '1px',
    borderBottomColor: 'gray.200',
    transition: 'all 0.3s ease',
    _scroll: {
      boxShadow: 'md',
      bg: 'white',
    },
  },

  container: {
    maxW: 'container.xl',
    mx: 'auto',
    px: { base: 4, md: 6 },
    h: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    maxH: { base: '40px', md: '60px' },
    objectFit: 'contain' as const,
    transition: 'transform 0.3s ease',
    _hover: {
      transform: 'scale(1.05)',
    },
  },

  title: {
    fontSize: { base: 'xl', md: '2xl' },
    fontWeight: 'bold',
    mb: 0,
    transition: 'color 0.3s ease',
  },

  slogan: {
    fontSize: { base: 'sm', md: 'md' },
    mb: 0,
    transition: 'color 0.3s ease',
  },

  mobileMenu: {
    position: 'absolute' as const,
    top: 16,
    left: 0,
    right: 0,
    bg: 'white',
    p: 4,
    boxShadow: 'md',
    animation: 'slideDown 0.3s ease',
  },

  animations: {
    slideDown: {
      '0%': { opacity: 0, transform: 'translateY(-10px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  },

  colors: {
    text: 'gray.800',
    secondary: 'gray.600',
  },
};