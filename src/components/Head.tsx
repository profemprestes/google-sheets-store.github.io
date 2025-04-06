import NextHead from 'next/head';
import React, { useContext } from 'react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

interface HeadProps {
  title?: string;
  description?: string;
  ogType?: string;
  ogImage?: string;
  canonical?: string;
  themeColor?: string;
}

const Head: React.FC<HeadProps> = ({
  title = 'PrecioHogar - Electrodomésticos y más para tu hogar',
  description = 'Descubre nuestra selección de electrodomésticos y artículos de calidad a precios increíbles. Envíos a todo Uruguay.',
  ogType = 'website',
  ogImage = '/images/BannerPrincipal.png', // Asegúrate de tener esta imagen en tu carpeta public
  canonical = 'https://preciohogar.netlify.app/',
  themeColor,
}) => {
  // Use color mode to dynamically set theme color
  const { colorMode } = useColorMode();
  const dynamicThemeColor = useColorModeValue('#2196f3', '#1976d2');
  const finalThemeColor = themeColor || dynamicThemeColor;
  
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Theme color for browser UI - now dynamic based on color mode */}
      <meta name="theme-color" content={finalThemeColor} />
      <meta name="msapplication-navbutton-color" content={finalThemeColor} />
      <meta name="apple-mobile-web-app-status-bar-style" content={finalThemeColor} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://preciohogar.netlify.app/" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content="https://preciohogar.netlify.app/" />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Site manifest */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Google Fonts - Matching your theme fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Custom styles - now with color mode support */}
      <style jsx global>{`
        :root {
          --brand-color: ${colorMode === 'dark' ? '#3182ce' : '#2196f3'};
          --secondary-color: ${colorMode === 'dark' ? '#2c5282' : '#1976d2'};
          --accent-color: ${colorMode === 'dark' ? '#ecc94b' : '#ffc107'};
          --success-color: ${colorMode === 'dark' ? '#38a169' : '#4caf50'};
          --error-color: ${colorMode === 'dark' ? '#e53e3e' : '#f44336'};
          --whatsapp-color: #25D366;
          --bg-color: ${colorMode === 'dark' ? '#1a202c' : '#f8f9fa'};
          --text-color: ${colorMode === 'dark' ? '#e2e8f0' : '#333'};
        }
        
        body {
          font-family: 'Open Sans', sans-serif;
          background-color: var(--bg-color);
          color: var(--text-color);
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', sans-serif;
          font-weight: bold;
        }
      `}</style>
    </NextHead>
  );
};

export default Head;