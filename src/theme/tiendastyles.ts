import { SystemStyleObject } from '@chakra-ui/react';

// Enhanced animation variants for product cards
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.99]
    } 
  }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    } 
  }
};

export const tiendaStyles = {
  container: {
    maxW: "container.xl",
    py: 8,
    px: { base: 4, md: 6 },
  } as SystemStyleObject,
  
  heading: {
    as: "h2",
    size: "xl",
    textAlign: "center",
    my: 8,
    fontWeight: "bold",
    bgGradient: "linear(to-r, blue.500, blue.700)",
    bgClip: "text",
    letterSpacing: "tight",
  } as SystemStyleObject,
  
  // Updated productGrid to match index.tsx style but with enhanced responsiveness
  productGrid: {
    gridGap: { base: 4, md: 6 },
    templateColumns: {
      base: "repeat(auto-fill, minmax(240px, 1fr))",
      sm: "repeat(auto-fill, minmax(240px, 1fr))",
      md: "repeat(auto-fill, minmax(260px, 1fr))",
      lg: "repeat(auto-fill, minmax(280px, 1fr))",
      xl: "repeat(auto-fill, minmax(300px, 1fr))"
    },
    mb: 10,
    width: "100%",
  } as SystemStyleObject,
  
  productCard: {
    bg: "white",
    borderRadius: "md",
    boxShadow: "md",
    overflow: "hidden",
    transition: "all 0.3s ease",
    _hover: { 
      transform: "translateY(-5px)", 
      boxShadow: "lg",
      "& .product-image": {
        transform: "scale(1.05)",
      }
    },
    position: "relative",
    p: 4,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    spacing: 3,
  } as SystemStyleObject,
  
  productImageContainer: {
    position: "relative",
    height: "150px",
    width: "100%",
    borderRadius: "md",
    overflow: "hidden",
    mb: 3,
  } as SystemStyleObject,
  
  productContent: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    spacing: 1,
  } as SystemStyleObject,
  
  productTitle: {
    fontSize: "md",
    fontWeight: "500",
    color: "gray.800",
    mb: 1,
    lineHeight: "tight",
    noOfLines: 2,
  } as SystemStyleObject,
  
  productDescription: {
    fontSize: "sm",
    color: "gray.600",
    noOfLines: 2,
    mb: 2,
  } as SystemStyleObject,
  
  productPrice: {
    fontSize: "lg",
    fontWeight: "700",
    color: "blue.600",
  } as SystemStyleObject,
  
  addToCartButton: {
    mt: "auto",
    colorScheme: "blue",
    size: "md",
    fontWeight: "bold",
    borderRadius: "full",
    boxShadow: "sm",
    _hover: { 
      transform: "scale(1.05)",
      boxShadow: "md",
      bg: "blue.500",
    },
    _active: {
      transform: "scale(0.95)",
      bg: "blue.700",
    },
    transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
  } as SystemStyleObject,
  
  badgeContainer: {
    position: "absolute",
    top: 3,
    right: 3,
    zIndex: 2,
  } as SystemStyleObject,
  
  badge: {
    bg: "red.500",
    color: "white",
    fontWeight: "bold",
    borderRadius: "full",
    px: 3,
    py: 1,
    fontSize: "xs",
    textTransform: "uppercase",
    boxShadow: "md",
  } as SystemStyleObject,
  
  filterContainer: {
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    alignItems: { base: "flex-start", md: "center" },
    mb: 6,
    p: 4,
    bg: "white",
    borderRadius: "lg",
    boxShadow: "sm",
  } as SystemStyleObject,
  
  emptyCartMessage: {
    textAlign: "center",
    p: 8,
    bg: "gray.50",
    borderRadius: "lg",
    color: "gray.600",
    fontSize: "lg",
  } as SystemStyleObject,
  
  // Added divider style to match index.tsx
  divider: {
    mb: 8,
    borderColor: "blue.200",
  } as SystemStyleObject,
  
  // Added stack style to match index.tsx
  stack: {
    spacing: 6,
    width: "100%",
  } as SystemStyleObject,
};