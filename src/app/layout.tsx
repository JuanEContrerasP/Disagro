import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'DISAGRO MR — Distribuciones Agroindustriales',
    template: '%s | DISAGRO MR',
  },
  description:
    'Catálogo digital de DISAGRO MR. Insumos del campo con respaldo de expertos: agroquímicos, fertilizantes, semillas y más.',
  keywords: [
    'agroquímicos',
    'fertilizantes',
    'semillas',
    'insumos agrícolas',
    'disagro',
    'distribuciones agroindustriales',
  ],
  openGraph: {
    title: 'DISAGRO MR — Distribuciones Agroindustriales',
    description: 'Insumos del campo, con respaldo de expertos.',
    siteName: 'DISAGRO MR',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
