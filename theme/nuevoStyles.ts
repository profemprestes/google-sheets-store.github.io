export const nuevoStyles = {
  // Hero section styles
  hero: {
    container: {
      position: "relative" as const,
      mb: 8,
      borderRadius: "xl",
      overflow: "hidden",
      boxShadow: "xl",
      height: { base: "250px", md: "300px", lg: "350px" },
      transition: "all 0.3s ease",
      _hover: {
        boxShadow: "2xl",
      }
    },
    gradient: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      bgGradient: "linear(to-r, primary.700, primary.500, primary.400)",
      opacity: 0.95,
      zIndex: 1,
      transition: "opacity 0.5s ease",
      _groupHover: {
        opacity: 0.9
      }
    },
    pattern: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "url('/hero-pattern.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.15,
      zIndex: 0,
      filter: "blur(1px)",
      transform: "scale(1.05)",
      animation: "patternFloat 15s ease-in-out infinite alternate"
    },
    particles: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2,
      pointerEvents: "none" as const
    },
    particle: {
      position: "absolute" as const,
      width: { base: "15px", md: "25px" },
      height: { base: "15px", md: "25px" },
      borderRadius: "full",
      background: "rgba(255, 255, 255, 0.15)",
      top: "20%",
      animation: "particleFloat 10s ease-in-out infinite",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)"
    },
    content: {
      position: "relative" as const,
      zIndex: 3,
      height: "100%",
      direction: "column",
      justify: "center",
      align: { base: "center", md: "flex-start" },
      px: { base: 6, md: 12 },
      textAlign: { base: "center", md: "left" } as const,
      role: "group"
    },
    title: {
      fontSize: { base: "3xl", md: "4xl", lg: "5xl" },
      fontWeight: "extrabold",
      color: "white",
      mb: 3,
      textShadow: "0 2px 10px rgba(0,0,0,0.3)",
      letterSpacing: "wide",
      animation: "fadeInUp 0.8s ease-out",
      transform: "translateY(0)",
      transition: "transform 0.3s ease",
      _groupHover: {
        transform: "translateY(-3px)"
      }
    },
    subtitle: {
      fontSize: { base: "md", md: "lg", lg: "xl" },
      color: "whiteAlpha.900",
      maxW: "550px",
      mb: 5,
      textShadow: "0 1px 3px rgba(0,0,0,0.3)",
      animation: "fadeInUp 0.8s ease-out 0.2s both",
      lineHeight: "tall",
      fontWeight: "medium",
      transition: "transform 0.3s ease",
      _groupHover: {
        transform: "translateY(-2px)"
      }
    },
    buttonContainer: {
      gap: 5,
      flexWrap: "wrap",
      justify: { base: "center", md: "flex-start" } as const,
      animation: "fadeInUp 0.8s ease-out 0.4s both"
    },
    primaryButton: {
      colorScheme: "white",
      variant: "solid",
      size: { base: "md", md: "lg" },
      fontWeight: "bold",
      px: 6,
      py: { base: 5, md: 6 },
      borderRadius: "full",
      boxShadow: "md",
      bg: "white",
      color: "primary.600",
      _hover: { 
        transform: "translateY(-4px)", 
        boxShadow: "xl",
        bg: "white",
        "& .button-icon": {
          transform: "scale(1.2) rotate(-10deg)"
        }
      },
      _active: {
        transform: "translateY(-1px)",
        boxShadow: "md",
        bg: "whiteAlpha.900"
      },
      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      position: "relative" as const,
      overflow: "hidden",
      _before: {
        content: '""',
        position: "absolute" as const,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.8), rgba(255,255,255,0) 70%)",
        transform: "translateX(-100%)",
        animation: "shine 3s infinite"
      }
    },
    secondaryButton: {
      colorScheme: "whiteAlpha",
      variant: "outline",
      size: { base: "md", md: "lg" },
      fontWeight: "bold",
      px: 6,
      py: { base: 5, md: 6 },
      borderRadius: "full",
      borderWidth: "2px",
      borderColor: "whiteAlpha.800",
      color: "white",
      _hover: { 
        bg: "whiteAlpha.200",
        transform: "translateY(-4px)",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        borderColor: "white",
        "& .button-icon": {
          transform: "scale(1.2) rotate(10deg)"
        }
      },
      _active: {
        transform: "translateY(-1px)",
        boxShadow: "sm",
        bg: "whiteAlpha.300"
      },
      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      backdropFilter: "blur(8px)"
    },
    decorativeShape1: {
      position: "absolute" as const,
      width: { base: "100px", md: "150px" },
      height: { base: "100px", md: "150px" },
      borderRadius: "full",
      background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.1)",
      top: { base: "-50px", md: "-75px" },
      left: { base: "-50px", md: "-75px" },
      zIndex: 2,
      animation: "pulse 8s infinite alternate"
    },
    decorativeShape2: {
      position: "absolute" as const,
      width: { base: "80px", md: "120px" },
      height: { base: "80px", md: "120px" },
      borderRadius: "full",
      background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.1)",
      bottom: { base: "-40px", md: "-60px" },
      left: { base: "30%", md: "40%" },
      zIndex: 2,
      animation: "pulse 6s infinite alternate-reverse"
    },
    imageContainer: {
      position: "absolute" as const,
      right: { base: "-80px", md: "30px" },
      bottom: { base: "-30px", md: "-10px" },
      width: { base: "200px", md: "250px", lg: "300px" },
      height: { base: "200px", md: "250px", lg: "300px" },
      zIndex: 3,
      opacity: { base: 0.7, md: 1 },
      transform: { base: "rotate(5deg)", md: "rotate(0deg)" },
      display: { base: "none", sm: "block" },
      transition: "all 0.5s ease",
      animation: "float 6s ease-in-out infinite",
      filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.2))"
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      transition: "transform 0.5s ease",
      _hover: {
        transform: "scale(1.05) rotate(-5deg)"
      }
    }
  },
  
  // Category filter styles
  categoryFilter: {
    container: {
      mb: 6,
      mt: 4,
      px: 4,
      py: 3,
      borderRadius: "lg",
      boxShadow: "sm",
      bg: "white",
      overflowX: "auto"
    },
    buttonContainer: {
      wrap: "nowrap",
      gap: 3,
      justifyContent: { base: "flex-start", md: "center" },
      width: "100%"
    },
    allButton: {
      size: "sm",
      colorScheme: "gray",
      variant: "outline",
      borderRadius: "full",
      _hover: { bg: "gray.100" },
      minW: "max-content"
    },
    categoryButton: {
      size: "sm",
      colorScheme: "primary",
      borderRadius: "full",
      _hover: { transform: "translateY(-2px)" },
      transition: "all 0.2s",
      minW: "max-content"
    }
  },
  
  // Product grid styles
  productGrid: {
    container: {
      spacing: 6
    },
    grid: {
      gridGap: 6,
      templateColumns: "repeat(auto-fill, minmax(280px,1fr))"
    },
    productCard: {
      backgroundColor: "white",
      borderRadius: "lg",
      padding: 4,
      spacing: 3,
      boxShadow: "md",
      transition: "all 0.3s ease",
      _hover: {
        transform: "translateY(-5px)",
        boxShadow: "lg"
      },
      position: "relative" as const,
      overflow: "hidden"
    },
    badge: {
      position: "absolute" as const,
      top: 2,
      right: 2,
      colorScheme: "red",
      borderRadius: "full",
      px: 2
    },
    imageContainer: {
      position: "relative" as const,
      height: "200px",
      overflow: "hidden",
      borderRadius: "md"
    },
    image: {
      borderRadius: "md",
      height: "100%",
      width: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
      _hover: { transform: "scale(1.05)" }
    },
    title: {
      fontWeight: "bold",
      fontSize: "lg",
      noOfLines: 1
    },
    description: {
      color: "gray.600",
      fontSize: "sm",
      noOfLines: 2,
      height: "40px"
    },
    price: {
      color: "green.500",
      fontSize: "xl",
      fontWeight: "700"
    },
    addButton: {
      colorScheme: "primary",
      size: "md",
      borderRadius: "full",
      _hover: {
        transform: "scale(1.05)"
      },
      transition: "all 0.2s ease"
    }
  },
  
  // Cart sticky bar
  cartBar: {
    container: {
      position: "sticky" as const,
      justifyContent: "center",
      bottom: 4,
      padding: 4,
      backgroundColor: "rgba(56, 175, 82, 0.8)",
      backdropFilter: "blur(8px)",
      borderRadius: "lg",
      boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)",
      width: "100%",
      zIndex: 10,
      gap: 4
    },
    viewCartButton: {
      colorScheme: "blue",
      size: "lg",
      fontWeight: "bold",
      px: 6,
      py: 6,
      _hover: {
        transform: 'translateY(-2px)',
        boxShadow: 'lg'
      },
      _active: {
        transform: 'translateY(0)'
      },
      transition: "all 0.2s ease-in-out"
    }
  }
};