export const styles = {
  global: {
    body: {
      backgroundColor: "gray.50",
      color: "gray.800",
      fontSize: "16px",
      lineHeight: "tall",
      transition: "background-color 0.3s ease",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "heading",
      fontWeight: "bold",
      lineHeight: "shorter",
      marginBottom: "0.5em",
      position: "relative",
      _after: {
        content: '""',
        display: "block",
        width: "40px",
        height: "3px",
        backgroundColor: "primary.500",
        marginTop: "0.2em",
        borderRadius: "full",
      },
    },
    a: {
      color: "primary.600",
      textDecoration: "none",
      transition: "all 0.2s ease-in-out",
      _hover: {
        textDecoration: "none",
        color: "primary.700",
        transform: "translateY(-1px)",
      },
    },
    "::selection": {
      backgroundColor: "primary.100",
    },
    // Mejoras en los estilos globales
    "section": {
      marginBottom: "2rem",
    },
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
      backgroundImage: "linear-gradient(to right, primary.500, secondary.500)",
      color: "transparent",
    },
    ".shadow-hover": {
      transition: "all 0.3s ease",
      _hover: {
        boxShadow: "lg",
        transform: "translateY(-5px)",
      },
    },
    ".fade-in": {
      opacity: 0,
      animation: "fadeIn 0.5s ease-in forwards",
    },
    "@keyframes fadeIn": {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    // Footer styles
    "footer": {
      backgroundColor: "gray.800",
      color: "white",
      marginTop: "2rem",
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    "footer h3": {
      color: "white",
      _after: {
        backgroundColor: "primary.400",
        width: "30px",
      },
    },
    "footer a": {
      color: "gray.300",
      _hover: {
        color: "white",
        textDecoration: "none",
      },
    },
    "footer .social-icon": {
      transition: "transform 0.3s ease, color 0.3s ease",
      _hover: {
        transform: "translateY(-3px)",
        color: "white",
      },
    },
    "footer input": {
      backgroundColor: "white",
      color: "gray.800",
      _focus: {
        borderColor: "primary.400",
        boxShadow: "0 0 0 1px var(--chakra-colors-primary-400)",
      },
    },
    "footer button": {
      backgroundColor: "primary.500",
      color: "white",
      _hover: {
        backgroundColor: "primary.600",
      },
    },
    // Product card styles - mejorados
    ".product-card": {
      transform: "scale(1)",
      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      position: "relative",
      overflow: "hidden",
      _hover: {
        transform: "scale(1.03)",
        boxShadow: "xl",
        zIndex: 1,
        ".product-actions": {
          opacity: 1,
          transform: "translateY(0)",
        },
        ".product-badge": {
          transform: "translateX(0) rotate(0)",
        },
      },
    },
    ".product-actions": {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      padding: "1rem",
      background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
      opacity: 0,
      transform: "translateY(20px)",
      transition: "all 0.3s ease",
      display: "flex",
      justifyContent: "center",
    },
    ".product-badge": {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      transform: "translateX(100%) rotate(45deg)",
      transition: "all 0.3s ease",
      zIndex: 2,
    },
    ".cart-item": {
      opacity: 1,
      transition: "opacity 0.3s ease, transform 0.3s ease",
      _hover: {
        backgroundColor: "gray.50",
      },
    },
    ".cart-item-enter": {
      opacity: 0,
      transform: "translateX(-20px)",
    },
    ".cart-item-enter-active": {
      opacity: 1,
      transform: "translateX(0)",
      transition: "opacity 300ms, transform 300ms",
    },
    ".cart-item-exit": {
      opacity: 1,
    },
    ".cart-item-exit-active": {
      opacity: 0,
      transform: "translateX(20px)",
      transition: "opacity 300ms, transform 300ms",
    },
    // Animación para el botón flotante - mejorada
    "@keyframes pulse": {
      "0%": {
        boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.4)",
      },
      "70%": {
        boxShadow: "0 0 0 10px rgba(37, 211, 102, 0)",
      },
      "100%": {
        boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)",
      },
    },
    ".pulse-button": {
      animation: "pulse 2s infinite",
    },
    // Nuevas animaciones
    "@keyframes float": {
      "0%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-10px)" },
      "100%": { transform: "translateY(0px)" },
    },
    ".float": {
      animation: "float 3s ease-in-out infinite",
    },
    "@keyframes shake": {
      "0%": { transform: "rotate(0deg)" },
      "25%": { transform: "rotate(5deg)" },
      "50%": { transform: "rotate(0eg)" },
      "75%": { transform: "rotate(-5deg)" },
      "100%": { transform: "rotate(0deg)" },
    },
    ".shake": {
      animation: "shake 0.5s ease-in-out",
    },
    // Estilos para el hero
    ".hero-section": {
      position: "relative",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)",
        zIndex: 1,
      },
    },
    ".hero-content": {
      position: "relative",
      zIndex: 2,
    },
  },
};
