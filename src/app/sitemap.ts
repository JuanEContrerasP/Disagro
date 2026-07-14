import type { MetadataRoute } from 'next'
import { STATIC_PRODUCTOS, STATIC_CATEGORIAS } from '@/data/static-catalog'

const BASE_URL = 'https://disagro-landing.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                        lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/catalogo`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/nosotros`,          lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/contacto`,          lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const productPages: MetadataRoute.Sitemap = STATIC_PRODUCTOS.map(p => ({
    url: `${BASE_URL}/catalogo/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const categoryPages: MetadataRoute.Sitemap = STATIC_CATEGORIAS.map(c => ({
    url: `${BASE_URL}/catalogo?categoria=${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...productPages, ...categoryPages]
}
