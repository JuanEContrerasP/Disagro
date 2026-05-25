export interface Categoria {
  id: string
  nombre: string
  descripcion: string | null
  icono: string | null
  slug: string
  activa: boolean
  created_at: string
}

export interface Producto {
  id: string
  nombre: string
  descripcion: string | null
  categoria_id: string | null
  marca: string | null
  unidad: string | null
  imagen_url: string | null
  disponible: boolean
  destacado: boolean
  slug: string
  ficha_tecnica: string | null
  created_at: string
  updated_at: string
  categorias?: Categoria
}

export interface Cotizacion {
  id: string
  nombre_cliente: string
  empresa: string | null
  ciudad: string | null
  telefono: string | null
  email: string | null
  mensaje: string | null
  productos_ids: string[]
  estado: 'pendiente' | 'atendida' | 'descartada'
  created_at: string
}

export interface CotizacionInput {
  nombre_cliente: string
  empresa?: string
  ciudad?: string
  telefono?: string
  email?: string
  mensaje?: string
  productos_ids?: string[]
}

export interface ProductoFilters {
  categoria?: string
  q?: string
  destacado?: boolean
  disponible?: boolean
}
