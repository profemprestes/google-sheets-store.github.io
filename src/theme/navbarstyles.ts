import { SystemStyleObject } from '@chakra-ui/react';

// Animation variants
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export const slideInRight = {
  initial: { x: 50, opacity: 0 },
  animate: (custom: number = 0) => ({ 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.5,
      delay: custom * 0.1,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  })
};

export const logoSpin = {
  initial: { rotate: 0 },
  animate: { 
    rotate: [0, 5, 0],
    transition: { 
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export const pulse = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.05, 1],
    transition: { 
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export const navItemAnimation = {
  initial: { y: -20, opacity: 0 },
  animate: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  }),
  hover: {
    y: -3,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

export const navbarStyles = {
  container: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    bg: "white",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid",
    borderColor: "gray.100",
    transition: "all 0.2s ease",
  } as SystemStyleObject,
  
  innerContainer: {
    maxW: "container.xl",
    mx: "auto",
    px: { base: 3, md: 4 },
    py: { base: 2, md: 3 },
    height: "full",
  } as SystemStyleObject,
  
  // Add these missing styles
  flexContainer: {
    justify: "space-between",
    align: "center",
    width: "100%",
  } as SystemStyleObject,
  
  logoContainer: {
    display: "flex",
    alignItems: "center",
    _hover: { 
      textDecoration: "none",
      cursor: "pointer"
    },
  } as SystemStyleObject,
  
  // Keep this single logo definition (the more complete one)
  logo: {
    boxSize: { base: "40px", md: "60px", lg: "80px" },
    objectFit: "contain",
    borderRadius: "full",
    p: { base: 1, md: 2 },
    bg: "white",
    boxShadow: "sm",
    border: "1px solid",
    borderColor: "gray.100",
    transition: "all 0.3s ease",
  } as SystemStyleObject,
  
  logoHeading: {
    fontSize: { base: "md", md: "xl", lg: "2xl" },
    fontWeight: "bold",
    color: "blue.600",
    letterSpacing: "tight",
    lineHeight: "shorter",
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  } as SystemStyleObject,
  
  // Optimized animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.3, // Faster
        ease: "easeOut"
      }
    }
  },

  slideInRight: {
    initial: { x: 30, opacity: 0 }, // Reduced initial x
    animate: (custom: number = 0) => ({ 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.3,
        delay: custom * 0.05, // Faster stagger
        ease: "easeOut"
      }
    })
  },
  logoTextContainer: {
    spacing: 0,
    align: "flex-start",
    display: "flex", // Changed from { base: "none", sm: "flex" } to always display
  } as SystemStyleObject,
  
  logoSubtext: {
    fontSize: { base: "2xs", sm: "xs", md: "sm" },
    color: "gray.600",
    display: { base: "block", md: "block" }, // Changed to display on all screen sizes
    lineHeight: "tight",
    transition: "all 0.3s ease",
  } as SystemStyleObject,
  
  navLinks: {
    display: { base: "none", md: "flex" },
    spacing: { base: 4, lg: 8 },
    marginLeft: "auto", // This pushes the nav links to the right
    justifyContent: "flex-end",
  } as SystemStyleObject,
  
  navLink: {
    px: 2,
    py: 1,
    rounded: "md",
    fontWeight: "medium",
    position: "relative",
    transition: "all 0.3s ease",
    _hover: {
      textDecoration: "none",
      color: "blue.50",
    },
    _after: {
      content: '""',
      position: "absolute",
      bottom: "-2px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "0%",
      height: "2px",
      bg: "blue.50",
      transition: "width 0.3s ease",
    },
    _hover_after: {
      width: "100%",
    },
  } as SystemStyleObject,
  
  contactButton: {
    colorScheme: "teal",
    size: { base: "sm", md: "md" },
    fontWeight: "bold",
    borderRadius: "full",
    px: { base: 3, md: 5 },
    py: { base: 1, md: 2 },
    boxShadow: "md",
    bg: "teal.500",
    color: "white",
    _hover: {
      bg: "teal.600",
      transform: "translateY(-2px)",
      boxShadow: "lg",
    },
    _active: {
      bg: "teal.700",
      transform: "translateY(0)",
      boxShadow: "sm",
    },
  } as SystemStyleObject,
  
  mobileMenuButton: {
    display: { base: "flex", md: "none" },
    size: "md",
    colorScheme: "blue",
    variant: "ghost",
    borderRadius: "full",
    _hover: {
      bg: "blue.50",
    },
    _active: {
      bg: "blue.100",
    },
  } as SystemStyleObject,
  
  mobileMenu: {
    p: 4,
    bg: "white",
    borderRadius: "md",
    boxShadow: "md",
    mt: 2,
    display: { md: "none" },
    flexDirection: "column",
    gap: 2,
  } as SystemStyleObject,
  
  // Additional styles for enhanced visual appeal
  activeIndicator: {
    position: "absolute",
    bottom: "-2px",
    left: 0,
    height: "2px",
    bg: "blue.500",
    transition: "all 0.3s ease",
  } as SystemStyleObject,
  
  navbarShadow: {
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    borderBottom: "none",
  } as SystemStyleObject,
  
  transparentNavbar: {
    bg: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  } as SystemStyleObject,
  
  mobileNavItem: {
    py: 3,
    px: 4,
    borderRadius: "md",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 0.2s",
    _hover: {
      bg: "blue.50",
      color: "blue.50",
    },
  } as SystemStyleObject,
  
  cartIndicator: {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    bg: "red.500",
    color: "white",
    borderRadius: "full",
    fontSize: "xs",
    fontWeight: "bold",
    minW: "18px",
    height: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 0 2px white",
  } as SystemStyleObject,
  
  // Responsive styles for different screen sizes
  desktopOnly: {
    display: { base: "none", md: "flex" },
  } as SystemStyleObject,
  
  mobileOnly: {
    display: { base: "flex", md: "none" },
  } as SystemStyleObject,
  
  // Animation styles
  fadeInAnimation: {
    opacity: 1,
    transition: "opacity 0.5s ease",
  } as SystemStyleObject,
  
  slideDownAnimation: {
    transform: "translateY(0)",
    opacity: 1,
    transition: "transform 0.5s ease, opacity 0.5s ease",
  } as SystemStyleObject,
};