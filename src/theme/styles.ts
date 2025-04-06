export const styles = {
  global: {
    // Estilos base del cuerpo
    body: {
      backgroundColor: "gray.50",
      color: "gray.800",
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
    },
    
    // Estilos de enlaces
    a: {
      color: "brand.600",
      textDecoration: "none",
      transition: "all 0.2s ease-in-out",
      _hover: {
        textDecoration: "none",
        color: "brand.700",
      },
    },
    
    // Selección de texto
    "::selection": {
      backgroundColor: "brand.100",
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
    
    ".product-card": {
      animation: "cardEntrance 0.7s ease-out",
      animationFillMode: "backwards",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      borderRadius: "lg",
      border: "1px solid rgba(0, 0, 0, 0.05)",
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
      background: "linear-gradient(to bottom, rgba(255,255,255,0) 70%, rgba(255,255,255,0.8) 100%)",
      opacity: 0,
      transition: "opacity 0.3s ease",
      pointerEvents: "none",
      zIndex: 1,
    },
    
    ".product-card:hover": {
      transform: "translateY(-8px) scale(1.01)",
      boxShadow: "0 25px 35px -12px rgba(0, 0, 0, 0.18)",
    },
    
    ".product-card:hover::after": {
      opacity: 0.5,
    },
    
    ".product-card:hover .product-image-container img": {
      transform: "scale(1.08)",
    },
    
    ".product-card:hover .product-price": {
      animation: "priceHighlight 0.5s ease-in-out",
    },
    
    ".product-card:hover .add-to-cart-button": {
      transform: "translateY(-5px)",
      boxShadow: "md",
    },
    
    ".product-description": {
      transition: "all 0.3s ease",
      position: "relative",
      lineHeight: "1.5",
    },
    
    ".product-card:hover .product-description": {
      color: "gray.800",
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
      backgroundImage: "linear-gradient(to right, brand.500, secondary.500)",
      color: "transparent",
    },
    
    ".shadow-hover": {
      transition: "all 0.3s ease",
      _hover: {
        boxShadow: "elevated",
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
    
    ".add-to-cart-button": {
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
    },
    
    ".add-to-cart-button::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)",
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
  },
};
