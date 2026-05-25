# DISAGRO MR — Catálogo Digital 🌱

Plataforma web de catálogo digital para **Distribuciones Agroindustriales MR (DISAGRO MR)**, empresa colombiana especializada en la redistribución de insumos y productos para el sector agro.

---

## ✨ Funcionalidades implementadas

- **Home** — Hero con foto de campo, 6 categorías de producto, sección de valores y CTA de cotización
- **Catálogo** — Grilla de productos con búsqueda por nombre y filtro por categoría (sidebar desktop + chips móvil)
- **Detalle de producto** — Imagen, ficha técnica, disponibilidad, productos relacionados y breadcrumb
- **Nosotros** — Misión, visión, valores corporativos y portafolio de líneas
- **Contacto / Cotización** — Formulario con validación que guarda solicitudes en Supabase
- **Header** — Navbar fija con logo, links y menú hamburguesa responsive
- **Footer** — Logo, navegación, teléfonos, correo y dirección real

---

## 🛠️ Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | Next.js 16 + React 19 + TypeScript |
| Estilos | Tailwind CSS v4 |
| Iconos | Lucide React |
| Backend | Next.js API Routes (`app/api/`) |
| Base de datos | Supabase (PostgreSQL) |
| Auth (admin) | Supabase Auth |
| Storage | Supabase Storage (imágenes de productos) |
| Despliegue | Vercel |

---

## 🎨 Identidad visual

| Token | Hex | Uso |
|-------|-----|-----|
| `green-primary` | `#3A6B35` | Headers, CTAs, nav activo |
| `green-accent` | `#5B9B2F` | Badges, iconos, hover |
| `green-light` | `#E8F5E2` | Fondos de tarjetas y secciones |
| `white` | `#FFFFFF` | Fondo general |
| `gray-soft` | `#F5F5F4` | Superficies secundarias |
| `gray-border` | `#E2E8E0` | Bordes |
| `dark-text` | `#1C2B1A` | Títulos y texto principal |

**Tipografía:** Inter (cuerpo) + Plus Jakarta Sans (títulos)
**Logo:** `/public/logo.jpeg`

---

## 🗄️ Base de datos Supabase

### Tablas

| Tabla | Descripción |
|-------|-------------|
| `categorias` | Categorías de productos (agroquímicos, fertilizantes, etc.) |
| `productos` | Catálogo completo con imagen, ficha técnica, disponibilidad |
| `cotizaciones` | Solicitudes enviadas desde el formulario de contacto |
| `configuracion` | Parámetros globales del sitio (teléfono, correo, dirección) |

### RLS
- `categorias` y `productos` — lectura pública sin autenticación
- `cotizaciones` — solo inserción pública; lectura solo con `service_role`
- `configuracion` — lectura pública

### Migración inicial
```
supabase/migrations/20260525000001_initial_schema.sql
```
Incluye schema completo + 6 categorías demo + 15 productos demo.

---

## 🔌 Endpoints API

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/productos` | Lista productos (`?q=`, `?categoria=`, `?destacado=true`) |
| `GET` | `/api/productos/[slug]` | Detalle de un producto |
| `GET` | `/api/categorias` | Lista categorías activas |
| `POST` | `/api/cotizaciones` | Registrar solicitud de cotización |
| `GET` | `/api/config` | Leer configuración del sitio |

---

## 📁 Estructura del proyecto

```
Disagro/
├── public/
│   └── logo.jpeg                  # Logo oficial DISAGRO MR
├── src/
│   ├── app/
│   │   ├── (catalog)/             # Rutas públicas
│   │   │   ├── page.tsx           # Home
│   │   │   ├── catalogo/
│   │   │   │   ├── page.tsx       # Listado con filtros
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx   # Detalle de producto
│   │   │   ├── nosotros/
│   │   │   │   └── page.tsx
│   │   │   └── contacto/
│   │   │       └── page.tsx
│   │   ├── api/                   # Backend endpoints
│   │   │   ├── productos/route.ts
│   │   │   ├── productos/[slug]/route.ts
│   │   │   ├── categorias/route.ts
│   │   │   ├── cotizaciones/route.ts
│   │   │   └── config/route.ts
│   │   ├── globals.css            # Tokens de color y tipografía
│   │   └── layout.tsx             # Layout raíz con SEO
│   ├── components/
│   │   ├── Header.tsx             # Navbar fija con menú móvil
│   │   ├── Footer.tsx             # Footer con datos de contacto
│   │   └── ProductCard.tsx        # Tarjeta de producto
│   ├── lib/
│   │   └── supabase.ts            # Clientes Supabase browser + server
│   └── types/
│       └── index.ts               # Tipos TypeScript
├── supabase/
│   └── migrations/
│       └── 20260525000001_initial_schema.sql
├── .env.local                     # Variables de entorno (no subir a git)
└── README.md
```

---

## 🚀 Setup local

```bash
# 1. Clonar e instalar
git clone https://github.com/JuanEContrerasP/Disagro.git
cd Disagro
npm install

# 2. Variables de entorno
cp .env.local.example .env.local
# Llenar con las credenciales de Supabase

# 3. Aplicar migración en Supabase SQL Editor
# Ejecutar: supabase/migrations/20260525000001_initial_schema.sql

# 4. Correr en desarrollo
npm run dev
```

---

## 🔒 Variables de entorno

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

---

## 📞 Contacto DISAGRO MR

| Canal | Dato |
|-------|------|
| Teléfono 1 | +57 310 297 8679 |
| Teléfono 2 | +57 320 832 7785 |
| Correo | Comercial@disagromr.com |
| Dirección | Cra 3Este #3-39, Mosquera, Cundinamarca |

---

## 📊 Roadmap

- [x] Fase 1 — Setup Next.js + Tailwind + Supabase
- [x] Fase 2 — Schema BD con datos demo
- [x] Fase 3 — Endpoints API funcionales
- [x] Fase 4 — Catálogo público (Home, Catálogo, Detalle, Nosotros, Contacto)
- [ ] Fase 5 — Panel administrador (CRUD productos + gestión cotizaciones)
- [ ] Fase 6 — SEO avanzado, PWA y optimización de imágenes
- [ ] Futuro — Integración WhatsApp Business API
- [ ] Futuro — Módulo de pedidos en línea

---

*DISAGRO MR — Insumos del campo, con respaldo de expertos.*
