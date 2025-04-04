import { SystemStyleObject } from '@chakra-ui/react';

// Animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7,
      ease: [0.6, 0.05, 0.01, 0.99]
    } 
  }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: 60 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.99]
    } 
  }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4
    }
  }
};

// New pulse animation for step numbers
export const pulseAnimation = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// New hover animation for feature cards
export const featureHoverAnimation = {
  rest: { 
    y: 0,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: { 
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

// Hero section styles
export const heroStyles = {
  container: {
    as: "section",
    position: "relative",
    width: "100%",
    height: { base: "auto", md: "auto" },
    minHeight: { base: "900px", md: "800px" },
    maxHeight: { base: "none", md: "1200px" },
    overflow: "hidden",
    mb: { base: 10, md: 16 },
  } as SystemStyleObject,
  
  // Add modern gradient background styles
  gradientBackground: {
    bg: "#0d0c22", // Dark base color
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "100%",
    _before: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      bgGradient: "linear(to-br, rgba(49,151,149,0.1), rgba(66,153,225,0.1), rgba(159,122,234,0.1))",
      zIndex: 0,
    },
    _after: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      backgroundSize: "cover",
      opacity: 0.1,
      zIndex: 0,
    }
  } as SystemStyleObject,
  
  contentContainer: {
    position: "relative",
    zIndex: 2,
    maxW: "container.xl",
    py: { base: 12, md: 16 },
    px: { base: 4, md: 6 },
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  } as SystemStyleObject,
  
  flexContainer: {
    direction: { base: "column", lg: "row" },
    align: "center",
    justify: "space-between",
    width: "100%",
    gap: { base: 8, md: 10 },
    mb: { base: 10, md: 16 },
  } as SystemStyleObject,
  
  textContainer: {
    spacing: { base: 4, md: 6 },
    align: { base: 'center', lg: 'flex-start' },
    maxW: { base: '100%', md: '90%', lg: '50%' },
    textAlign: { base: 'center', lg: 'left' },
    p: { base: 2, md: 0 },
    mb: { base: 6, md: 0 },
  } as SystemStyleObject,
  
  heading: {
    as: "h1",
    fontSize: { base: '2xl', md: '4xl', lg: '5xl' },
    fontWeight: "extrabold",
    color: "white",
    lineHeight: { base: "1.2", md: "shorter" },
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
    letterSpacing: "tight",
    maxW: { base: "100%", lg: "90%" },
  } as SystemStyleObject,
  
  subheading: {
    fontSize: { base: 'sm', md: 'md', lg: 'lg' },
    color: "whiteAlpha.900",
    maxW: { base: "100%", md: "90%", lg: "600px" },
    fontWeight: "medium",
    textShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
    lineHeight: { base: "1.6", md: "1.8" },
  } as SystemStyleObject,
  
  buttonContainer: {
    gap: { base: 3, md: 4 },
    direction: { base: 'column', sm: 'row' },
    w: { base: '100%', sm: 'auto' },
    mt: { base: 2, md: 4 },
    justifyContent: { base: 'center', lg: 'flex-start' },
  } as SystemStyleObject,
  
  primaryButton: {
    size: { base: "md", md: "lg" },
    colorScheme: "blue",
    rounded: "md",
    px: { base: 6, md: 8 },
    py: { base: 5, md: 6 },
    fontWeight: "bold",
    w: { base: "full", sm: "auto" },
    _hover: {
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    transition: "all 0.3s ease",
  } as SystemStyleObject,
  
  secondaryButton: {
    as: "a",
    size: { base: "md", md: "lg" },
    colorScheme: "teal",
    variant: "outline",
    rounded: "md",
    px: { base: 6, md: 8 },
    py: { base: 5, md: 6 },
    fontWeight: "medium",
    color: "white",
    borderColor: "teal.300",
    borderWidth: "2px",
    w: { base: "full", sm: "auto" },
    _hover: {
      bg: 'teal.500',
      transform: 'translateY(-2px)',
      color: 'white',
      borderColor: 'teal.300',
    },
    transition: "all 0.3s ease",
  } as SystemStyleObject,
  
  imageContainer: {
    width: { base: "100%", md: "90%", lg: "45%" },
    height: { base: "300px", md: "400px" },
    position: "relative",
    borderRadius: "xl",
    overflow: "hidden",
    boxShadow: "xl",
    transform: "rotate(-2deg)",
    transition: "all 0.5s ease",
  } as SystemStyleObject,
  
  featuresContainer: {
    width: "100%",
    mt: { base: 8, md: 16 },
    p: { base: 4, md: 8 },
    borderRadius: "xl",
    bg: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(8px)",
    boxShadow: "xl",
  } as SystemStyleObject,
  
  featuresHeading: {
    fontSize: { base: "xl", md: "2xl", lg: "3xl" },
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    mb: 2,
    textShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
  } as SystemStyleObject,
  
  featuresSubheading: {
    fontSize: { base: "sm", md: "md" },
    color: "whiteAlpha.800",
    textAlign: "center",
    mb: { base: 6, md: 8 },
    maxW: "700px",
    mx: "auto",
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
  } as SystemStyleObject,
  
  featuresFlexContainer: {
    direction: { base: "column", md: "row" },
    justify: "space-between",
    align: "stretch",
    gap: { base: 4, md: 6 },
    width: "100%",
  } as SystemStyleObject,
};

// Feature card styles generator
export const getFeatureCardStyles = (color: string) => {
  const colorMap: Record<string, any> = {
    blue: {
      bg: "blue.500",
      hover: "blue.600",
      shadow: "rgba(66, 153, 225, 0.5)",
      gradient: "linear(to-r, blue.400, blue.600)",
    },
    green: {
      bg: "green.500",
      hover: "green.600",
      shadow: "rgba(72, 187, 120, 0.5)",
      gradient: "linear(to-r, green.400, green.600)",
    },
    purple: {
      bg: "purple.500",
      hover: "purple.600",
      shadow: "rgba(159, 122, 234, 0.5)",
      gradient: "linear(to-r, purple.400, purple.600)",
    },
    red: {
      bg: "red.500",
      hover: "red.600",
      shadow: "rgba(245, 101, 101, 0.5)",
      gradient: "linear(to-r, red.400, red.600)",
    },
    orange: {
      bg: "orange.500",
      hover: "orange.600",
      shadow: "rgba(237, 137, 54, 0.5)",
      gradient: "linear(to-r, orange.400, orange.600)",
    },
  };

  const colorStyle = colorMap[color] || colorMap.blue;

  return {
    featureCard: {
      p: { base: 5, md: 7 },
      borderRadius: "xl",
      bg: "rgba(255, 255, 255, 0.08)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
      flex: "1",
      border: "1px solid",
      borderColor: "whiteAlpha.200",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      position: "relative",
      overflow: "hidden",
      _before: {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "5px",
        bgGradient: colorStyle.gradient,
      },
      _hover: {
        transform: "translateY(-10px)",
        boxShadow: `0 15px 30px ${colorStyle.shadow}`,
        borderColor: `${color}.300`,
        bg: "rgba(255, 255, 255, 0.12)",
      },
    } as SystemStyleObject,
    
    featureIcon: {
      fontSize: { base: "3xl", md: "4xl" },
      p: 4,
      borderRadius: "full",
      bgGradient: colorStyle.gradient,
      color: "white",
      mr: 4,
      boxShadow: `0 0 20px ${colorStyle.shadow}`,
      transition: "all 0.4s ease",
    } as SystemStyleObject,
    
    featureTitle: {
      fontSize: { base: "lg", md: "xl" },
      fontWeight: "bold",
      color: "white",
      textShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
      letterSpacing: "tight",
    } as SystemStyleObject,
    
    featureDescription: {
      fontSize: { base: "sm", md: "md" },
      color: "whiteAlpha.900",
      mt: 3,
      textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      lineHeight: "taller",
    } as SystemStyleObject,
    
    featureNumber: {
      fontSize: { base: "2xl", md: "3xl" },
      fontWeight: "extrabold",
      bgGradient: colorStyle.gradient,
      bgClip: "text",
      opacity: 0.9,
      textShadow: `0 0 15px ${colorStyle.shadow}`,
    } as SystemStyleObject,
  };
};