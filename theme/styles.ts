export const styles = {
  global: {
    body: {
      backgroundColor: "primary.50",
      color: "gray.800",
      fontSize: "16px",
      lineHeight: "tall",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "heading",
      fontWeight: "bold",
      lineHeight: "shorter",
      marginBottom: "0.5em",
    },
    a: {
      color: "primary.600",
      textDecoration: "none",
      _hover: {
        textDecoration: "underline",
        color: "primary.700",
      },
    },
    "::selection": {
      backgroundColor: "primary.100",
    },
  },
};
