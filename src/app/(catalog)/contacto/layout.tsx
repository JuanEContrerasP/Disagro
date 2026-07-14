import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solicitar cotización',
  description:
    'Solicita una cotización gratuita de mallas, telas, hilos, sogas, cartonplast y empaques agroindustriales. DISAGRO MR responde en menos de 24 horas hábiles.',
  alternates: { canonical: 'https://disagro-landing.vercel.app/contacto' },
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
