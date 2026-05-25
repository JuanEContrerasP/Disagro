import Image from 'next/image'
import Link from 'next/link'
import { Package } from 'lucide-react'
import type { Producto } from '@/types'

interface Props {
  producto: Producto
}

export function ProductCard({ producto }: Props) {
  return (
    <div className="group bg-white rounded-xl border border-[#E2E8E0] overflow-hidden hover:border-[#3A6B35] hover:shadow-lg transition-all duration-200 flex flex-col">
      {/* Imagen */}
      <div className="relative h-52 bg-[#F5F5F4]">
        {producto.imagen_url ? (
          <Image
            src={producto.imagen_url}
            alt={producto.nombre}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#E8F5E2]">
            <Package className="w-16 h-16 text-[#3A6B35]/40" />
          </div>
        )}
        {producto.destacado && (
          <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#5B9B2F] text-white text-xs font-semibold rounded-full">
            Destacado
          </span>
        )}
        {!producto.disponible && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="text-sm font-semibold text-[#6B7280]">Sin stock</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        {producto.categorias && (
          <span className="text-xs text-[#5B9B2F] font-medium mb-1">
            {producto.categorias.icono} {producto.categorias.nombre}
          </span>
        )}
        <h3 className="font-semibold text-[#1C2B1A] leading-snug mb-1 group-hover:text-[#3A6B35] transition-colors">
          {producto.nombre}
        </h3>
        {producto.marca && (
          <p className="text-xs text-[#6B7280] mb-1">{producto.marca}</p>
        )}
        {producto.descripcion && (
          <p className="text-sm text-[#6B7280] line-clamp-2 mb-3 flex-1">
            {producto.descripcion}
          </p>
        )}
        {producto.unidad && (
          <span className="inline-block text-xs px-2 py-0.5 bg-[#E8F5E2] text-[#3A6B35] rounded-full mb-3 w-fit">
            {producto.unidad}
          </span>
        )}
        <div className="flex gap-2 mt-auto">
          <Link
            href={`/catalogo/${producto.slug}`}
            className="flex-1 text-center text-sm font-semibold py-2 rounded-lg border border-[#3A6B35] text-[#3A6B35] hover:bg-[#3A6B35] hover:text-white transition-colors"
          >
            Ver detalle
          </Link>
          <Link
            href={`/contacto?producto=${producto.id}`}
            className="flex-1 text-center text-sm font-semibold py-2 rounded-lg bg-[#3A6B35] text-white hover:bg-[#2D5228] transition-colors"
          >
            Cotizar
          </Link>
        </div>
      </div>
    </div>
  )
}
