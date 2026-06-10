import { useEffect } from 'react'
import { SITE_NAME, SITE_URL } from '../lib/seo'

interface SEOProps {
  title: string
  description: string
  image?: string
  path?: string
  structuredData?: Record<string, any>
  noindex?: boolean
}

export default function SEO({ 
  title, 
  description, 
  image = '/images/og-image.png',
  path = '',
  structuredData,
  noindex = false,
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  const canonicalUrl = `${SITE_URL}${path}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  useEffect(() => {
    const previousTitle = document.title
    const managedElements = Array.from(document.head.querySelectorAll('[data-seo-managed="true"]'))

    document.title = fullTitle
    managedElements.forEach((element) => element.remove())

    const appendMeta = (attributes: Record<string, string>) => {
      const meta = document.createElement('meta')
      Object.entries(attributes).forEach(([key, value]) => meta.setAttribute(key, value))
      meta.setAttribute('data-seo-managed', 'true')
      document.head.appendChild(meta)
    }

    const canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', canonicalUrl)
    canonical.setAttribute('data-seo-managed', 'true')
    document.head.appendChild(canonical)

    appendMeta({ name: 'description', content: description })
    appendMeta({ name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow' })
    appendMeta({ property: 'og:type', content: 'website' })
    appendMeta({ property: 'og:url', content: canonicalUrl })
    appendMeta({ property: 'og:title', content: fullTitle })
    appendMeta({ property: 'og:description', content: description })
    appendMeta({ property: 'og:image', content: imageUrl })
    appendMeta({ property: 'og:site_name', content: SITE_NAME })
    appendMeta({ name: 'twitter:card', content: 'summary_large_image' })
    appendMeta({ name: 'twitter:url', content: canonicalUrl })
    appendMeta({ name: 'twitter:title', content: fullTitle })
    appendMeta({ name: 'twitter:description', content: description })
    appendMeta({ name: 'twitter:image', content: imageUrl })

    if (structuredData) {
      const script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.setAttribute('data-seo-managed', 'true')
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }

    return () => {
      document.title = previousTitle
      document.head.querySelectorAll('[data-seo-managed="true"]').forEach((element) => element.remove())
    }
  }, [canonicalUrl, description, fullTitle, imageUrl, noindex, structuredData])

  return null
}
