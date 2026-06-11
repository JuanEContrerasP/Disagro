import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase'
import { STATIC_CATEGORIAS } from '@/data/static-catalog'

export async function GET() {
  try {
    const supabase = await createServerSupabaseClient()
    const { data, error } = await supabase
      .from('categorias')
      .select('*')
      .eq('activa', true)
      .order('nombre')

    if (error) throw error
    if (data && data.length > 0) return NextResponse.json(data)
    return NextResponse.json(STATIC_CATEGORIAS)
  } catch {
    return NextResponse.json(STATIC_CATEGORIAS)
  }
}
