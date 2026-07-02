import type { Categoria, Producto } from '@/types'

export const STATIC_CATEGORIAS: Categoria[] = [
  {
    id: 'cat-mallas',
    nombre: 'Mallas',
    descripcion: '',
    icono: '🌿',
    slug: 'mallas',
    activa: true,
    created_at: '2025-01-01T00:00:00Z',
  },
  {
    id: 'cat-telas',
    nombre: 'Telas',
    descripcion: '',
    icono: '🧵',
    slug: 'telas',
    activa: true,
    created_at: '2025-01-01T00:00:00Z',
  },
  {
    id: 'cat-hilos',
    nombre: 'Hilos y Sogas',
    descripcion: '',
    icono: '🪢',
    slug: 'hilos-sogas',
    activa: true,
    created_at: '2025-01-01T00:00:00Z',
  },
  {
    id: 'cat-cartonplast',
    nombre: 'Cartonplast',
    descripcion: '',
    icono: '📋',
    slug: 'cartonplast',
    activa: true,
    created_at: '2025-01-01T00:00:00Z',
  },
  {
    id: 'cat-estuches',
    nombre: 'Plasticultura y Empaques',
    descripcion: '',
    icono: '📦',
    slug: 'plasticultura-empaques',
    activa: true,
    created_at: '2025-01-01T00:00:00Z',
  },
]

const now = '2025-01-01T00:00:00Z'

function p(
  id: string,
  nombre: string,
  descripcion: string,
  catId: string,
  ficha: string,
  destacado = false
): Producto {
  const slug = nombre
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  return {
    id,
    nombre,
    descripcion,
    categoria_id: catId,
    marca: 'DISAGRO MR – Distribuciones Agroindustriales',
    unidad: null,
    imagen_url: null,
    disponible: true,
    destacado,
    slug,
    ficha_tecnica: ficha,
    created_at: now,
    updated_at: now,
    categorias: STATIC_CATEGORIAS.find(c => c.id === catId),
  }
}

export const STATIC_PRODUCTOS: Producto[] = [
  // ── MALLAS ─────────────────────────────────────────────────────────────────
  p('p-01', 'Malla Antiáfido', 'Malla control antiáfidos (trip) fabricada en PEAD para protección de invernaderos y viveros.', 'cat-mallas',
    '• Material: PEAD\n• Anchos: 3 m y 4 m × 100 m lineales\n• Referencias: 40, 50 y 55 mesh\n• Aditivada con filtros UV a 5 años\n• Color transparente',
    true),

  p('p-02', 'Malla Cortavientos', 'Evita la caída de frutos por impacto del viento, reduce la temperatura del cultivo y estimula la polinización.', 'cat-mallas',
    '• Evita la caída de frutos por impacto del viento\n• Disminuye la temperatura del cultivo por aireación\n• Estimula la polinización por la entrada del viento',
    true),

  p('p-03', 'Malla Control Granizo', 'Barrera física fabricada en hilos de monofilamento PEAD para proteger cultivos del daño ocasionado por el granizo.', 'cat-mallas',
    '• Material: hilos de monofilamento PEAD\n• Anchos: 4,5 m, 6,5 m y 9 m\n• Protección UV: 5 años',
    true),

  p('p-04', 'Malla Diamante', 'Malla plástica en PE de alta densidad especialmente diseñada para el secado del café.', 'cat-mallas',
    '• Material: PE alta densidad\n• Uso principal: secado de café'),

  p('p-05', 'Malla Gallinero', 'Mallas elaboradas con resina sintética para cerramientos en general. Aditivada con filtros UV, alta resistencia, no se oxida.', 'cat-mallas',
    '• Material: resina sintética\n• Aditivada con filtros UV\n• Alta resistencia\n• No se oxida\n• Uso: cerramientos en general'),

  p('p-06', 'Malla Antipájaro', 'Barrera física que impide la entrada de plagas y depredadores, permitiendo el ingreso de polinizadores a los cultivos.', 'cat-mallas',
    '• Barrera física anti-plagas y depredadores\n• Permite el ingreso de polinizadores\n• Usos: protección de cultivos, acuicultura'),

  p('p-07', 'Malla Cuadrada', 'Malla plástica multiusos para cerramiento de espacios como jardines, cultivos, patios y piscinas.', 'cat-mallas',
    '• Cerramiento de jardines, cultivos y patios\n• Separación de materiales livianos\n• Piscicultura'),

  p('p-08', 'Malla Soporte Planta', 'Mallas utilizadas para tutoreo de hortalizas, flores y cultivos especializados. Resistente a los rayos UV.', 'cat-mallas',
    '• Resistente a los rayos UV\n• Usos: tutoreo de hortalizas, flores, cultivos de cannabis y otros'),

  p('p-09', 'Malla Cerramiento', 'Malla plástica resistente para cerramientos de patios, jardines y confinamiento en granjas avícolas.', 'cat-mallas',
    '• Uso: cerramientos de patios y jardines\n• Confinamiento en granjas avícolas'),
]
