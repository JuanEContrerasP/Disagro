-- Cambia productos_ids de uuid[] a text[] para soportar IDs estáticos y UUIDs
ALTER TABLE public.cotizaciones
  ALTER COLUMN productos_ids TYPE text[] USING ARRAY[]::text[];
