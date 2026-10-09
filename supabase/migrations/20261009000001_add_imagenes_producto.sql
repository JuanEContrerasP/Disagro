-- ===================================================
-- DISAGRO MR — Galería de imágenes por producto
-- ===================================================

-- Imágenes adicionales (además de imagen_url) para mostrar
-- un carrusel en la ficha de producto.
ALTER TABLE public.productos
  ADD COLUMN IF NOT EXISTS imagenes text[] DEFAULT NULL;

-- Malla Diamante: agrega las 2 imágenes nuevas a la ya existente
UPDATE public.productos
SET imagenes = ARRAY[
  '/images/productos/malla-diamante-2.jpeg',
  '/images/productos/malla-diamante-3.jpeg'
]
WHERE slug = 'malla-diamante';
