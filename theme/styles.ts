export const styles = {
  global: {
    body: {
      backgroundColor: "primary.50",
      transition: "background-color 0.3s ease",
    },
    // Add smooth transitions to all interactive elements
    "a, button": {
      transition: "all 0.2s ease-in-out",
    },
    // Improve card hover effects
    ".chakra-stack": {
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "md",
      }
    },
    // Improve image loading
    "img": {
      transition: "opacity 0.3s ease, transform 0.3s ease",
    }
  },
};
