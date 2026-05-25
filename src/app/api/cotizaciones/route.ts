import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase'
import type { CotizacionInput } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body: CotizacionInput = await request.json()

    if (!body.nombre_cliente?.trim()) {
      return NextResponse.json({ error: 'El nombre es requerido' }, { status: 400 })
    }

    if (!body.email?.trim() && !body.telefono?.trim()) {
      return NextResponse.json(
        { error: 'Debes ingresar al menos un correo o teléfono de contacto' },
        { status: 400 }
      )
    }

    const supabase = await createServerSupabaseClient()
    const { data, error } = await supabase
      .from('cotizaciones')
      .insert({
        nombre_cliente: body.nombre_cliente.trim(),
        empresa: body.empresa?.trim() || null,
        ciudad: body.ciudad?.trim() || null,
        telefono: body.telefono?.trim() || null,
        email: body.email?.trim() || null,
        mensaje: body.mensaje?.trim() || null,
        productos_ids: body.productos_ids || [],
        estado: 'pendiente',
      })
      .select()
      .single()

    if (error) throw error
    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('POST /api/cotizaciones:', error)
    return NextResponse.json({ error: 'Error al registrar la cotización' }, { status: 500 })
  }
}
