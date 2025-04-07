import NextHead from 'next/head';
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  ogType?: string;
  ogImage?: string;
  canonical?: string;
  keywords?: string;
  author?: string;
  robots?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  language?: string;
  themeColor?: string;
}

const Head: React.FC<SEOProps> = ({
  title = 'PrecioHogar - Electrodomésticos y más para tu hogar',
  description = 'Descubre nuestra selección de electrodomésticos y artículos de calidad a precios increíbles. Envíos a todo Uruguay.',
  ogType = 'website',
  ogImage = '/images/BannerPrincipal.png',
  canonical = 'https://preciohogar.netlify.app/',
  keywords = 'electrodomésticos, artículos del hogar, precios competitivos, envío a todo Uruguay',
  author = 'PrecioHogar',
  robots = 'index, follow',
  twitterCard = 'summary_large_image',
  twitterSite = '@preciohogar',
  twitterCreator = '@preciohogar',
  language = 'es-UY',
  themeColor = '#0073e6',
}) => {
  return (
    <NextHead>
      {/* HTML5 Doctype */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Language */}
      <meta httpEquiv="Content-Language" content={language} />
      <meta name="language" content={language} />
      
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      
      {/* Theme Color */}
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={themeColor} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={language} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Prefetch */}
      <link rel="prefetch" href="/images/BannerPrincipal.png" />
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PrecioHogar",
          "url": canonical,
          "logo": ogImage,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "UY"
          }
        })}
      </script>
    </NextHead>
  );
};

export default Head;