import { SystemStyleObject } from '@chakra-ui/react';

// Hero section styles
export const heroStyles = {
  container: {
    as: "section",
    position: "relative",
    overflow: "hidden",
    mb: 10,
  } as SystemStyleObject,
  
  backgroundGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bgGradient: "linear(to-r, brand.700, brand.500, brand.600)",
    opacity: 0.92,
    zIndex: 1,
  } as SystemStyleObject,
  
  backgroundPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "url('/images/pattern.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "50px",
    opacity: 0.08,
    zIndex: 2,
  } as SystemStyleObject,
  
  contentContainer: {
    maxW: "container.xl",
    position: "relative",
    zIndex: 3,
  } as SystemStyleObject,
  
  flexContainer: {
    direction: { base: 'column', lg: 'row' },
    align: "center",
    justify: "space-between",
    py: { base: 12, md: 16 },
    gap: { base: 8, lg: 4 },
  } as SystemStyleObject,
  
  textContainer: {
    align: { base: 'center', lg: 'flex-start' },
    spacing: 6,
    maxW: { base: '100%', lg: '50%' },
    textAlign: { base: 'center', lg: 'left' },
  } as SystemStyleObject,
  
  heading: {
    as: "h1",
    fontSize: { base: '3xl', md: '4xl', lg: '5xl' },
    fontWeight: "extrabold",
    color: "white",
    lineHeight: "shorter",
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    letterSpacing: "tight",
  } as SystemStyleObject,
  
  subheading: {
    fontSize: { base: 'md', md: 'lg' },
    color: "whiteAlpha.900",
    maxW: "600px",
    fontWeight: "medium",
  } as SystemStyleObject,
  
  buttonContainer: {
    gap: 4,
    direction: { base: 'column', sm: 'row' },
    w: { base: '100%', sm: 'auto' },
  } as SystemStyleObject,
  
  primaryButton: {
    size: "lg",
    colorScheme: "whatsapp",
    rounded: "md",
    px: 8,
    fontWeight: "bold",
    _hover: {
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    transition: "all 0.3s ease",
  } as SystemStyleObject,
  
  secondaryButton: {
    as: "a",
    size: "lg",
    colorScheme: "white",
    variant: "outline",
    rounded: "md",
    px: 8,
    fontWeight: "medium",
    _hover: {
      bg: 'whiteAlpha.200',
      transform: 'translateY(-2px)',
    },
    transition: "all 0.3s ease",
  } as SystemStyleObject,
  
  imageContainer: {
    maxW: { base: '100%', lg: '50%' },
    position: "relative",
    rounded: "xl",
    overflow: "hidden",
    boxShadow: "elevated",
    transform: { base: 'none', lg: 'rotate(2deg)' },
    transition: "transform 0.3s ease",
    _hover: { transform: 'rotate(0deg) scale(1.02)' },
    border: "4px solid",
    borderColor: "whiteAlpha.300",
  } as SystemStyleObject,
  
  // Features section styles
  featuresContainer: {
    mb: 12,
  } as SystemStyleObject,
  
  featuresHeading: {
    as: "h2",
    textAlign: "center",
    fontSize: { base: "xl", md: "2xl" },
    mb: 6,
    color: "brand.700",
    position: "relative",
    _before: {
      content: '""',
      position: "absolute",
      bottom: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "3px",
      bgGradient: "linear(to-r, brand.400, whatsapp.500, brand.600)",
      borderRadius: "full",
    },
  } as SystemStyleObject,
  
  featuresSubheading: {
    textAlign: "center",
    fontSize: { base: "sm", md: "md" },
    color: "gray.700",
    maxW: "800px",
    mx: "auto",
    mb: 8,
    fontWeight: "medium",
    bgGradient: "linear(to-r, gray.700, brand.700, gray.700)",
    bgClip: "text",
  } as SystemStyleObject,
  
  featuresFlexContainer: {
    bg: "white",
    rounded: "xl",
    p: { base: 4, md: 6 },
    justify: "space-between",
    direction: { base: 'column', md: 'row' },
    gap: 6,
    boxShadow: "card",
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
      bgGradient: "linear(to-r, brand.400, brand.600, brand.400)",
    },
  } as SystemStyleObject,
};

// Feature card styles by color
export const getFeatureCardStyles = (color: string) => ({
  featureCard: {
    flex: 1,
    p: 4,
    borderRadius: "lg",
    bg: `${color}.50`,
    borderLeft: "thick",
    borderColor: `${color}.500`,
    transition: "all 0.3s ease",
    transform: "translateY(0)",
    _hover: {
      transform: "translateY(-8px)",
      boxShadow: "elevated",
      bg: `${color}.100`,
    },
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
});