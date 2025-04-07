export const styles = {
  global: {
    body: {
      bg: 'background.light',
      color: 'gray.800',
      fontFamily: 'system-ui, sans-serif',
      lineHeight: 'tall',
      minH: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    a: {
      color: 'primary.500',
      textDecoration: 'none',
      _hover: {
        color: 'primary.600',
        textDecoration: 'underline',
      },
    },
    button: {
      fontWeight: 'bold',
      borderRadius: 'md',
      transition: 'all 0.2s ease-in-out',
      letterSpacing: '0.025em',
      _hover: {
        transform: 'scale(1.02)',
      },
      _focus: {
        boxShadow: 'outline',
        outline: 'none',
      },
      _active: {
        transform: 'scale(0.98)',
      },
    },
    '::-webkit-scrollbar': {
      width: '6px',
    },
    '::-webkit-scrollbar-track': {
      background: 'gray.100',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'primary.400',
      borderRadius: '3px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: 'primary.500',
    },
  },
};
