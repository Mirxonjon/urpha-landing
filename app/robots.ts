import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://urphacapital.uz/sitemap.xml',
    host: 'https://urphacapital.uz',
  };
}
