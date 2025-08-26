import Script from 'next/script'

interface SEOSchemaProps {
  type: 'website' | 'service' | 'organization' | 'breadcrumb'
  data: any
}

export function SEOSchema({ type, data }: SEOSchemaProps) {
  const getSchema = () => {
    switch (type) {
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "FSI Digital",
          "url": "https://startupboost.ca",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://startupboost.ca/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "FSI Digital",
            "url": "https://startupboost.ca"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Canada"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": data.name,
            "itemListElement": data.features?.map((feature: string, index: number) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": feature
              }
            }))
          }
        }
      
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "FSI Digital",
          "url": "https://startupboost.ca",
          "logo": "https://startupboost.ca/logo.png",
          "description": "Professional website development and digital marketing services for Canadian businesses",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "CA",
            "addressRegion": "ON",
            "addressLocality": "Toronto"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service"
          }
        }
      
      default:
        return {}
    }
  }

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema())
      }}
    />
  )
}
