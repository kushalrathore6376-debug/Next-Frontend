/** @type {import('next').Metadata} */
export const siteConfig = {
  name: 'TraceXero',
  title: 'TraceXero — Carbon Capture Technology for Industry',
  description:
    'TraceXero enables industries to lower carbon footprints, generate carbon credits, and adopt sustainable carbon capture technology — 99.2% capture efficiency with graphitic carbon conversion.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tracexero.com',
  ogImage: '/assets/og-image.png',
  keywords: [
    'carbon capture',
    'carbon credits',
    'climate technology',
    'industrial decarbonisation',
    'graphitic carbon',
    'TraceXero',
    'CO2 capture',
    'sustainability',
    'net zero',
    'India climate tech',
  ],
  locale: 'en_IN',
  twitterHandle: '@tracexero',
};

export function getMetadata() {
  const { name, title, description, url, ogImage, keywords, locale, twitterHandle } = siteConfig;

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s | ${name}`,
    },
    description,
    keywords,
    authors: [{ name }],
    creator: name,
    publisher: name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale,
      url,
      siteName: name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${name} — Building the Future of Carbon Capture`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: twitterHandle,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: '/',
    },
    icons: {
      icon: [{ url: '/dt-favicon.svg', type: 'image/svg+xml' }],
      apple: '/dt-favicon.svg',
      shortcut: '/dt-favicon.svg',
    },
    category: 'technology',
  };
}

/** Metadata for an interior page (e.g. /technology). Title is run through the
 * root layout's `%s | TraceXero` template automatically. */
export function getPageMetadata({ title, description, path }) {
  const { url, ogImage, name } = siteConfig;
  const canonicalUrl = `${url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: name,
      title: `${title} | ${name}`,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${name}`,
      description,
      images: [ogImage],
    },
  };
}

export function getOrganizationJsonLd() {
  const { name, description, url } = siteConfig;

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    description,
    url,
    logo: `${url}/dt-favicon.svg`,
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
    },
  };
}

export function getWebSiteJsonLd() {
  const { name, description, url } = siteConfig;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    description,
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
