import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase'
import { STATIC_PRODUCTOS } from '@/data/static-catalog'
import type { CotizacionInput } from '@/types'

const SUPABASE_CONFIGURED = !!(
  process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith('https://') &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const WHATSAPP_NUMBER = '573102978679'

function buildWhatsappUrl(body: CotizacionInput): string {
  const nombresProductos = (body.productos_ids ?? [])
    .map(id => STATIC_PRODUCTOS.find(p => p.id === id)?.nombre)
    .filter(Boolean)
    .join(', ')

  const lineas = [
    'Hola DISAGRO MR, quiero solicitar una cotización:',
    '',
    `Nombre: ${body.nombre_cliente}`,
    body.empresa   ? `Empresa: ${body.empresa}`     : null,
    body.ciudad    ? `Ciudad: ${body.ciudad}`        : null,
    body.telefono  ? `Teléfono: ${body.telefono}`   : null,
    body.email     ? `Email: ${body.email}`          : null,
    nombresProductos ? `Producto(s): ${nombresProductos}` : null,
    body.mensaje   ? `\nMensaje: ${body.mensaje}`   : null,
  ].filter(Boolean).join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lineas)}`
}

export async function POST(request: NextRequest) {
  let body: CotizacionInput

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida' }, { status: 400 })
  }

  if (!body.nombre_cliente?.trim()) {
    return NextResponse.json({ error: 'El nombre es requerido' }, { status: 400 })
  }

  if (!body.email?.trim() && !body.telefono?.trim()) {
    return NextResponse.json(
      { error: 'Ingresa al menos un correo o teléfono de contacto' },
      { status: 400 }
    )
  }

  // Sin Supabase: redirigir a WhatsApp con los datos pre-llenados
  if (!SUPABASE_CONFIGURED) {
    return NextResponse.json({
      success: true,
      fallback: 'whatsapp',
      whatsapp_url: buildWhatsappUrl(body),
    })
  }

  try {
    const supabase = await createServerSupabaseClient()
    const { data, error } = await supabase
      .from('cotizaciones')
      .insert({
        nombre_cliente: body.nombre_cliente.trim(),
        empresa:        body.empresa?.trim()   || null,
        ciudad:         body.ciudad?.trim()    || null,
        telefono:       body.telefono?.trim()  || null,
        email:          body.email?.trim()     || null,
        mensaje:        body.mensaje?.trim()   || null,
        productos_ids:  body.productos_ids     || [],
        estado:         'pendiente',
      })
      .select()
      .single()

    if (error) throw error
    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch (err) {
    console.error('POST /api/cotizaciones:', err)
    // Supabase falló en runtime — fallback a WhatsApp para no perder el lead
    return NextResponse.json({
      success: true,
      fallback: 'whatsapp',
      whatsapp_url: buildWhatsappUrl(body),
    })
  }
}
