'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E2E8E0] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.jpeg"
              alt="DISAGRO MR"
              width={48}
              height={48}
              className="rounded-md object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-[#3A6B35] leading-none">DISAGRO MR</p>
              <p className="text-xs text-[#6B7280] leading-none mt-0.5">Distribuciones Agroindustriales</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1C2B1A] hover:text-[#3A6B35] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contacto"
              className="px-4 py-2 text-sm font-semibold bg-[#3A6B35] text-white rounded-lg hover:bg-[#2D5228] transition-colors"
            >
              Cotizar ahora
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-[#3A6B35]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#E2E8E0] py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-2.5 text-sm font-medium text-[#1C2B1A] hover:text-[#3A6B35] hover:bg-[#E8F5E2] rounded-md transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-2 block text-center px-4 py-2 text-sm font-semibold bg-[#3A6B35] text-white rounded-lg hover:bg-[#2D5228] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Cotizar ahora
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
