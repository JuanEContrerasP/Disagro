import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  HandshakeIcon, Leaf, Lightbulb, Truck,
  Target, Telescope, Leaf as LeafIcon,
  Wheat, Tractor, Droplets, Package, MapPin,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce a DISAGRO MR — Distribuciones Agroindustriales MR, empresa colombiana dedicada a la redistribución de insumos para el sector agro.',
}

const valores = [
  { icono: HandshakeIcon, titulo: 'Compromiso',      desc: 'Nos comprometemos con el productor colombiano, llevando el insumo correcto al lugar correcto.' },
  { icono: Leaf,          titulo: 'Sostenibilidad',  desc: 'Promovemos prácticas agrícolas responsables con el medio ambiente y el campo.' },
  { icono: Lightbulb,     titulo: 'Conocimiento',    desc: 'Respaldamos cada producto con asesoría técnica especializada.' },
  { icono: Truck,         titulo: 'Cobertura',       desc: 'Distribución directa en múltiples regiones de Colombia.' },
]

const categorias = [
  { icono: LeafIcon,  label: 'Agroquímicos' },
  { icono: Wheat,     label: 'Fertilizantes' },
  { icono: Wheat,     label: 'Semillas certificadas' },
  { icono: Tractor,   label: 'Equipos agrícolas' },
  { icono: Droplets,  label: 'Sistemas de riego' },
]

export default function NosotrosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
            alt="Campo agroindustrial"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1C2B1A]/80" />
        </div>
        <div className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full bg-[#5B9B2F]/30 text-[#E8F5E2] text-sm font-medium mb-4">
                Quiénes somos
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                DISAGRO MR
              </h1>
              <p className="text-xl text-[#5B9B2F] font-semibold mb-4">
                Distribuciones Agroindustriales MR
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Empresa colombiana especializada en la redistribución de insumos y productos para el sector agroindustrial. Conectamos al productor del campo con los mejores insumos del mercado.
              </p>
            </div>
            <div className="shrink-0">
              <div className="w-48 h-48 rounded-2xl bg-white flex items-center justify-center shadow-xl p-4">
                <Image
                  src="/logo.jpeg"
                  alt="DISAGRO MR"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#E8F5E2] rounded-2xl p-8 border border-[#3A6B35]/20">
              <div className="w-12 h-12 rounded-full bg-[#3A6B35] flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#1C2B1A] mb-3">Misión</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Proveer al sector agroindustrial colombiano con insumos de alta calidad, garantizando disponibilidad, asesoría técnica y distribución oportuna que impulse la productividad del campo.
              </p>
            </div>
            <div className="bg-[#F5F5F4] rounded-2xl p-8 border border-[#E2E8E0]">
              <div className="w-12 h-12 rounded-full bg-[#1C2B1A] flex items-center justify-center mb-4">
                <Telescope className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#1C2B1A] mb-3">Visión</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Ser la distribuidora agroindustrial de referencia en Colombia, reconocida por la confianza, el respaldo técnico y la cobertura que brindamos a cada productor del campo colombiano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-[#F5F5F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C2B1A] mb-3">Nuestros valores</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Los principios que guían cada decisión en DISAGRO MR.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v) => {
              const Icon = v.icono
              return (
                <div key={v.titulo} className="bg-white rounded-xl p-6 border border-[#E2E8E0] text-center hover:border-[#3A6B35] hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-full bg-[#E8F5E2] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#3A6B35]" />
                  </div>
                  <h3 className="font-bold text-[#1C2B1A] mb-2">{v.titulo}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1C2B1A] mb-4">Nuestro portafolio</h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Distribuimos un amplio catálogo de insumos de las marcas más reconocidas del sector agro, seleccionados para responder a las necesidades reales del productor colombiano.
              </p>
              <ul className="space-y-3">
                {categorias.map((cat) => {
                  const Icon = cat.icono
                  return (
                    <li key={cat.label} className="flex items-center gap-3 text-[#1C2B1A] font-medium">
                      <div className="w-8 h-8 rounded-full bg-[#E8F5E2] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#3A6B35]" />
                      </div>
                      {cat.label}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="bg-[#E8F5E2] rounded-2xl p-10 text-center border border-[#3A6B35]/20">
              <div className="w-20 h-20 rounded-full bg-[#3A6B35] flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <p className="text-2xl font-bold text-[#3A6B35] mb-2">Colombia</p>
              <p className="text-[#6B7280]">Distribución directa al productor en múltiples regiones del país.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#3A6B35] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Listo para trabajar con nosotros?</h2>
          <p className="text-gray-300 mb-8">Explora el catálogo o solicita una cotización sin costo.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/catalogo" className="px-6 py-3 bg-white text-[#3A6B35] font-bold rounded-lg hover:bg-[#E8F5E2] transition-colors">
              Ver catálogo
            </Link>
            <Link href="/contacto" className="px-6 py-3 bg-[#5B9B2F] text-white font-bold rounded-lg hover:bg-[#4A8024] transition-colors">
              Contactar ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
