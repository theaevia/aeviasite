import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import logoFavicon from '@assets/logos/logo-gold.webp';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const BASE_URL = 'https://www.theaevia.co.uk';
const DEFAULT_TITLE = 'The Aevia - Doctor-Led Transformation for Skin and Mind';
const DEFAULT_DESCRIPTION = 'Doctor-led medical aesthetics and performance coaching for professionals. Expert skin treatments and transformative coaching in Kings Cross, London.';
const DEFAULT_IMAGE = `${BASE_URL}/aevia-logo.png`;

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  type = 'website',
}: SEOProps) {
  const [location] = useLocation();
  const canonicalPath = location.split(/[?#]/)[0];
  const canonicalUrl = `${BASE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;

  return (
    <Helmet>
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Favicons */}
      <link rel="icon" type="image/webp" href={logoFavicon} />
      <link rel="apple-touch-icon" href={logoFavicon} />
      <link rel="icon" type="image/webp" sizes="192x192" href={logoFavicon} />
      <link rel="icon" type="image/webp" sizes="512x512" href={logoFavicon} />
    </Helmet>
  );
}
