import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft, Tag, Package, Building2,
  CheckCircle, ClipboardList, ShoppingCart,
} from 'lucide-react'
import { createServerSupabaseClient } from '@/lib/supabase'
import type { Metadata } from 'next'
import type { Producto } from '@/types'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase
    .from('productos')
    .select('nombre, descripcion')
    .eq('slug', slug)
    .single()

  if (!data) return { title: 'Producto no encontrado' }
  return {
    title: data.nombre,
    description: data.descripcion ?? undefined,
  }
}

export default async function ProductoDetallePage({ params }: Props) {
  const { slug } = await params
  const supabase = await createServerSupabaseClient()

  const { data: producto } = await supabase
    .from('productos')
    .select('*, categorias(id, nombre, slug, icono)')
    .eq('slug', slug)
    .single() as { data: Producto | null }

  if (!producto) notFound()

  // Productos relacionados (misma categoría, distinto slug)
  const { data: relacionados } = await supabase
    .from('productos')
    .select('id, nombre, slug, imagen_url, marca, unidad, categorias(icono, nombre)')
    .eq('categoria_id', producto.categoria_id ?? '')
    .neq('slug', slug)
    .eq('disponible', true)
    .limit(4)

  return (
    <div className="min-h-screen bg-[#F5F5F4]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E2E8E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <Link href="/" className="hover:text-[#3A6B35] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/catalogo" className="hover:text-[#3A6B35] transition-colors">Catálogo</Link>
            {producto.categorias && (
              <>
                <span>/</span>
                <Link
                  href={`/catalogo?categoria=${producto.categorias.slug}`}
                  className="hover:text-[#3A6B35] transition-colors"
                >
                  {producto.categorias.nombre}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-[#1C2B1A] font-medium truncate max-w-[200px]">{producto.nombre}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Volver */}
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#3A6B35] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al catálogo
        </Link>

        {/* Detalle principal */}
        <div className="bg-white rounded-2xl border border-[#E2E8E0] overflow-hidden shadow-sm mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Imagen */}
            <div className="relative h-80 lg:h-full min-h-[360px] bg-[#E8F5E2]">
              {producto.imagen_url ? (
                <Image
                  src={producto.imagen_url}
                  alt={producto.nombre}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-[#3A6B35]/40">
                  <Package className="w-24 h-24" />
                  <span className="text-sm font-medium">Sin imagen disponible</span>
                </div>
              )}
              {producto.destacado && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#5B9B2F] text-white text-xs font-bold rounded-full">
                  Destacado
                </span>
              )}
            </div>

            {/* Info */}
            <div className="p-8 lg:p-10 flex flex-col">
              {/* Categoría */}
              {producto.categorias && (
                <Link
                  href={`/catalogo?categoria=${producto.categorias.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-[#5B9B2F] font-medium mb-3 hover:text-[#3A6B35] transition-colors w-fit"
                >
                  <Tag className="w-3.5 h-3.5" />
                  {producto.categorias.nombre}
                </Link>
              )}

              <h1 className="text-3xl font-bold text-[#1C2B1A] mb-2">{producto.nombre}</h1>

              {/* Marca y unidad */}
              <div className="flex flex-wrap gap-3 mb-5">
                {producto.marca && (
                  <div className="flex items-center gap-1.5 text-sm text-[#6B7280]">
                    <Building2 className="w-4 h-4 text-[#3A6B35]" />
                    <span>{producto.marca}</span>
                  </div>
                )}
                {producto.unidad && (
                  <div className="flex items-center gap-1.5 text-sm text-[#6B7280]">
                    <Package className="w-4 h-4 text-[#3A6B35]" />
                    <span>{producto.unidad}</span>
                  </div>
                )}
              </div>

              {/* Descripción */}
              {producto.descripcion && (
                <p className="text-[#6B7280] leading-relaxed mb-6 text-base">
                  {producto.descripcion}
                </p>
              )}

              {/* Disponibilidad */}
              <div className="flex items-center gap-2 mb-8">
                <CheckCircle className={`w-5 h-5 ${producto.disponible ? 'text-[#5B9B2F]' : 'text-gray-400'}`} />
                <span className={`text-sm font-semibold ${producto.disponible ? 'text-[#5B9B2F]' : 'text-gray-400'}`}>
                  {producto.disponible ? 'Disponible' : 'Sin stock'}
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <Link
                  href={`/contacto?producto=${producto.id}`}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#3A6B35] text-white font-semibold rounded-xl hover:bg-[#2D5228] transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Solicitar cotización
                </Link>
                <Link
                  href="/catalogo"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#3A6B35] text-[#3A6B35] font-semibold rounded-xl hover:bg-[#E8F5E2] transition-colors"
                >
                  Ver más productos
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Ficha técnica */}
        {producto.ficha_tecnica && (
          <div className="bg-white rounded-2xl border border-[#E2E8E0] p-8 mb-10 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#E8F5E2] flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-[#3A6B35]" />
              </div>
              <h2 className="text-xl font-bold text-[#1C2B1A]">Ficha técnica</h2>
            </div>
            <p className="text-[#6B7280] leading-relaxed whitespace-pre-line">
              {producto.ficha_tecnica}
            </p>
          </div>
        )}

        {/* Productos relacionados */}
        {relacionados && relacionados.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#1C2B1A] mb-6">Productos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relacionados.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/catalogo/${rel.slug}`}
                  className="group bg-white rounded-xl border border-[#E2E8E0] overflow-hidden hover:border-[#3A6B35] hover:shadow-md transition-all"
                >
                  <div className="relative h-40 bg-[#E8F5E2]">
                    {rel.imagen_url ? (
                      <Image src={rel.imagen_url} alt={rel.nombre} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="w-12 h-12 text-[#3A6B35]/30" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-[#1C2B1A] text-sm leading-snug group-hover:text-[#3A6B35] transition-colors line-clamp-2">
                      {rel.nombre}
                    </p>
                    {rel.marca && (
                      <p className="text-xs text-[#6B7280] mt-1">{rel.marca}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
