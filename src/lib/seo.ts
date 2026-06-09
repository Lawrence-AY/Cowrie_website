/**
 * SEO configuration and utilities
 */

export const SITE_NAME = 'AYEDOS COWRIE'
export const SITE_DESCRIPTION = 'Innovative financial solutions combining capital growth, social impact, and blockchain technology'
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://ayedoscowrie.com'
export const SITE_IMAGE = '/images/og-image.png'

/**
 * Page metadata configuration
 */
export const pageMetadata = {
  home: {
    title: 'AYEDOS COWRIE | Catalysing Commerce',
    description: 'Innovative financial solutions for capital growth, social impact, and economic development through blockchain technology.',
    path: '/',
  },
  mlp: {
    title: 'Cowrie Mortgage Liquidity Platform (MLP) | AYEDOS COWRIE',
    description: 'Revolutionizing mortgage lending with blockchain-based tokenization and liquidity solutions for financial institutions.',
    path: '/mlp',
  },
  dex: {
    title: 'Cowrie Digital Exchange (DEX) | AYEDOS COWRIE',
    description: 'A comprehensive digital exchange platform for trading real assets with institutional-grade security and compliance.',
    path: '/dex',
  },
  dexCommercial: {
    title: 'DEX Commercial Solutions | AYEDOS COWRIE',
    description: 'Digital exchange solutions designed for commercial enterprises and financial institutions.',
    path: '/dex/commercial',
  },
  dexPublicSector: {
    title: 'DEX Public Sector Solutions | AYEDOS COWRIE',
    description: 'Digital exchange platform tailored for government agencies and public sector institutions.',
    path: '/dex/public-sector',
  },
  specialFund: {
    title: 'AYEDOS Special Investment Fund (SIF) | AYEDOS COWRIE',
    description: 'Purpose-driven investment vehicle for housing, infrastructure, and sustainable development with measurable social impact.',
    path: '/special-fund',
  },
  contact: {
    title: 'Contact Us | AYEDOS COWRIE',
    description: 'Get in touch with our team to learn more about investment opportunities and financial solutions.',
    path: '/contact',
  },
  library: {
    title: 'Resource Library | AYEDOS COWRIE',
    description: 'Access whitepapers, case studies, and educational resources about fintech and blockchain solutions.',
    path: '/library',
  },
}

/**
 * Generate JSON-LD structured data for financial organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}${SITE_IMAGE}`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/icon-dark-landscape.png`,
      width: 250,
      height: 60,
    },
    sameAs: [
      // Add social media links when available
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE', // Update as needed
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254-XXX-XXXX', // Update with actual phone
      contactType: 'Customer Service',
    },
  }
}

/**
 * Generate JSON-LD structured data for a product/service
 */
export function generateProductSchema(product: {
  name: string
  description: string
  image?: string
  brand?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: product.name,
    description: product.description,
    image: product.image ? `${SITE_URL}${product.image}` : undefined,
    brand: {
      '@type': 'Brand',
      name: product.brand || SITE_NAME,
    },
    manufacturer: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

/**
 * Generate JSON-LD breadcrumb schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}
