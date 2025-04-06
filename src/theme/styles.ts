import { StyleFunctionProps } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props: StyleFunctionProps) => ({
    // Estilos base del cuerpo
    body: {
      backgroundColor: props.colorMode === "dark" ? "gray.900" : "gray.50",
      color: props.colorMode === "dark" ? "white" : "gray.800",
      fontSize: "16px",
      lineHeight: "tall",
      transition: "background-color 0.3s ease",
    },
    
    // Estilos de encabezados
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "heading",
      fontWeight: "bold",
      lineHeight: "shorter",
      marginBottom: "0.5em",
      position: "relative",
      color: props.colorMode === "dark" ? "white" : "gray.800",
    },
    
    // Estilos de enlaces
    a: {
      color: props.colorMode === "dark" ? "brand.300" : "brand.600",
      textDecoration: "none",
      transition: "all 0.2s ease-in-out",
      _hover: {
        textDecoration: "none",
        color: props.colorMode === "dark" ? "brand.200" : "brand.700",
      },
    },
    
    // Selección de texto
    "::selection": {
      backgroundColor: props.colorMode === "dark" ? "brand.700" : "brand.100",
      color: props.colorMode === "dark" ? "white" : "brand.900",
    },
    
    // Contenedores y secciones básicas
    "section": {
      marginBottom: "2rem",
    },
    
    // Animaciones globales
    "@keyframes fadeIn": {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    
    "@keyframes pulse": {
      "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.4)" },
      "70%": { boxShadow: "0 0 0 10px rgba(37, 211, 102, 0)" },
      "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
    },
    
    "@keyframes float": {
      "0%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-10px)" },
      "100%": { transform: "translateY(0px)" },
    },
    
    "@keyframes shake": {
      "0%": { transform: "rotate(0deg)" },
      "25%": { transform: "rotate(5deg)" },
      "50%": { transform: "rotate(0eg)" },
      "75%": { transform: "rotate(-5deg)" },
      "100%": { transform: "rotate(0deg)" },
    },
    
    // Enhanced product grid animations
    "@keyframes cardEntrance": {
      "from": { 
        opacity: 0,
        transform: "translateY(20px) scale(0.95)",
        filter: "blur(5px)"
      },
      "to": { 
        opacity: 1,
        transform: "translateY(0) scale(1)",
        filter: "blur(0)"
      }
    },
    
    "@keyframes cardHover": {
      "0%": { transform: "translateY(0)" },
      "100%": { transform: "translateY(-8px)" }
    },
    
    "@keyframes cardShadow": {
      "0%": { boxShadow: "card" },
      "100%": { boxShadow: "0 25px 35px -12px rgba(0, 0, 0, 0.18)" }
    },
    
    "@keyframes priceHighlight": {
      "0%": { transform: "scale(1)" },
      "50%": { transform: "scale(1.1)" },
      "100%": { transform: "scale(1)" }
    },
    
    "@keyframes descriptionFadeIn": {
      "from": { opacity: 0.7, height: "40px" },
      "to": { opacity: 1, height: "60px" }
    },
    
    // Product card specific styles with dark mode support
    ".product-card": {
      animation: "cardEntrance 0.7s ease-out",
      animationFillMode: "backwards",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      borderRadius: "lg",
      border: props.colorMode === "dark" ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
      backgroundColor: props.colorMode === "dark" ? "gray.800" : "white",
      transformOrigin: "center bottom",
      backfaceVisibility: "hidden",
      willChange: "transform, box-shadow",
    },
    
    ".product-card::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: props.colorMode === "dark" 
        ? "linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.3) 100%)" 
        : "linear-gradient(to bottom, rgba(255,255,255,0) 70%, rgba(255,255,255,0.8) 100%)",
      opacity: 0,
      transition: "opacity 0.3s ease",
      pointerEvents: "none",
      zIndex: 1,
    },
    
    ".product-card:hover": {
      transform: "translateY(-8px) scale(1.01)",
      boxShadow: props.colorMode === "dark" 
        ? "0 25px 35px -12px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(66, 153, 225, 0.3)" 
        : "0 25px 35px -12px rgba(0, 0, 0, 0.18)",
    },
    
    ".product-card:hover::after": {
      opacity: 0.5,
    },
    
    ".product-card:hover .product-image-container img": {
      transform: "scale(1.08)",
    },
    
    ".product-card:hover .product-price": {
      animation: "priceHighlight 0.5s ease-in-out",
      color: props.colorMode === "dark" ? "blue.300" : "blue.600",
    },
    
    ".product-description": {
      transition: "all 0.3s ease",
      position: "relative",
      lineHeight: "1.5",
      color: props.colorMode === "dark" ? "gray.400" : "gray.600",
    },
    
    ".product-card:hover .product-description": {
      color: props.colorMode === "dark" ? "gray.300" : "gray.800",
      animation: "descriptionFadeIn 0.4s ease forwards",
    },
    
    // Staggered animation for product cards
    ".product-card:nth-child(1)": { animationDelay: "0.1s" },
    ".product-card:nth-child(2)": { animationDelay: "0.15s" },
    ".product-card:nth-child(3)": { animationDelay: "0.2s" },
    ".product-card:nth-child(4)": { animationDelay: "0.25s" },
    ".product-card:nth-child(5)": { animationDelay: "0.3s" },
    ".product-card:nth-child(6)": { animationDelay: "0.35s" },
    ".product-card:nth-child(7)": { animationDelay: "0.4s" },
    ".product-card:nth-child(8)": { animationDelay: "0.45s" },
    ".product-card:nth-child(9)": { animationDelay: "0.5s" },
    ".product-card:nth-child(10)": { animationDelay: "0.55s" },
    
    // Button styles with dark mode support
    ".add-to-cart-button": {
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
      backgroundColor: props.colorMode === "dark" ? "brand.600" : "brand.500",
      color: "white",
    },
    
    ".add-to-cart-button:hover": {
      transform: "translateY(-5px)",
      boxShadow: props.colorMode === "dark" ? "0 8px 20px rgba(25, 118, 210, 0.3)" : "md",
      backgroundColor: props.colorMode === "dark" ? "brand.500" : "brand.600",
    },
    
    ".add-to-cart-button::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: props.colorMode === "dark"
        ? "linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)"
        : "linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)",
      transform: "translateX(-100%)",
    },
    
    ".add-to-cart-button:hover::before": {
      animation: "buttonShine 0.8s ease",
    },
    
    ".add-to-cart-button:hover .cart-icon": {
      animation: "cartBounce 0.5s ease",
    },
    
    ".add-to-cart-button:active": {
      transform: "scale(0.95) translateY(0)",
    },
    
    // Clases de utilidad
    ".container": {
      width: "100%",
      maxWidth: "1200px",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
    
    ".text-gradient": {
      backgroundClip: "text",
      backgroundImage: props.colorMode === "dark" 
        ? "linear-gradient(to right, brand.300, secondary.300)" 
        : "linear-gradient(to right, brand.500, secondary.500)",
      color: "transparent",
    },
    
    ".shadow-hover": {
      transition: "all 0.3s ease",
      _hover: {
        boxShadow: props.colorMode === "dark" ? "0 0 20px -5px rgba(66, 153, 225, 0.3)" : "elevated",
        transform: "translateY(-5px)",
      },
    },
    
    ".fade-in": {
      opacity: 0,
      animation: "fadeIn 0.5s ease-in forwards",
    },
    
    ".pulse-button": {
      animation: "pulse 2s infinite",
    },
    
    ".float": {
      animation: "float 3s ease-in-out infinite",
    },
    
    ".shake": {
      animation: "shake 0.5s ease-in-out",
    },
    
    "@keyframes buttonShine": {
      "0%": { transform: "translateX(-100%)" },
      "100%": { transform: "translateX(100%)" }
    },
    
    "@keyframes cartBounce": {
      "0%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-3px)" },
      "100%": { transform: "translateY(0)" }
    },
  }),
};
