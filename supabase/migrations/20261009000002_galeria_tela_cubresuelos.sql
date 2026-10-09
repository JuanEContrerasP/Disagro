-- ===================================================
-- DISAGRO MR — Galería de imágenes: Tela Cubresuelos
-- ===================================================

UPDATE public.productos
SET imagenes = ARRAY[
  '/images/productos/tela-cubresuelos-2.jpeg',
  '/images/productos/tela-cubresuelos-3.jpeg'
]
WHERE slug = 'tela-cubresuelos';
