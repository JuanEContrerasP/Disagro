import type { Categoria, Producto } from '@/types'

export const STATIC_CATEGORIAS: Categoria[] = [
  {
    id: 'cat-mallas',
    nombre: 'Mallas Agrícolas',
    descripcion: 'Mallas plásticas para protección, cerramiento y soporte de cultivos',
    icono: '🌿',
    slug: 'mallas-agricolas',
    activa: true,
    created_at: '2025-01-01T00:00:00Z',
  },
  {
    id: 'cat-empaques',
    nombre: 'Mallas y Estuches',
    descripcion: 'Empaques clamshell y estuches para frutas y verduras',
    icono: '📦',
    slug: 'mallas-estuches',
    activa: true,
    created_at: '2025-01-01T00:00:00Z',
  },
  {
    id: 'cat-telas',
    nombre: 'Telas, Plasticultura e Hilos',
    descripcion: 'Telas agrícolas, plásticos para invernadero y sogas de polipropileno',
    icono: '🧵',
    slug: 'telas-plasticultura',
    activa: true,
    created_at: '2025-01-01T00:00:00Z',
  },
  {
    id: 'cat-infra',
    nombre: 'Ingeniería e Infraestructura',
    descripcion: 'Materiales para obras, estabilización de suelos y geotextiles',
    icono: '🏗️',
    slug: 'infraestructura',
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
    marca: 'Grupo Excala',
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
  // ── MALLAS AGRÍCOLAS ────────────────────────────────────────────────────
  p('p-01', 'Malla Diamante', 'Malla plástica en PE de alta densidad diseñada para el secado del café y clasificación de granos.', 'cat-mallas',
    'Material: PE alta densidad • Usos: secado de café, clasificación de granos', true),

  p('p-02', 'Malla Gallinero', 'Mallas elaboradas con resina sintética para cerramientos en general. Aditivada con filtros UV, alta resistencia, no se oxida.', 'cat-mallas',
    'Aditivada con filtros UV • No se oxida • Usos: cerramientos, corrales avícolas', true),

  p('p-03', 'Malla Antipájaro', 'Barrera física que impide la entrada de plagas y depredadores, permitiendo el ingreso de polinizadores a los cultivos.', 'cat-mallas',
    'Barrera física anti-plagas • Permite polinizadores • Usos: protección de cultivos, acuicultura'),

  p('p-04', 'Malla Antiinsecto', 'Malla plástica para cerramiento de espacios, evitando el ingreso de insectos y plagas en invernaderos y viveros.', 'cat-mallas',
    'Cerramiento de espacios • Prevención de insectos • Usos: invernaderos, viveros'),

  p('p-05', 'Malla Cuadrada', 'Malla plástica multiusos en múltiples colores. Cerramiento de jardines, cultivos, patios, piscinas y separación de materiales.', 'cat-mallas',
    'Múltiples colores • Usos: jardines, cultivos, piscicultura, separación de materiales'),

  p('p-06', 'Malla Soporte Planta', 'Mallas UV para tutoreo de hortalizas, flores y cultivos especializados. Resistente a rayos UV.', 'cat-mallas',
    'Resistente UV • Usos: tutoreo de hortalizas, flores, cultivos especializados'),

  p('p-07', 'Malla Cerramiento', 'Malla plástica resistente para cerramientos exteriores y confinamiento animal en granjas avícolas.', 'cat-mallas',
    'Alta resistencia • Usos: patios, jardines, granjas avícolas'),

  // ── EMPAQUES CLAMSHELL ─────────────────────────────────────────────────
  p('p-08', 'Clamshell 125g (a granel)', 'Envase plástico termoformado transparente y reciclable para frutas pequeñas. PET perforado. 1.000 unidades por caja.', 'cat-empaques',
    'Material: PET perforado • Dimensiones: 108,25×106,5×31 mm • 1.000 uds/caja', true),

  p('p-09', 'Clamshell 250g (a granel)', 'Envase termoformado para frutas medianas como tomate cherry. PET perforado. 800 unidades por caja.', 'cat-empaques',
    'Material: PET perforado • Dimensiones: 123×126×59,6 mm • 800 uds/caja'),

  p('p-10', 'Clamshell 500g (a granel)', 'Envase termoformado de mayor capacidad para uvas y frutos mixtos. PET perforado. 500 unidades por caja.', 'cat-empaques',
    'Material: PET perforado • Dimensiones: 119,25×182×70,9 mm • 500 uds/caja'),

  p('p-11', 'Estuche AL 112 — 125g', 'Estuche individual termoformado para uchuva y fresas de exportación. PET perforado. 100 unidades por paquete.', 'cat-empaques',
    'Material: PET perforado • Dimensiones: 10,5×10,5×4 cm • 100 uds/paquete'),

  p('p-12', 'Estuche AL 118 — 125g', 'Estuche rectangular para mora, arándano y frambuesa. PET perforado. 100 unidades por paquete.', 'cat-empaques',
    'Material: PET perforado • Dimensiones: 10,7×7,7×4,4 cm • 100 uds/paquete'),

  p('p-13', 'Estuche AL 200 — 175g', 'Estuche de tamaño medio para uchuva premium o tomate cherry de exportación. PET perforado.', 'cat-empaques',
    'Material: PET perforado • Dimensiones: 12,8×14,4×3,7 cm • 100 uds/paquete'),

  p('p-14', 'Estuche AL 114 — 250g', 'Estuche profundo para tomate cherry y frutas medianas en presentación retail. PET perforado.', 'cat-empaques',
    'Material: PET perforado • Dimensiones: 12,7×8,9×7 cm • 100 uds/paquete'),

  p('p-15', 'Estuche AL 119B — 400g', 'Estuche de perfil bajo para frutas grandes tipo tomate y fresa en bandeja. PET perforado.', 'cat-empaques',
    'Material: PET perforado • Dimensiones: 18×10×5,8 cm • 100 uds/paquete'),

  p('p-16', 'Estuche AL 119 — 500g', 'Estuche de altura estándar para fresas y frutas grandes en presentación premium. PET perforado.', 'cat-empaques',
    'Material: PET perforado • Dimensiones: 18×10×7,6 cm • 100 uds/paquete'),

  p('p-17', 'Clamshell Redondo 500g', 'Envase redondo de alta resistencia al rasgado para lechugas y verduras de hoja. Apto para temperatura fría.', 'cat-empaques',
    'Diámetro: 16 cm × Alto: 10,5 cm • Resistencia ALTA al rasgado • Contacto directo con alimentos'),

  // ── TELAS, PLASTICULTURA E HILOS ───────────────────────────────────────
  p('p-18', 'Tela Cubresuelos', 'Tela agrícola que mejora la productividad, controla malezas y disminuye el consumo de agua y agroquímicos.', 'cat-telas',
    'Controla malezas y plagas • Reduce consumo de agua y agroquímicos • Larga vida útil', true),

  p('p-19', 'Tela Cerramiento', 'Barrera visual de tela para obras y cultivos. Restringe el paso de personas y animales, bloquea el polvo.', 'cat-telas',
    'Barrera visual y contra polvo • Resistente a la intemperie • Fácil instalación'),

  p('p-20', 'Tela Antiáfido / Anti-Trip', 'Malla PEAD de control de plagas para invernadero. Referencias 40, 50 y 55 mesh. UV a 5 años. Anchos 3 y 4 m.', 'cat-telas',
    'Material: PEAD • Anchos: 3 m y 4 m × 100 m lineales • Refs: 40, 50 y 55 mesh • UV a 5 años', true),

  p('p-21', 'Malla Control Granizo', 'Barrera física en monofilamento PEAD para proteger cultivos del daño por granizo. UV a 5 años. Anchos 4,5 m y 9 m.', 'cat-telas',
    'Material: monofilamento PEAD • Anchos: 4,5 m y 9 m • UV a 5 años'),

  p('p-22', 'Tela Cortavientos', 'Tela porosa que evita caída de frutos, reduce temperatura y estimula la polinización en cultivos a cielo abierto.', 'cat-telas',
    'Evita caída de frutos • Reduce temperatura • Estimula polinización'),

  p('p-23', 'Telas de Fibra Natural', 'Telas biodegradables que absorben hasta 4× su peso en agua, reducen temperatura y favorecen la revegetalización.', 'cat-telas',
    '100% biodegradable • Absorción hasta 4× su peso • Reduce temperatura por radiación'),

  p('p-24', 'Tela Sombra Negra 65% y 80%', 'Tela de sombrío negra para manejo de luminosidad. UV 24 meses. Ancho 4 m × rollo de 100 m lineales.', 'cat-telas',
    'Color negro • Porcentajes: 65% y 80% • UV: 24 meses • Ancho: 4 m × 100 m'),

  p('p-25', 'Plásticos para Invernadero', 'Plásticos de alta claridad para cubiertas de invernadero y acolchado de suelo (mulching). Múltiples calibres.', 'cat-telas',
    'Cubierta de invernaderos • Acolchado de suelos (mulching) • Múltiples calibres y colores'),

  p('p-26', 'Sacos de Polipropileno', 'Sacos industriales 100% virgen laminados o sin laminar para empaque de granos, fertilizantes y semillas.', 'cat-telas',
    'Material 100% virgen • Laminados y sin laminar • Disponible blanco o marcado a 1-2 caras'),

  p('p-27', 'Hilos y Sogas de Fique', 'Hilos de fibra natural 100% con emulsión especial para mayor resistencia a la humedad y microorganismos.', 'cat-telas',
    'Fibras 100% naturales • Emulsión anti-humedad • Evita microorganismos'),

  p('p-28', 'Hilos de Polipropileno', 'Hilos sintéticos de alta resistencia y colores vivos. Resistentes a la humedad. Múltiples presentaciones.', 'cat-telas',
    'Alta resistencia • Colores vivos y permanentes • Resistencia a la humedad'),

  p('p-29', 'Soga Matizada Negra', 'Soga de polipropileno para ganadería y encarpado. Diámetros 6-14 mm / Resistencias hasta 877 kgf.', 'cat-telas',
    'Diámetros: 6-8-10-12-14 mm • Resistencias: 315/388/487/583/877 kgf • Aditivo UV'),

  p('p-30', 'Soga Media Tenacidad', 'Soga multiusos en amarillo, azul y rojo. Diámetros 6-12 mm. Resistencias hasta 450 kgf.', 'cat-telas',
    'Diámetros: 6-8-10-12 mm • Resistencias: 209/338/434/450 kgf • Colores: amarillo, azul, rojo'),

  p('p-31', 'Soga Alta Resistencia', 'Soga para ganadería pesada y amarre de embarcaciones. Diámetros 6-12 mm / Resistencias hasta 796 kgf.', 'cat-telas',
    'Diámetros: 6-8-10-12 mm • Resistencias: 416/322/522/796 kgf • Colores: blanco, negro, rojo'),

  p('p-32', 'Soga Ganafull', 'Soga multipropósito para ganadería, transporte y encarpado. Diámetros 6-12 mm / hasta 796 kgf.', 'cat-telas',
    'Diámetros: 6-8-10-12 mm • Resistencias: 416/322/522/796 kgf • Colores: blanco, negro, rojo'),

  p('p-33', 'Soga Pisadora', 'Soga especializada de polipropileno azul de 5 mm. Aditivo UV a 2 años. Alta flexibilidad y resistencia a temperatura.', 'cat-telas',
    'Polipropileno 5 mm • Aditivo UV a 2 años • Alta flexibilidad y resistencia térmica • Color azul'),

  // ── INFRAESTRUCTURA ────────────────────────────────────────────────────
  p('p-34', 'Láminas CartonPlast', 'Láminas corrugadas de polipropileno 100%. Impermeables, livianas, moldeables, reciclables y resistentes a químicos.', 'cat-infra',
    'Polipropileno 100% • Impermeable • Troquelable y sellable por ultrasonido • Reciclable', true),

  p('p-35', 'Agrotextil', 'Manto geotextil biodegradable para revegetalización. Se integra al suelo, retiene humedad y genera microclima.', 'cat-infra',
    '100% biodegradable • Se integra al suelo • Retiene humedad • Recupera áreas degradadas', true),

  p('p-36', 'Sacos Suelo Cemento', 'Sacos de fique biodegradables para estabilización de suelos y taludes. Alta resistencia a la compactación.', 'cat-infra',
    'Alta resistencia a compactación • Biodegradable • Favorece revegetalización • No se desliza'),

  p('p-37', 'Saco Trinchera', 'Sacos plásticos reciclables para obras de contención e inundaciones. Aditivo UV, alta durabilidad y flexibilidad.', 'cat-infra',
    'Reciclable • Aditivo UV • Alta resistencia a factores hostiles del ambiente • Flexible'),

  p('p-38', 'Malla Rockshield', 'Malla para revestimiento de tuberías en oleoductos y gaseoductos. No se oxida. Resistente a fungicidas y químicos.', 'cat-infra',
    'Revestimiento de oleoductos y gaseoductos • No se oxida • Resistente a fungicidas y químicos'),

  p('p-39', 'Tela Cerramiento (Obras)', 'Tela naranja de alta visibilidad para delimitación en obras civiles. Barrera visual y contra polvo.', 'cat-infra',
    'Alta visibilidad • Barrera visual y contra polvo • Resistente a intemperie'),

  p('p-40', 'Sogas Polipropileno Industrial', 'Sogas de alta resistencia a la tensión para elevar material, transportar herramientas y amarres industriales.', 'cat-infra',
    'Alta resistencia a la tensión • Múltiples tipos de amarres • Sectores ganadero, marítimo, industrial'),

  p('p-41', 'Soga Trenza Tipo C', 'Trenza de polipropileno de 8 y 16 cabos (19-21 mm). Alta vida útil, UV, resistencia al peso, humedad y tensión.', 'cat-infra',
    'Conformada por 8 y 16 cabos • Espesores: 19-21 mm • Aditivo UV • Alta resistencia al peso y tensión'),
]
