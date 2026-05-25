import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categoria = searchParams.get('categoria')
    const q = searchParams.get('q')
    const destacado = searchParams.get('destacado')

    const supabase = await createServerSupabaseClient()
    let query = supabase
      .from('productos')
      .select('*, categorias(id, nombre, slug, icono)')
      .eq('disponible', true)
      .order('destacado', { ascending: false })
      .order('nombre')

    if (categoria) {
      query = query.eq('categorias.slug', categoria)
    }

    if (q) {
      query = query.ilike('nombre', `%${q}%`)
    }

    if (destacado === 'true') {
      query = query.eq('destacado', true)
    }

    const { data, error } = await query

    if (error) throw error
    return NextResponse.json(data)
  } catch (error) {
    console.error('GET /api/productos:', error)
    return NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 })
  }
}
