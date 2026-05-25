import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const supabase = await createServerSupabaseClient()
    const { data, error } = await supabase
      .from('productos')
      .select('*, categorias(id, nombre, slug, icono)')
      .eq('slug', slug)
      .single()

    if (error || !data) {
      return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 })
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('GET /api/productos/[slug]:', error)
    return NextResponse.json({ error: 'Error al obtener el producto' }, { status: 500 })
  }
}
