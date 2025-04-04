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
  },
};
