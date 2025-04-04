import NextHead from 'next/head';
import React from 'react';

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
  canonical,
  themeColor = '#2196f3', // Color principal de la marca (brand.500)
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Theme color for browser UI */}
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-navbutton-color" content={themeColor} />
      <meta name="apple-mobile-web-app-status-bar-style" content={themeColor} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Google Fonts - Matching your theme fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Google fonts should be moved to _document.js instead */}
      {/* Remove this line and add to pages/_document.js:
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      */}
      
      {/* Custom styles */}
      <style jsx global>{`
        :root {
          --brand-color: #2196f3;
          --secondary-color: #1976d2;
          --accent-color: #ffc107;
          --success-color: #4caf50;
          --error-color: #f44336;
          --whatsapp-color: #25D366;
        }
        
        body {
          font-family: 'Open Sans', sans-serif;
          background-color: #f8f9fa;
          color: #333;
          transition: background-color 0.3s ease;
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