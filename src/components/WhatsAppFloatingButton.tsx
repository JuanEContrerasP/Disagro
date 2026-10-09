import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = `https://wa.me/573102978679?text=${encodeURIComponent('Hola DISAGRO MR, quiero más información.')}`

export function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea con un asesor por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1ebe5d] hover:scale-105 transition-all"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
