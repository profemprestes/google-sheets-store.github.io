import React, { ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';

export interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box as="main" minH="100vh" py={8}>
      <Container maxW="container.xl">
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;