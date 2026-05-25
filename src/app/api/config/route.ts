import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = await createServerSupabaseClient()
    const { data, error } = await supabase
      .from('configuracion')
      .select('clave, valor')

    if (error) throw error

    const config = Object.fromEntries(data.map((row) => [row.clave, row.valor]))
    return NextResponse.json(config)
  } catch (error) {
    console.error('GET /api/config:', error)
    return NextResponse.json({ error: 'Error al obtener configuración' }, { status: 500 })
  }
}
