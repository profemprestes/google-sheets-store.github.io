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
    ".product-card": {
      transform: "scale(1)",
      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      _hover: {
        transform: "scale(1.03)",
      },
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
    // Animación para el botón flotante
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
  },
};
