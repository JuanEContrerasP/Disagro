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
  imagen: string | null = null,
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
    imagen_url: imagen,
    disponible: true,
    destacado,
    slug,
    ficha_tecnica: ficha,
    created_at: now,
    updated_at: now,
    categorias: STATIC_CATEGORIAS.find(c => c.id === catId),
  }
}

const img = (name: string) => `/images/productos/${name}`

export const STATIC_PRODUCTOS: Producto[] = [
  // ── MALLAS ─────────────────────────────────────────────────────────────────
  p('p-01', 'Malla Antiáfido', 'Malla control antiáfidos (trip) fabricada en PEAD para protección de invernaderos y viveros.', 'cat-mallas',
    '• Material: PEAD\n• Anchos: 3 m y 4 m × 100 m lineales\n• Referencias: 40, 50 y 55 mesh\n• Aditivada con filtros UV a 5 años\n• Color transparente',
    img('malla-antiafidos.jpg'), true),

  p('p-02', 'Malla Cortavientos', 'Evita la caída de frutos por impacto del viento, reduce la temperatura del cultivo y estimula la polinización.', 'cat-mallas',
    '• Evita la caída de frutos por impacto del viento\n• Disminuye la temperatura del cultivo por aireación\n• Estimula la polinización por la entrada del viento',
    img('malla-cortavientos.jpg'), true),

  p('p-03', 'Malla Control Granizo', 'Barrera física fabricada en hilos de monofilamento PEAD para proteger cultivos del daño ocasionado por el granizo.', 'cat-mallas',
    '• Material: hilos de monofilamento PEAD\n• Anchos: 4,5 m, 6,5 m y 9 m\n• Protección UV: 5 años',
    img('malla-antigranizo.jpg'), true),

  p('p-04', 'Malla Diamante', 'Malla plástica en PE de alta densidad especialmente diseñada para el secado del café.', 'cat-mallas',
    '• Material: PE alta densidad\n• Uso principal: secado de café',
    img('malla-diamante.jpg')),

  p('p-05', 'Malla Gallinero', 'Mallas elaboradas con resina sintética para cerramientos en general. Aditivada con filtros UV, alta resistencia, no se oxida.', 'cat-mallas',
    '• Material: resina sintética\n• Aditivada con filtros UV\n• Alta resistencia\n• No se oxida\n• Uso: cerramientos en general',
    img('malla-gallinero.jpg')),

  p('p-06', 'Malla Antipájaro', 'Barrera física que impide la entrada de plagas y depredadores, permitiendo el ingreso de polinizadores a los cultivos.', 'cat-mallas',
    '• Barrera física anti-plagas y depredadores\n• Permite el ingreso de polinizadores\n• Usos: protección de cultivos, acuicultura',
    img('malla-antipajaros.jpg')),

  p('p-07', 'Malla Cuadrada', 'Malla plástica multiusos para cerramiento de espacios como jardines, cultivos, patios y piscinas.', 'cat-mallas',
    '• Cerramiento de jardines, cultivos y patios\n• Separación de materiales livianos\n• Piscicultura',
    img('malla-cuadrada.jpg')),

  p('p-08', 'Malla Soporte Planta', 'Mallas utilizadas para tutoreo de hortalizas, flores y cultivos especializados. Resistente a los rayos UV.', 'cat-mallas',
    '• Resistente a los rayos UV\n• Usos: tutoreo de hortalizas, flores, cultivos de cannabis y otros',
    img('malla-soporte-planta.jpg')),

  p('p-09', 'Malla Cerramiento', 'Malla plástica resistente para cerramientos de patios, jardines y confinamiento en granjas avícolas.', 'cat-mallas',
    '• Uso: cerramientos de patios y jardines\n• Confinamiento en granjas avícolas',
    img('malla-cerramiento.jpg')),

  // ── TELAS ──────────────────────────────────────────────────────────────────
  p('p-10', 'Tela Cubresuelos', 'Mejora la productividad de los cultivos, controla el crecimiento de malezas y disminuye el consumo de agua y agroquímicos.', 'cat-telas',
    '• Mejora la productividad de los cultivos\n• Controla el crecimiento de malezas y plagas\n• Disminuye el consumo de agua y agroquímicos',
    img('tela-cubresuelos.jpg'), true),

  p('p-11', 'Tela Sombra Negra 65% y 80%', 'Tela de sombrío negra para manejo de luminosidad en cultivos. Disponible en 65% y 80% de sombra.', 'cat-telas',
    '• Color negra\n• Porcentajes: 65% y 80%\n• Protección UV: 24 meses\n• Ancho: 4 m × rollo de 100 m lineales',
    img('tela-sombrio.jpg'), true),

  p('p-12', 'Tela Cerramiento', 'Barrera visual que restringe el paso de personas y animales al área de trabajo, y sirve como barrera contra el polvo y la suciedad.', 'cat-telas',
    '• Barrera visual que restringe el paso de personas y animales\n• Barrera contra polvo y suciedad',
    img('tela-cerramiento.jpg'), true),

  p('p-13', 'Telas de Fibra Natural', 'Telas biodegradables que mantienen la humedad y reducen la temperatura, fáciles de instalar y mantener.', 'cat-telas',
    '• Biodegradables\n• Mantienen la humedad, absorbiendo hasta 4 veces su peso en agua\n• Reducen la temperatura por radiación\n• Fáciles de instalar y mantener',
    img('tela-de-fibra-natural.jpg')),

  p('p-14', 'Agrotextil', 'Manto geotextil biodegradable que se integra totalmente al suelo, recupera áreas degradadas y genera microclima.', 'cat-telas',
    '• Biodegradable, se integra totalmente al suelo\n• Facilita el paso moderado de la luz solar\n• Recupera áreas degradadas o quemadas, riveras de ríos, riachuelos y quebradas\n• Retiene y libera humedad, generando un microclima entre el suelo y el manto',
    img('agrotextil.jpg')),

  // ── HILOS Y SOGAS ──────────────────────────────────────────────────────────
  p('p-15', 'Hilos y Sogas de Fique', 'Elaborados con fibras 100% naturales, recubiertos con emulsión especial para mayor resistencia a la humedad y microorganismos.', 'cat-hilos',
    '• Elaborados con fibras 100% naturales\n• Recubiertos con emulsión especial para mayor resistencia a la humedad\n• Evitan el ataque de microorganismos',
    img('hilos-y-sogas-de-fique.jpg'), true),

  p('p-16', 'Hilos de Polipropileno', 'Hilos sintéticos de alta resistencia con colores más vivos, disponibles en diferentes presentaciones y resistentes a la humedad.', 'cat-hilos',
    '• Mayor resistencia\n• Colores más vivos\n• Diferentes presentaciones\n• Resistencia a la humedad',
    img('hilos-de-polipropileno.jpg'), true),

  p('p-17', 'Soga Pisadora', 'Soga en polipropileno de 5 mm altamente especializada, con aditivo UV a 2 años, alta flexibilidad y resistencia a altas temperaturas.', 'cat-hilos',
    '• Material: polipropileno 5 mm\n• Aditivo UV a 2 años\n• Altamente especializada y resistente\n• Alta flexibilidad y resistencia a altas temperaturas',
    img('soga-pisadora.jpg'), true),

  p('p-18', 'Sogas de Polipropileno', 'Alta resistencia a la tensión para elevar material, transportar herramientas y múltiples amarres en los sectores ganadero, marítimo, industrial y construcción.', 'cat-hilos',
    '• Alta resistencia a la tensión\n• Útiles para elevar material y transportar herramientas\n• Múltiples tipos de amarres\n• Usos: sectores ganadero, marítimo, terrestre, industrial y construcción',
    img('sogas-de-polipropileno.jpg'), true),

  p('p-19', 'Sogas Trenza Tipo C', 'Trenza de polipropileno de 8 y 16 cabos (19–21 mm), con alta vida útil, filtros UV y resistencia a la humedad, peso y tensión.', 'cat-hilos',
    '• Material: polipropileno\n• Conformada por 8 y 16 cabos según su espesor (19 mm – 21 mm)\n• Alta vida útil\n• Aditivada con filtros UV\n• Resistencia a la humedad, peso y tensión',
    img('sogas-trenza-tipo-c.jpg')),

  // ── CARTONPLAST ────────────────────────────────────────────────────────────
  p('p-20', 'Láminas en CartonPlast', 'Láminas corrugadas elaboradas con polipropileno al 100%, impermeables, livianas, reciclables y resistentes a agentes químicos.', 'cat-cartonplast',
    '• Elaborado con polipropileno al 100%\n• Impermeable\n• Inmune a hongos y bacterias\n• Liviano y moldeable\n• Permite troquelado y sellado por ultrasonido\n• Reciclable y resistente a agentes químicos',
    img('laminas-de-cartonplast.jpg'), true),

  // ── PLASTICULTURA Y EMPAQUES ───────────────────────────────────────────────
  p('p-21', 'Plásticos para Invernadero', 'Plástico para cubierta de invernaderos, aditivado con filtro UV a 24 meses. Disponible en diferentes calibres y anchos.', 'cat-estuches',
    '• Aditivado con filtro UV a 24 meses\n• Diferentes calibres y anchos',
    img('plasticos-para-invernadero.jpg'), true),

  p('p-22', 'Sacos de Polipropileno', 'Sacos de polipropileno laminados y sin laminar, en material 100% virgen de alta resistencia y fácil manejo.', 'cat-estuches',
    '• Laminados y sin laminar\n• Material 100% virgen de alta resistencia\n• Fácil manejo\n• Disponible 100% blanco o marcado a una o dos caras',
    img('sacos-de-polipropileno.jpg'), true),

  p('p-23', 'Saco Trinchera', 'Sacos reciclables de alta durabilidad con aditivo UV, flexibles y resistentes a factores hostiles del ambiente.', 'cat-estuches',
    '• Reciclables\n• Alta resistencia a factores hostiles o de alto riesgo en el ambiente\n• Flexibilidad\n• Alta durabilidad gracias al aditivo UV, que protege de los rayos intensos del sol',
    img('saco-trinchera.jpg'), true),

  p('p-24', 'Sacos Suelo Cemento', 'Sacos de alta resistencia a la compactación, biodegradables, que favorecen la revegetalización y se moldean fácilmente.', 'cat-estuches',
    '• Alta resistencia al procedimiento de compactación\n• Biodegradable\n• Favorece el proceso de revegetalización\n• No se desliza cuando se arma la estructura\n• Se deja moldear y compactar fácilmente',
    img('sacos-suelo-cemento.jpg'), true),

  p('p-25', 'Clamshell 125 g', 'Envase plástico termoformado en PET perforado. Transparente, reciclable. 100% protección y frescura.', 'cat-estuches',
    '• Material: PET perforado\n• Dimensiones: 108,25 × 106,5 × 31 mm\n• Capacidad aprox.: 125 g\n• Unidades por caja: 1.000\n• Transparente y reciclable',
    img('clamshell-125g.jpg')),

  p('p-26', 'Clamshell 250 g', 'Envase plástico termoformado en PET perforado. Transparente, reciclable. 100% protección y frescura.', 'cat-estuches',
    '• Material: PET perforado\n• Dimensiones: 123 × 126 × 59,6 mm\n• Capacidad aprox.: 250 g\n• Unidades por caja: 800\n• Transparente y reciclable',
    img('clamshell-250g.jpg')),

  p('p-27', 'Clamshell 500 g', 'Envase plástico termoformado en PET perforado. Transparente, reciclable. 100% protección y frescura.', 'cat-estuches',
    '• Material: PET perforado\n• Dimensiones: 119,25 × 182 × 70,9 mm\n• Capacidad aprox.: 500 g\n• Unidades por caja: 500\n• Transparente y reciclable',
    img('clamshell-500g.jpg')),
]
