import { useEffect } from 'react';

interface PageMetaData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

/**
 * Hook to update page meta tags dynamically for better SEO
 * Call this hook in any page component to update the page title and meta tags
 */
export function usePageMeta(metadata: PageMetaData) {
  useEffect(() => {
    // Update title
    document.title = metadata.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      let tag = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      ) as HTMLMetaElement;

      if (!tag) {
        tag = document.createElement('meta');
        if (isProperty) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Standard meta tags
    updateMetaTag('description', metadata.description);
    if (metadata.keywords) {
      updateMetaTag('keywords', metadata.keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', metadata.ogTitle || metadata.title, true);
    updateMetaTag('og:description', metadata.ogDescription || metadata.description, true);
    updateMetaTag('og:url', metadata.ogUrl || window.location.href, true);
    if (metadata.ogImage) {
      updateMetaTag('og:image', metadata.ogImage, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:title', metadata.twitterTitle || metadata.title);
    updateMetaTag('twitter:description', metadata.twitterDescription || metadata.description);
    if (metadata.twitterImage) {
      updateMetaTag('twitter:image', metadata.twitterImage);
    }

    // Canonical URL
    if (metadata.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = metadata.canonicalUrl;
    }

    // Return cleanup function
    return () => {
      // Optionally reset to homepage meta if needed
    };
  }, [metadata]);
}
