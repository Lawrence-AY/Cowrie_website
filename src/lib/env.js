/**
 * Environment configuration for different deployment environments
 */

export const getEnvironmentConfig = () => {
  const mode = import.meta.env.MODE || 'development'
  
  return {
    isDevelopment: mode === 'development',
    isProduction: mode === 'production',
    isStaging: mode === 'staging',
    env: mode,
    apiUrl: import.meta.env.VITE_API_URL || 'https://api.ayedoscowrie.com',
    siteUrl: import.meta.env.VITE_SITE_URL || 'https://ayedoscowrie.com',
    analyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '',
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  }
}

/**
 * Cache busting for static assets
 */
export const getCacheBustUrl = (path: string): string => {
  if (import.meta.env.PROD) {
    const version = import.meta.env.VITE_APP_VERSION || 'latest'
    return `${path}?v=${version}`
  }
  return path
}
