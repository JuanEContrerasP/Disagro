'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import type { CotizacionInput } from '@/types'

export default function ContactoPage() {
  const [form, setForm] = useState<CotizacionInput>({
    nombre_cliente: '',
    empresa: '',
    ciudad: '',
    telefono: '',
    email: '',
    mensaje: '',
  })
  const [enviando, setEnviando] = useState(false)
  const [exito, setExito] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)
    setError('')

    try {
      const res = await fetch('/api/cotizaciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Error al enviar')
      }

      setExito(true)
      setForm({ nombre_cliente: '', empresa: '', ciudad: '', telefono: '', email: '', mensaje: '' })
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error al enviar la solicitud')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F4]">
      {/* Banner */}
      <div className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1920&q=80"
            alt="Campo agrícola"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1C2B1A]/78" />
        </div>
        <div className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Solicitar cotización</h1>
          <p className="text-gray-300 text-lg">
            Un asesor de DISAGRO MR te contactará a la brevedad.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formulario */}
          <div className="lg:col-span-2">
            {exito ? (
              <div className="bg-white rounded-xl border border-[#E2E8E0] p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8F5E2] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#3A6B35]" />
                </div>
                <h2 className="text-2xl font-bold text-[#1C2B1A] mb-2">¡Solicitud enviada!</h2>
                <p className="text-[#6B7280] mb-6">
                  Recibimos tu cotización. Un asesor te contactará pronto.
                </p>
                <button
                  onClick={() => setExito(false)}
                  className="px-6 py-2.5 bg-[#3A6B35] text-white rounded-lg font-semibold hover:bg-[#2D5228] transition-colors"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl border border-[#E2E8E0] p-8 space-y-5"
              >
                <h2 className="text-xl font-bold text-[#1C2B1A]">Datos de contacto</h2>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1C2B1A] mb-1.5">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="nombre_cliente"
                      value={form.nombre_cliente}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full px-3.5 py-2.5 border border-[#E2E8E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3A6B35]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1C2B1A] mb-1.5">
                      Empresa / Finca
                    </label>
                    <input
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de la empresa o finca"
                      className="w-full px-3.5 py-2.5 border border-[#E2E8E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3A6B35]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1C2B1A] mb-1.5">Ciudad</label>
                    <input
                      name="ciudad"
                      value={form.ciudad}
                      onChange={handleChange}
                      placeholder="Ciudad o municipio"
                      className="w-full px-3.5 py-2.5 border border-[#E2E8E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3A6B35]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1C2B1A] mb-1.5">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="Celular o fijo"
                      className="w-full px-3.5 py-2.5 border border-[#E2E8E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3A6B35]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1C2B1A] mb-1.5">
                    Correo electrónico
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    className="w-full px-3.5 py-2.5 border border-[#E2E8E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3A6B35]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1C2B1A] mb-1.5">
                    ¿Qué productos necesitas?
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe los productos, cantidades o cualquier detalle relevante..."
                    className="w-full px-3.5 py-2.5 border border-[#E2E8E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3A6B35] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full py-3 bg-[#3A6B35] text-white font-semibold rounded-lg hover:bg-[#2D5228] disabled:opacity-60 transition-colors"
                >
                  {enviando ? 'Enviando...' : 'Enviar solicitud de cotización'}
                </button>
              </form>
            )}
          </div>

          {/* Info de contacto */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-[#E2E8E0] p-6">
              <h3 className="font-bold text-[#1C2B1A] mb-4">Información de contacto</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8F5E2] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#3A6B35]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1C2B1A]">Teléfonos</p>
                    <a href="tel:+573102978679" className="block text-[#6B7280] hover:text-[#3A6B35] transition-colors">+57 310 297 8679</a>
                    <a href="tel:+573208327785" className="block text-[#6B7280] hover:text-[#3A6B35] transition-colors">+57 320 832 7785</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8F5E2] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#3A6B35]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1C2B1A]">Correo</p>
                    <a href="mailto:Comercial@disagromr.com" className="text-[#6B7280] hover:text-[#3A6B35] transition-colors">
                      Comercial@disagromr.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8F5E2] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#3A6B35]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1C2B1A]">Dirección</p>
                    <p className="text-[#6B7280]">Cra 3Este #3-39</p>
                    <p className="text-[#6B7280]">Mosquera, Cundinamarca</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#E8F5E2] rounded-xl border border-[#3A6B35]/20 p-6">
              <div className="w-10 h-10 rounded-full bg-[#3A6B35] flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold text-[#1C2B1A] mb-2">Tiempo de respuesta</h4>
              <p className="text-sm text-[#6B7280]">
                Respondemos en menos de 24 horas hábiles. Para urgencias, contáctanos directamente por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
