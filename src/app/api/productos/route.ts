import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase'
import { STATIC_PRODUCTOS } from '@/data/static-catalog'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const categoria = searchParams.get('categoria')
  const q = searchParams.get('q')
  const destacado = searchParams.get('destacado')

  try {
    const supabase = await createServerSupabaseClient()
    let query = supabase
      .from('productos')
      .select('*, categorias(id, nombre, slug, icono)')
      .eq('disponible', true)
      .order('destacado', { ascending: false })
      .order('nombre')

    if (categoria) query = query.eq('categorias.slug', categoria)
    if (q) query = query.ilike('nombre', `%${q}%`)
    if (destacado === 'true') query = query.eq('destacado', true)

    const { data, error } = await query
    if (error) throw error
    if (data && data.length > 0) return NextResponse.json(data)
  } catch {
    // fall through to static data
  }

  // Fallback: filter static catalog
  let result = STATIC_PRODUCTOS
  if (categoria) result = result.filter(p => p.categorias?.slug === categoria)
  if (q) result = result.filter(p => p.nombre.toLowerCase().includes(q.toLowerCase()))
  if (destacado === 'true') result = result.filter(p => p.destacado)
  return NextResponse.json(result)
}
