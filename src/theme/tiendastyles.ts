import { SystemStyleObject } from '@chakra-ui/react';

// Enhanced animation variants for product cards
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: (custom: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.6, 0.05, 0.01, 0.99]
    } 
  })
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

// New animation for hover effect
export const hoverScale = {
  scale: 1.05,
  y: -10,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: { 
    duration: 0.3,
    ease: "easeOut"
  }
};

export const tiendaStyles = {
  container: {
    maxW: "container.xl",
    py: { base: 8, md: 12 },
    px: { base: 4, md: 6 },
    bg: "gray.50",
    borderRadius: "xl",
    boxShadow: "sm",
    width: "100%",
    mx: "auto",
    overflow: "hidden", // Prevent any overflow issues
  } as SystemStyleObject,
  
  heading: {
    textAlign: "center",
    fontWeight: "extrabold",
    bgGradient: "linear(to-r, blue.500, blue.700)",
    bgClip: "text",
    letterSpacing: "tight",
    mb: 6,
    position: "relative",
    _after: {
      content: '""',
      display: "block",
      width: "60px",
      height: "4px",
      bgGradient: "linear(to-r, blue.500, blue.700)",
      borderRadius: "full",
      mx: "auto",
      mt: 2
    }
  } as SystemStyleObject,
  
  divider: {
    borderWidth: "1px",
    borderColor: "blue.100",
    width: "100%",
    mb: 8,
    opacity: 0.6
  } as SystemStyleObject,
  
  productGrid: {
    display: "grid",
    gridGap: { base: 4, sm: 5, md: 6, lg: 8 },
    gridTemplateColumns: {
      base: "repeat(1, 1fr)",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(4, 1fr)",
      xl: "repeat(5, 1fr)"
    },
    mb: 10,
    width: "100%",
    px: { base: 2, md: 0 },
    mx: "auto",
  } as SystemStyleObject,
  
  productCard: {
    bg: "white",
    borderRadius: "lg",
    boxShadow: "md",
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    position: "relative",
    p: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    transform: "translateZ(0)",
    backfaceVisibility: "hidden",
    _hover: { 
      transform: "translateY(-8px)",
      boxShadow: "xl",
      "& .product-image": {
        transform: "scale(1.08)",
      },
      "& .product-title": {
        color: "blue.600",
      },
      "& .add-to-cart-button": {
        bg: "blue.500",
        transform: "translateY(-2px)"
      },
      "& .product-price": {
        transform: "scale(1.05)",
      }
    },
  } as SystemStyleObject,
  
  productImageContainer: {
    position: "relative",
    height: { base: "160px", sm: "180px", md: "200px" },
    width: "100%",
    overflow: "hidden",
    borderTopLeftRadius: "lg",
    borderTopRightRadius: "lg",
    bg: "gray.100",
  } as SystemStyleObject,
  
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bg: "blackAlpha.50",
    opacity: 0,
    transition: "opacity 0.3s ease",
    _groupHover: {
      opacity: 1
    }
  } as SystemStyleObject,
  
  productContent: {
    p: { base: 3, md: 4 },
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  } as SystemStyleObject,
  
  productTitle: {
    fontSize: { base: "md", md: "lg" },
    fontWeight: "600",
    color: "gray.800",
    lineHeight: "tight",
    noOfLines: 2,
    transition: "color 0.3s ease",
    mb: 1,
  } as SystemStyleObject,
  
  productDescription: {
    fontSize: { base: "xs", md: "sm" },
    color: "gray.600",
    noOfLines: 2,
    mb: 2,
    transition: "color 0.3s ease",
    _groupHover: {
      color: "gray.700"
    }
  } as SystemStyleObject,
  
  productPrice: {
    fontSize: { base: "lg", md: "xl" },
    fontWeight: "700",
    color: "blue.600",
    transition: "transform 0.3s ease",
  } as SystemStyleObject,
  
  addToCartButton: {
    mt: 3,
    colorScheme: "blue",
    size: { base: "sm", md: "md" },
    fontWeight: "bold",
    borderRadius: "full",
    boxShadow: "sm",
    transition: "all 0.3s ease",
    bg: "blue.600",
    width: "100%",
    _hover: { 
      transform: "translateY(-2px)",
      boxShadow: "md",
      bg: "blue.500",
    },
    _active: {
      transform: "scale(0.95)",
      bg: "blue.700",
    },
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
  
  stack: {
    spacing: 6,
    width: "100%",
  } as SystemStyleObject,
  
  // New styles for better grid layout
  productRating: {
    display: "flex",
    alignItems: "center",
    mt: 1,
    mb: 2,
  } as SystemStyleObject,
  
  productActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    mt: "auto",
  } as SystemStyleObject,
  
  // Responsive container for filters
  filtersContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: { base: 2, md: 4 },
    mb: 6,
    p: { base: 3, md: 4 },
    bg: "white",
    borderRadius: "lg",
    boxShadow: "sm",
    alignItems: "center",
    justifyContent: { base: "center", md: "space-between" },
  } as SystemStyleObject,
  
  // Grid container with animation
  animatedGrid: {
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  } as SystemStyleObject,
};