import { SystemStyleObject } from '@chakra-ui/react';

// Hero section styles
export const heroStyles = {
  container: {
    as: "section",
    position: "relative",
    overflow: "hidden",
    mb: 10,
    height: { base: "auto", md: "600px" },
  } as SystemStyleObject,
  
  
  contentContainer: {
    maxW: "container.xl",
    position: "relative",
    zIndex: 3,
    height: "100%",
  } as SystemStyleObject,
  
  flexContainer: {
    direction: { base: 'column', lg: 'row' },
    align: "center",
    justify: "space-between",
    py: { base: 12, md: 16 },
    gap: { base: 8, lg: 4 },
    height: "100%",
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
    colorScheme: "whatsapp",
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
    maxW: { base: '100%', lg: '45%' },
    h: { base: '220px', md: '320px', lg: '380px' },
    position: "relative",
    rounded: "xl",
    overflow: "hidden",
    boxShadow: "xl",
    transform: { base: 'none', lg: 'rotate(2deg)' },
    transition: "all 0.5s ease",
    _hover: { 
      transform: 'rotate(0deg) scale(1.02)', 
      boxShadow: "dark-lg" 
    },
    border: "4px solid",
    borderColor: "whiteAlpha.400",
    bg: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  } as SystemStyleObject,
  
  // Features section styles
  featuresContainer: {
    mb: 12,
    mt: { base: 8, md: 0 },
  } as SystemStyleObject,
  
  featuresHeading: {
    as: "h2",
    textAlign: "center",
    fontSize: { base: "xl", md: "2xl" },
    mb: 6,
    color: "white",
    position: "relative",
    _before: {
      content: '""',
      position: "absolute",
      bottom: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "3px",
      bgGradient: "linear(to-r, white, whatsapp.500, white)",
      borderRadius: "full",
    },
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
  } as SystemStyleObject,
  
  featuresSubheading: {
    textAlign: "center",
    fontSize: { base: "sm", md: "md" },
    color: "whiteAlpha.900",
    maxW: "800px",
    mx: "auto",
    mb: 8,
    fontWeight: "medium",
    letterSpacing: "wide",
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
  } as SystemStyleObject,
  
  featuresFlexContainer: {
    bg: "white",
    rounded: "xl",
    p: { base: 4, md: 6 },
    justify: "space-between",
    direction: { base: 'column', md: 'row' },
    gap: 6,
    boxShadow: "xl",
    borderWidth: "1px",
    borderColor: "gray.100",
    overflow: "hidden",
    position: "relative",
    _before: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4px",
      bgGradient: "linear(to-r, blue.400, blue.600, blue.400)",
    },
  } as SystemStyleObject,
};

// Feature card styles by color
export const getFeatureCardStyles = (color: string) => {
  return {
    featureCard: {
      flex: 1,
      p: 4,
      borderRadius: "lg",
      bg: `${color}.50`,
      borderLeft: "4px solid",
      borderColor: `${color}.500`,
      transition: "all 0.3s ease",
      transform: "translateY(0)",
      _hover: {
        transform: "translateY(-8px)",
        boxShadow: "xl",
        bg: `${color}.100`,
      },
      role: "group",
    } as SystemStyleObject,
    
    featureIcon: {
      fontSize: "2xl",
      mr: 3,
      transition: "all 0.3s ease",
      _groupHover: { transform: "scale(1.2)" },
    } as SystemStyleObject,
    
    featureTitle: {
      as: "h3",
      fontSize: { base: "md", md: "lg" },
      fontWeight: "bold",
      color: `${color}.700`,
    } as SystemStyleObject,
    
    featureNumber: {
      bg: `${color}.100`,
      color: `${color}.700`,
      rounded: "full",
      w: 6,
      h: 6,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "xs",
      fontWeight: "bold",
      border: "1px solid",
      borderColor: `${color}.200`,
      opacity: 0.8,
      _groupHover: { opacity: 1 },
    } as SystemStyleObject,
    
    featureDescription: {
      color: "gray.600",
      fontSize: { base: "xs", md: "sm" },
      transition: "all 0.3s ease",
      _groupHover: { color: "gray.800" },
    } as SystemStyleObject,
  };
};

// Animation keyframes
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay: 0.2 }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay: 0.2 }
};

export const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } }
};