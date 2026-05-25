-- ===================================================
-- DISAGRO MR — Catálogo Digital — Schema inicial
-- ===================================================

-- Extensión para UUIDs
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- -----------------------------------------------
-- CATEGORÍAS
-- -----------------------------------------------
CREATE TABLE IF NOT EXISTS public.categorias (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre      text NOT NULL,
  descripcion text,
  icono       text DEFAULT '📦',
  slug        text UNIQUE NOT NULL,
  activa      boolean NOT NULL DEFAULT true,
  created_at  timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.categorias ENABLE ROW LEVEL SECURITY;

-- Lectura pública sin autenticación
CREATE POLICY "categorias_public_read"
  ON public.categorias FOR SELECT
  USING (activa = true);

-- -----------------------------------------------
-- PRODUCTOS
-- -----------------------------------------------
CREATE TABLE IF NOT EXISTS public.productos (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre        text NOT NULL,
  descripcion   text,
  categoria_id  uuid REFERENCES public.categorias(id) ON DELETE SET NULL,
  marca         text,
  unidad        text,
  imagen_url    text,
  disponible    boolean NOT NULL DEFAULT true,
  destacado     boolean NOT NULL DEFAULT false,
  slug          text UNIQUE NOT NULL,
  ficha_tecnica text,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.productos ENABLE ROW LEVEL SECURITY;

-- Lectura pública
CREATE POLICY "productos_public_read"
  ON public.productos FOR SELECT
  USING (disponible = true);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER productos_updated_at
  BEFORE UPDATE ON public.productos
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- -----------------------------------------------
-- COTIZACIONES
-- -----------------------------------------------
CREATE TABLE IF NOT EXISTS public.cotizaciones (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre_cliente  text NOT NULL,
  empresa         text,
  ciudad          text,
  telefono        text,
  email           text,
  mensaje         text,
  productos_ids   uuid[] NOT NULL DEFAULT '{}',
  estado          text NOT NULL DEFAULT 'pendiente'
                    CHECK (estado IN ('pendiente', 'atendida', 'descartada')),
  created_at      timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.cotizaciones ENABLE ROW LEVEL SECURITY;

-- Solo inserción pública (cualquiera puede enviar una solicitud)
CREATE POLICY "cotizaciones_public_insert"
  ON public.cotizaciones FOR INSERT
  WITH CHECK (true);

-- Lectura solo para service_role (administrador)
-- (No se crea policy SELECT para anon, solo service_role puede leer)

-- -----------------------------------------------
-- CONFIGURACIÓN DEL SITIO
-- -----------------------------------------------
CREATE TABLE IF NOT EXISTS public.configuracion (
  clave  text PRIMARY KEY,
  valor  text
);

ALTER TABLE public.configuracion ENABLE ROW LEVEL SECURITY;

-- Lectura pública
CREATE POLICY "configuracion_public_read"
  ON public.configuracion FOR SELECT
  USING (true);

-- -----------------------------------------------
-- DATOS DEMO — CATEGORÍAS
-- -----------------------------------------------
INSERT INTO public.categorias (nombre, descripcion, icono, slug) VALUES
  ('Agroquímicos',   'Herbicidas, fungicidas e insecticidas para protección de cultivos', '🌿', 'agroquimicos'),
  ('Fertilizantes',  'Nutrición vegetal, abonos y enmiendas de suelos',                  '🌱', 'fertilizantes'),
  ('Semillas',       'Semillas certificadas y variedades mejoradas',                      '🌾', 'semillas'),
  ('Equipos',        'Herramientas y maquinaria para el campo',                           '🚜', 'equipos'),
  ('Riego',          'Sistemas e insumos para riego eficiente',                           '💧', 'riego'),
  ('Otros',          'Insumos varios del sector agroindustrial',                          '📦', 'otros')
ON CONFLICT (slug) DO NOTHING;

-- -----------------------------------------------
-- DATOS DEMO — CONFIGURACIÓN
-- -----------------------------------------------
INSERT INTO public.configuracion (clave, valor) VALUES
  ('telefono_contacto', 'Por confirmar'),
  ('email_contacto',    'Por confirmar'),
  ('whatsapp',          'Por confirmar'),
  ('ciudad',            'Colombia')
ON CONFLICT (clave) DO NOTHING;

-- -----------------------------------------------
-- DATOS DEMO — PRODUCTOS (15 productos de ejemplo)
-- -----------------------------------------------
DO $$
DECLARE
  cat_agro uuid;
  cat_ferti uuid;
  cat_semillas uuid;
  cat_equipos uuid;
  cat_riego uuid;
BEGIN
  SELECT id INTO cat_agro     FROM public.categorias WHERE slug = 'agroquimicos';
  SELECT id INTO cat_ferti    FROM public.categorias WHERE slug = 'fertilizantes';
  SELECT id INTO cat_semillas FROM public.categorias WHERE slug = 'semillas';
  SELECT id INTO cat_equipos  FROM public.categorias WHERE slug = 'equipos';
  SELECT id INTO cat_riego    FROM public.categorias WHERE slug = 'riego';

  INSERT INTO public.productos (nombre, descripcion, categoria_id, marca, unidad, slug, destacado, ficha_tecnica) VALUES
    -- Agroquímicos
    ('Glifosato 480 SL',       'Herbicida sistémico de amplio espectro para control de malezas anuales y perennes.',     cat_agro,     'Dow AgroSciences', 'Litro',  'glifosato-480-sl',        true,  'Concentración: 480 g/L. Modo de acción: inhibición de EPSPS. Aplicación: foliar.'),
    ('Carbendazim 500 SC',     'Fungicida sistémico de amplio espectro contra hongos fitopatógenos.',                    cat_agro,     'Bayer',            'Litro',  'carbendazim-500-sc',      true,  'Concentración: 500 g/L. Acción preventiva y curativa. Cultivos: cereales, hortalizas, frutales.'),
    ('Clorpirifos 480 EC',     'Insecticida organofosforado para control de plagas masticadoras y chupadoras.',          cat_agro,     'Syngenta',         'Litro',  'clorpirifos-480-ec',      false, 'Concentración: 480 g/L. Cultivos: algodón, maíz, soya, arroz.'),
    ('2,4-D Amina 720 SL',     'Herbicida selectivo para control de malezas de hoja ancha en gramíneas.',               cat_agro,     'ARYSTA',           'Litro',  '2-4-d-amina-720-sl',      false, 'Concentración: 720 g/L. Uso en cultivos de maíz, caña, arroz y pastizales.'),
    ('Mancozeb 80 WP',         'Fungicida de contacto para prevención de enfermedades foliares en hortalizas y frutales.', cat_agro,   'Indofil',          'Kg',     'mancozeb-80-wp',          false, 'Concentración: 80%. Cubre: Phytophthora, Alternaria, Cercospora.'),

    -- Fertilizantes
    ('Urea 46% N',             'Fertilizante nitrogenado granulado de alta concentración para todo tipo de cultivos.',   cat_ferti,    'Ferticol',         'Bulto 50kg', 'urea-46-n',             true,  'Nitrógeno: 46%. Presentación: prills o granulada. Soluble en agua.'),
    ('DAP 18-46-0',            'Fosfato diamónico, fuente de nitrógeno y fósforo para establecimiento de cultivos.',     cat_ferti,    'Yara',             'Bulto 50kg', 'dap-18-46-0',           true,  'N: 18%, P2O5: 46%. Alta concentración de fósforo para raíces y germinación.'),
    ('KCl (Cloruro de Potasio)','Fertilizante potásico para mejorar calidad y resistencia de los cultivos.',             cat_ferti,    'ICL',              'Bulto 50kg', 'kcl-cloruro-potasio',   false, 'K2O: 60%. Mejora calidad de frutos, resistencia a enfermedades y estrés hídrico.'),
    ('Sulpomag 22-0-22',       'Fuente de potasio, magnesio y azufre de liberación controlada.',                         cat_ferti,    'K+S',              'Bulto 50kg', 'sulpomag-22-0-22',      false, 'K2O: 22%, MgO: 18%, S: 22%. Sin cloruro.'),

    -- Semillas
    ('Maíz Híbrido DK7088',    'Variedad de maíz amarillo de alto potencial productivo y resistencia a enfermedades.',   cat_semillas, 'Dekalb',           'Bulto 20kg', 'maiz-hibrido-dk7088',   true,  'Ciclo: 120-130 días. Potencial: 14-16 t/ha. Tolerante a Mal de Pollos.'),
    ('Arroz FL Fedearroz 733', 'Variedad de arroz de alta productividad y tolerancia al vaneamiento.',                   cat_semillas, 'Fedearroz',        'Bulto 40kg', 'arroz-fl-fedearroz-733',true,  'Ciclo: 95-100 días. Rendimiento: 7-9 t/ha. Resistente a Pyricularia.'),
    ('Soya Tecnisemillas 01',  'Variedad de soya adaptada a condiciones tropicales de Colombia.',                         cat_semillas, 'Tecnisemillas',    'Bulto 25kg', 'soya-tecnisemillas-01', false, 'Ciclo: 90 días. Contenido proteico: 38%. Resistente a roya asiática.'),

    -- Equipos
    ('Fumigadora de Espalda 20L', 'Bomba fumigadora manual con depósito de 20 litros para aplicación de agroquímicos.', cat_equipos, 'Matabi',           'Unidad',  'fumigadora-espalda-20l',  false, 'Capacidad: 20 L. Boquilla regulable. Correas ergonómicas acolchadas.'),

    -- Riego
    ('Manguera de Goteo',      'Sistema de riego por goteo para cultivos en campo abierto e invernadero.',               cat_riego,    'Netafim',          'Rollo 100m', 'manguera-goteo',        false, 'Gotero integrado cada 20 cm. Caudal: 1 L/h. Presión: 0.5-4 bar.'),
    ('Aspersor Impacto 360°',  'Aspersor de impacto para cobertura uniforme en cultivos extensivos.',                    cat_riego,    'Rain Bird',        'Unidad',  'aspersor-impacto-360',    false, 'Alcance: 8-12 m. Presión: 1.5-3.5 bar. Conexión: 1/2".')

  ON CONFLICT (slug) DO NOTHING;
END $$;
