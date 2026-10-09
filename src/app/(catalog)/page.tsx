import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Truck, Users } from 'lucide-react'
import { STATIC_PRODUCTOS } from '@/data/static-catalog'

export const metadata: Metadata = {
  title: 'DISAGRO MR — Mallas, Telas y Empaques Agroindustriales',
  description:
    'Distribuidor de mallas agrícolas, telas de campo, hilos y sogas, cartonplast y empaques en Colombia. Asesoría experta y despacho a todo el país desde Mosquera, Cundinamarca.',
  alternates: { canonical: '/' },
}

const categorias = [
  { emoji: '🌿', nombre: 'Mallas',                    slug: 'mallas',                 desc: 'Antiáfido, cortavientos, antigranizo' },
  { emoji: '🧵', nombre: 'Telas',                     slug: 'telas',                  desc: 'Cubresuelo, sombra, cerramiento'       },
  { emoji: '🪢', nombre: 'Hilos y Sogas',             slug: 'hilos-sogas',            desc: 'Rafia, sisal, nilón agrícola'          },
  { emoji: '📋', nombre: 'Cartonplast',               slug: 'cartonplast',            desc: 'Láminas plásticas corrugadas'          },
  { emoji: '📦', nombre: 'Plasticultura y Empaques',  slug: 'plasticultura-empaques', desc: 'Plástico invernadero, sacos, estuches' },
]

const valores = [
  { icono: CheckCircle, titulo: 'Calidad garantizada',   desc: 'Productos de marcas líderes del sector agro.' },
  { icono: Truck,       titulo: 'Distribución directa',  desc: 'Llegamos al productor donde más se necesita.' },
  { icono: Users,       titulo: 'Asesoría experta',      desc: 'Equipo técnico listo para orientarte.'        },
]

const destacados = STATIC_PRODUCTOS.filter(p => p.destacado).slice(0, 4)

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
            alt="Campo agrícola"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1C2B1A]/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-2xl">
            <Image
              src="/logo.png"
              alt="DISAGRO MR - Distribuciones Agroindustriales"
              width={420}
              height={252}
              priority
              className="mb-8 h-auto w-[260px] object-contain md:w-[360px]"
            />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Mallas, telas y empaques<br />
              <span className="text-[#5B9B2F]">para el campo colombiano</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Malla antiáfido, cortavientos, antigranizo, telas agrícolas, hilos, sogas, cartonplast y plástico invernadero. Distribuimos en todo el país desde Mosquera, Cundinamarca.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/catalogo"
                className="px-6 py-3 bg-[#5B9B2F] text-white font-semibold rounded-lg hover:bg-[#4A8024] transition-colors"
              >
                Ver catálogo completo
              </Link>
              <Link
                href="/contacto"
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="py-20 bg-[#F5F5F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C2B1A] mb-3">Nuestras líneas de producto</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Portafolio completo de insumos agroindustriales para cada etapa del cultivo.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categorias.map((cat) => (
              <Link
                key={cat.slug}
                href={`/catalogo?categoria=${cat.slug}`}
                className="group flex flex-col items-center text-center p-5 bg-white rounded-xl border border-[#E2E8E0] hover:border-[#3A6B35] hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#E8F5E2] flex items-center justify-center mb-3 text-2xl group-hover:bg-[#3A6B35] transition-colors">
                  {cat.emoji}
                </div>
                <p className="font-semibold text-[#1C2B1A] text-sm group-hover:text-[#3A6B35] transition-colors">
                  {cat.nombre}
                </p>
                <p className="text-xs text-[#6B7280] mt-1 hidden lg:block">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1C2B1A]">Productos destacados</h2>
              <p className="text-[#6B7280] mt-1">Los más consultados del catálogo</p>
            </div>
            <Link
              href="/catalogo"
              className="text-sm font-semibold text-[#3A6B35] hover:text-[#2D5228] transition-colors"
            >
              Ver todos →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destacados.map((producto) => (
              <Link
                key={producto.id}
                href={`/catalogo/${producto.slug}`}
                className="group rounded-xl border border-[#E2E8E0] bg-white overflow-hidden hover:border-[#3A6B35] hover:shadow-md transition-all"
              >
                <div className="relative h-48 bg-[#E8F5E2]">
                  {producto.imagen_url ? (
                    <Image
                      src={producto.imagen_url}
                      alt={producto.nombre}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      {producto.categorias?.icono ?? '🌿'}
                    </div>
                  )}
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#5B9B2F] text-white text-xs font-bold rounded-full">
                    Destacado
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-[#1C2B1A] text-sm leading-snug group-hover:text-[#3A6B35] transition-colors line-clamp-2">
                    {producto.nombre}
                  </p>
                  <p className="text-xs text-[#6B7280] mt-1 line-clamp-2">{producto.descripcion}</p>
                  <span className="inline-block mt-3 text-xs font-semibold text-[#3A6B35]">
                    Ver detalles →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 bg-[#E8F5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C2B1A] mb-3">¿Por qué DISAGRO MR?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((v) => {
              const Icon = v.icono
              return (
                <div key={v.titulo} className="bg-white rounded-xl p-8 border border-[#E2E8E0] text-center">
                  <div className="w-14 h-14 rounded-full bg-[#E8F5E2] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#3A6B35]" />
                  </div>
                  <h3 className="font-bold text-[#1C2B1A] text-lg mb-2">{v.titulo}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-[#3A6B35] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Listo para abastecer tu campo?</h2>
          <p className="text-gray-300 mb-8">
            Contáctanos y un asesor te orientará con el producto ideal para tu cultivo.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-3 bg-white text-[#3A6B35] font-bold rounded-lg hover:bg-[#E8F5E2] transition-colors"
          >
            Solicitar cotización gratuita
          </Link>
        </div>
      </section>
    </div>
  )
}
