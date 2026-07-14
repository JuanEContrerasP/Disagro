import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase'
import { STATIC_CATEGORIAS } from '@/data/static-catalog'

const SUPABASE_CONFIGURED = !!(
  process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith('https://') &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function GET() {
  if (!SUPABASE_CONFIGURED) return NextResponse.json(STATIC_CATEGORIAS)

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
