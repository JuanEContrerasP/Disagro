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
    nombre: 'Estuches y Plasticultura',
    descripcion: '',
    icono: '📦',
    slug: 'estuches-plasticultura',
    activa: true,
    created_at: '2025-01-01T00:00:00Z',
  },
]

export const STATIC_PRODUCTOS: Producto[] = []
