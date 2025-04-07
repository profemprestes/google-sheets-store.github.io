import NextHead from 'next/head';
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  ogType?: string;
  ogImage?: string;
  canonical?: string;
}

const Head: React.FC<SEOProps> = ({
  title = 'PrecioHogar - Electrodomésticos y más para tu hogar',
  description = 'Descubre nuestra selección de electrodomésticos y artículos de calidad a precios increíbles. Envíos a todo Uruguay.',
  ogType = 'website',
  ogImage = '/images/BannerPrincipal.png', // Asegúrate de tener esta imagen en tu carpeta public
  canonical,
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
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
    </NextHead>
  );
};

export default Head;