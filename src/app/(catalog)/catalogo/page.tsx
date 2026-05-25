'use client'

import { useEffect, useState, useCallback, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ProductCard } from '@/components/ProductCard'
import type { Producto, Categoria } from '@/types'

function CatalogoContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [productos, setProductos] = useState<Producto[]>([])
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [loading, setLoading] = useState(true)
  const [busqueda, setBusqueda] = useState(searchParams.get('q') ?? '')
  const [categoriaActiva, setCategoriaActiva] = useState(searchParams.get('categoria') ?? '')

  const fetchData = useCallback(async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (busqueda) params.set('q', busqueda)
    if (categoriaActiva) params.set('categoria', categoriaActiva)

    const [prodRes, catRes] = await Promise.all([
      fetch(`/api/productos?${params}`),
      fetch('/api/categorias'),
    ])
    const [prods, cats] = await Promise.all([prodRes.json(), catRes.json()])
    setProductos(Array.isArray(prods) ? prods : [])
    setCategorias(Array.isArray(cats) ? cats : [])
    setLoading(false)
  }, [busqueda, categoriaActiva])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleBusqueda = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const value = (form.elements.namedItem('q') as HTMLInputElement).value
    setBusqueda(value)
    const params = new URLSearchParams()
    if (value) params.set('q', value)
    if (categoriaActiva) params.set('categoria', categoriaActiva)
    router.push(`/catalogo?${params}`)
  }

  const handleCategoria = (slug: string) => {
    const next = categoriaActiva === slug ? '' : slug
    setCategoriaActiva(next)
    const params = new URLSearchParams()
    if (busqueda) params.set('q', busqueda)
    if (next) params.set('categoria', next)
    router.push(`/catalogo?${params}`)
  }

  return (
    <div className="min-h-screen bg-[#F5F5F4]">
      {/* Encabezado */}
      <div className="bg-white border-b border-[#E2E8E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-[#1C2B1A] mb-1">Catálogo de productos</h1>
          <p className="text-[#6B7280]">Insumos agroindustriales para cada etapa del cultivo</p>

          {/* Buscador */}
          <form onSubmit={handleBusqueda} className="mt-6 flex gap-2 max-w-xl">
            <input
              name="q"
              type="text"
              defaultValue={busqueda}
              placeholder="Buscar producto, marca..."
              className="flex-1 px-4 py-2.5 rounded-lg border border-[#E2E8E0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3A6B35] focus:border-transparent"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#3A6B35] text-white text-sm font-semibold rounded-lg hover:bg-[#2D5228] transition-colors"
            >
              Buscar
            </button>
            {(busqueda || categoriaActiva) && (
              <button
                type="button"
                onClick={() => {
                  setBusqueda('')
                  setCategoriaActiva('')
                  router.push('/catalogo')
                }}
                className="px-4 py-2.5 border border-[#E2E8E0] rounded-lg text-sm text-[#6B7280] hover:bg-[#F5F5F4] transition-colors"
              >
                Limpiar
              </button>
            )}
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filtro lateral — Categorías */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="bg-white rounded-xl border border-[#E2E8E0] p-4 sticky top-20">
              <h3 className="font-semibold text-[#1C2B1A] text-sm mb-3">Categorías</h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleCategoria('')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      !categoriaActiva
                        ? 'bg-[#E8F5E2] text-[#3A6B35] font-semibold'
                        : 'text-[#6B7280] hover:bg-[#F5F5F4]'
                    }`}
                  >
                    Todas
                  </button>
                </li>
                {categorias.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategoria(cat.slug)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        categoriaActiva === cat.slug
                          ? 'bg-[#E8F5E2] text-[#3A6B35] font-semibold'
                          : 'text-[#6B7280] hover:bg-[#F5F5F4]'
                      }`}
                    >
                      {cat.icono} {cat.nombre}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Grid de productos */}
          <div className="flex-1">
            {/* Chips móvil */}
            <div className="flex gap-2 flex-wrap mb-4 lg:hidden">
              <button
                onClick={() => handleCategoria('')}
                className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                  !categoriaActiva
                    ? 'bg-[#3A6B35] text-white border-[#3A6B35]'
                    : 'border-[#E2E8E0] text-[#6B7280]'
                }`}
              >
                Todas
              </button>
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoria(cat.slug)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                    categoriaActiva === cat.slug
                      ? 'bg-[#3A6B35] text-white border-[#3A6B35]'
                      : 'border-[#E2E8E0] text-[#6B7280]'
                  }`}
                >
                  {cat.icono} {cat.nombre}
                </button>
              ))}
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="rounded-xl border border-[#E2E8E0] bg-white overflow-hidden animate-pulse">
                    <div className="h-52 bg-[#E8F5E2]" />
                    <div className="p-4 space-y-2">
                      <div className="h-4 bg-[#E2E8E0] rounded w-3/4" />
                      <div className="h-3 bg-[#E2E8E0] rounded w-1/2" />
                      <div className="h-8 bg-[#E2E8E0] rounded mt-4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : productos.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-5xl mb-4">🌱</p>
                <p className="text-[#1C2B1A] font-semibold mb-2">Sin productos encontrados</p>
                <p className="text-[#6B7280] text-sm">
                  {busqueda || categoriaActiva
                    ? 'Prueba con otro filtro o búsqueda'
                    : 'Conecta Supabase para ver el catálogo real'}
                </p>
              </div>
            ) : (
              <>
                <p className="text-sm text-[#6B7280] mb-4">
                  {productos.length} producto{productos.length !== 1 ? 's' : ''} encontrado{productos.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {productos.map((p) => (
                    <ProductCard key={p.id} producto={p} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CatalogoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F5F5F4] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#3A6B35] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <CatalogoContent />
    </Suspense>
  )
}
