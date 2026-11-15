import { MessageCircle } from 'lucide-react';
import { buildDefaultWhatsAppUrl } from '../utils/whatsapp';

export function WhatsAppFloat() {
  const whatsappUrl = buildDefaultWhatsAppUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a DIREVA DIGITAL pelo WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 inline-flex items-center justify-center gap-2.5 h-11 w-11 md:h-12 md:w-auto md:px-5 rounded-full bg-[#FF6500] text-white shadow-lg shadow-black/50 hover:bg-[#e55a00] active:scale-[0.97] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden md:inline text-sm font-semibold whitespace-nowrap">
        Falar no WhatsApp
      </span>
    </a>
  );
}
