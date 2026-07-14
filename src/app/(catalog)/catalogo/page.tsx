import { Suspense } from 'react'
import { CatalogoContent } from '@/components/CatalogoContent'
import { STATIC_PRODUCTOS, STATIC_CATEGORIAS } from '@/data/static-catalog'
import { createServerSupabaseClient } from '@/lib/supabase'
import type { Producto, Categoria } from '@/types'

const SUPABASE_CONFIGURED = !!(
  process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith('https://') &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

async function getData(): Promise<{ productos: Producto[]; categorias: Categoria[] }> {
  if (!SUPABASE_CONFIGURED) {
    return { productos: STATIC_PRODUCTOS, categorias: STATIC_CATEGORIAS }
  }

  try {
    const supabase = await createServerSupabaseClient()
    const [{ data: cats }, { data: prods }] = await Promise.all([
      supabase.from('categorias').select('*').eq('activa', true).order('nombre'),
      supabase.from('productos').select('*, categorias(id, nombre, slug, icono)')
        .eq('disponible', true).order('destacado', { ascending: false }).order('nombre'),
    ])
    if (cats?.length && prods?.length) {
      return { productos: prods as Producto[], categorias: cats as Categoria[] }
    }
  } catch { /* fall through */ }

  return { productos: STATIC_PRODUCTOS, categorias: STATIC_CATEGORIAS }
}

export default async function CatalogoPage() {
  const { productos, categorias } = await getData()

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F5F5F4] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#3A6B35] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <CatalogoContent productos={productos} categorias={categorias} />
    </Suspense>
  )
}
