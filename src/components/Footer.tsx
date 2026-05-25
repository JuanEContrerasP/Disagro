import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1C2B1A] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpeg"
                alt="DISAGRO MR"
                width={48}
                height={48}
                className="rounded-md object-contain bg-white p-1"
              />
              <div>
                <p className="font-bold text-[#5B9B2F]">DISAGRO MR</p>
                <p className="text-xs text-gray-400">Distribuciones Agroindustriales</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Insumos del campo con respaldo de expertos. Conectamos el conocimiento agroindustrial con el productor colombiano.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/catalogo', label: 'Catálogo' },
                { href: '/nosotros', label: 'Nosotros' },
                { href: '/contacto', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#5B9B2F] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#5B9B2F] shrink-0 mt-0.5" />
                <span>Cra 3Este #3-39, Mosquera, Cundinamarca</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5B9B2F] shrink-0" />
                <span>+57 310 297 8679</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5B9B2F] shrink-0" />
                <span>+57 320 832 7785</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5B9B2F] shrink-0" />
                <span>Comercial@disagromr.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} DISAGRO MR — Distribuciones Agroindustriales MR. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
