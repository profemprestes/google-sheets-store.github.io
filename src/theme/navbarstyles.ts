import { SystemStyleObject } from '@chakra-ui/react';

// Navbar animation keyframes
export const fadeIn = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } }
};

export const logoSpin = {
  initial: { rotate: 0 },
  animate: { rotate: [0, 10, 0], transition: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }
};

export const pulse = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.05, 1], 
    boxShadow: [
      "0 0 0 rgba(49, 151, 149, 0.4)",
      "0 0 20px rgba(49, 151, 149, 0.6)",
      "0 0 0 rgba(49, 151, 149, 0.4)"
    ],
    transition: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } 
  }
};

// New animation for nav items
export const navItemAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: (i: number | string) => ({
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      delay: typeof i === 'number' ? i * 0.1 + 0.2 : 0.2,
      ease: "easeOut"
    } 
  }),
  hover: {
    y: -3,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

// Navbar styles
export const navbarStyles = {
  container: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    width: "100%",
    py: { base: 3, md: 4 },
    px: { base: 4, md: 8 },
    bg: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderBottom: "1px solid",
    borderColor: "gray.100",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s ease",
  } as SystemStyleObject,
  
  innerContainer: {
    maxW: "container.xl",
    mx: "auto",
  } as SystemStyleObject,
  
  flexContainer: {
    direction: "row",
    align: "center",
    justify: "space-between",
    mb: { base: 0, md: 0 },
    gap: { base: 4, md: 0 },
  } as SystemStyleObject,
  
  logoContainer: {
    spacing: { base: 3, md: 5 },
    bg: "white",
    p: { base: 2, md: 3 },
    borderRadius: "xl",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
    _hover: { 
      boxShadow: "0 8px 30px rgba(66, 153, 225, 0.2)",
      transform: "translateY(-2px)",
      bg: "blue.50"
    },
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    cursor: "pointer",
  } as SystemStyleObject,
  
  logo: {
    maxHeight: { base: "50px", md: "60px" },
    borderRadius: "full",
    border: "3px solid",
    borderColor: "blue.500",
    p: 1,
    bg: "white",
    boxShadow: "0 0 15px rgba(66, 153, 225, 0.4)",
    transition: "all 0.3s ease",
  } as SystemStyleObject,
  
  logoTextContainer: {
    align: { base: "center", md: "flex-start" },
    spacing: 0,
    ml: { base: 0, md: 2 },
  } as SystemStyleObject,
  
  logoHeading: {
    bgGradient: "linear(to-r, blue.500, blue.700, blue.500)",
    bgClip: "text",
    fontSize: { base: "xl", md: "2xl", lg: "3xl" },
    fontWeight: "extrabold",
    letterSpacing: "tight",
    textShadow: "0 0 1px rgba(66, 153, 225, 0.2)",
    lineHeight: "shorter",
  } as SystemStyleObject,
  
  logoSubtext: {
    color: "gray.600",
    fontStyle: "italic",
    fontSize: { base: "xs", md: "xs", lg: "sm" },
    fontWeight: "medium",
    letterSpacing: "wide",
    bgGradient: "linear(to-r, gray.600, blue.400, gray.600)",
    bgClip: "text",
    opacity: 0.9,
    mt: "-2px",
  } as SystemStyleObject,
  
  contactButton: {
    colorScheme: "teal",
    size: { base: "sm", md: "md" },
    fontWeight: "medium",
    borderRadius: "full",
    px: { base: 4, md: 6 },
    boxShadow: "0 4px 10px rgba(49, 151, 149, 0.3)",
    _hover: {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 20px rgba(49, 151, 149, 0.4)",
    },
    _active: {
      transform: "translateY(1px)",
      boxShadow: "0 2px 5px rgba(49, 151, 149, 0.4)",
    },
    transition: "all 0.3s ease",
  } as SystemStyleObject,
  
  navLinks: {
    display: { base: "none", md: "flex" },
    gap: { base: 4, lg: 8 },
    alignItems: "center",
    justifyContent: "center",
    mt: { base: 0, md: 0 },
  } as SystemStyleObject,
  
  navLink: {
    fontWeight: "medium",
    fontSize: { base: "sm", md: "md" },
    color: "gray.700",
    position: "relative",
    py: 2,
    px: { base: 2, md: 3 },
    borderRadius: "md",
    transition: "all 0.3s ease",
    _hover: {
      color: "blue.500",
      bg: "blue.50",
    },
  } as SystemStyleObject,
  
  mobileMenuButton: {
    display: { base: "flex", md: "none" },
    alignItems: "center",
    justifyContent: "center",
    bg: "transparent",
    color: "blue.500",
    borderRadius: "full",
    _hover: {
      bg: "blue.50",
      transform: "rotate(180deg)",
      transition: "all 0.3s ease",
    },
    _active: {
      bg: "blue.100",
    },
  } as SystemStyleObject,
  
  mobileMenu: {
    display: { base: "flex", md: "none" },
    flexDirection: "column",
    width: "100%",
    bg: "white",
    borderRadius: "xl",
    boxShadow: "lg",
    p: 4,
    gap: 2,
    mt: 2,
    border: "1px solid",
    borderColor: "blue.100",
    backdropFilter: "blur(10px)",
  } as SystemStyleObject,
};