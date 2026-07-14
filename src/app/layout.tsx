import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = 'https://disagro-landing.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'DISAGRO MR — Distribuciones Agroindustriales',
    template: '%s | DISAGRO MR',
  },
  description:
    'DISAGRO MR distribuye mallas agrícolas, telas de campo, hilos y sogas, cartonplast y empaques en Colombia. Asesoría experta y despacho a todo el país.',
  keywords: [
    'mallas agrícolas Colombia',
    'malla antiáfido',
    'malla cortavientos',
    'malla antigranizo',
    'tela cubresuelo',
    'tela sombra',
    'cartonplast',
    'hilos y sogas agrícolas',
    'plástico invernadero',
    'empaques agroindustriales',
    'insumos agrícolas Colombia',
    'DISAGRO MR',
    'distribuciones agroindustriales',
    'Mosquera Cundinamarca',
  ],
  openGraph: {
    title: 'DISAGRO MR — Distribuciones Agroindustriales',
    description: 'Mallas, telas, empaques y más insumos agroindustriales para el campo colombiano.',
    siteName: 'DISAGRO MR',
    locale: 'es_CO',
    type: 'website',
    url: BASE_URL,
  },
  alternates: {
    canonical: BASE_URL,
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'DISAGRO MR — Distribuciones Agroindustriales',
  description:
    'Distribuidor de insumos agroindustriales: mallas, telas, hilos, sogas, cartonplast y empaques para el sector agrícola colombiano.',
  url: BASE_URL,
  telephone: '+573102978679',
  email: 'Comercial@disagromr.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cra 3Este #3-39',
    addressLocality: 'Mosquera',
    addressRegion: 'Cundinamarca',
    addressCountry: 'CO',
  },
  areaServed: 'Colombia',
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
