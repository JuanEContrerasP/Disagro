import Link from 'next/link'
import Image from 'next/image'
import {
  Leaf, Droplets, Wheat, Tractor, Package, Sprout,
  CheckCircle, Truck, Users,
} from 'lucide-react'

const categorias = [
  { icono: Leaf,    nombre: 'Agroquímicos', slug: 'agroquimicos', desc: 'Herbicidas, fungicidas e insecticidas' },
  { icono: Sprout,  nombre: 'Fertilizantes', slug: 'fertilizantes', desc: 'Nutrición vegetal y enmiendas' },
  { icono: Wheat,   nombre: 'Semillas', slug: 'semillas', desc: 'Semillas certificadas y variedades' },
  { icono: Tractor, nombre: 'Equipos', slug: 'equipos', desc: 'Herramientas y maquinaria agrícola' },
  { icono: Droplets,nombre: 'Riego', slug: 'riego', desc: 'Sistemas e insumos para riego' },
  { icono: Package, nombre: 'Otros', slug: 'otros', desc: 'Insumos varios del campo' },
]

const valores = [
  { icono: CheckCircle, titulo: 'Calidad garantizada', desc: 'Productos de marcas líderes del sector agro.' },
  { icono: Truck,       titulo: 'Distribución directa', desc: 'Llegamos al productor donde más se necesita.' },
  { icono: Users,       titulo: 'Asesoría experta', desc: 'Equipo técnico listo para orientarte.' },
]

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
            <span className="inline-block px-3 py-1 rounded-full bg-[#5B9B2F]/30 text-[#E8F5E2] text-sm font-medium mb-6">
              Distribuciones Agroindustriales MR
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Insumos del campo,<br />
              <span className="text-[#5B9B2F]">con respaldo de expertos</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Encuentra el producto agro que necesitas — agroquímicos, fertilizantes, semillas y más. Distribución directa al productor colombiano.
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
            <h2 className="text-3xl font-bold text-[#1C2B1A] mb-3">Nuestras categorías</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Portafolio completo de insumos agroindustriales para cada etapa del cultivo.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categorias.map((cat) => {
              const Icon = cat.icono
              return (
                <Link
                  key={cat.slug}
                  href={`/catalogo?categoria=${cat.slug}`}
                  className="group flex flex-col items-center text-center p-5 bg-white rounded-xl border border-[#E2E8E0] hover:border-[#3A6B35] hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E8F5E2] flex items-center justify-center mb-3 group-hover:bg-[#3A6B35] transition-colors">
                    <Icon className="w-6 h-6 text-[#3A6B35] group-hover:text-white transition-colors" />
                  </div>
                  <p className="font-semibold text-[#1C2B1A] text-sm group-hover:text-[#3A6B35] transition-colors">
                    {cat.nombre}
                  </p>
                  <p className="text-xs text-[#6B7280] mt-1 hidden lg:block">{cat.desc}</p>
                </Link>
              )
            })}
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
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-xl border border-[#E2E8E0] bg-[#F5F5F4] overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-[#E2E8E0]" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-[#E2E8E0] rounded w-3/4" />
                  <div className="h-3 bg-[#E2E8E0] rounded w-1/2" />
                  <div className="h-8 bg-[#E2E8E0] rounded mt-4" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#6B7280] mt-8">
            Conecta Supabase para mostrar productos reales — ver{' '}
            <code className="bg-[#E8F5E2] text-[#3A6B35] px-1 rounded">.env.local</code>
          </p>
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
