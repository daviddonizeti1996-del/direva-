import { Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BRAND, NAV_ITEMS } from '../data/landingContent';
import { buildDefaultWhatsAppUrl } from '../utils/whatsapp';
import { BrandLogo } from './BrandLogo';
import type { LegalDocumentType } from './PrivacyModal';

interface FooterProps {
  onOpenLegal: (type: LegalDocumentType) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = buildDefaultWhatsAppUrl();

  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500] rounded-sm"
            >
              <BrandLogo />
            </a>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              {BRAND.slogan}
            </p>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Estratégias de tráfego pago e gestão de presença digital local no Google
              para empresas que buscam previsibilidade e novos clientes.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider text-neutral-300 uppercase">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Channels Column */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider text-neutral-300 uppercase">
              Contato Comercial
            </h3>
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-xl bg-[#171717] border border-white/10 px-4 py-3 hover:border-[#FF6500]/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#FF6500] shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-xs text-neutral-400">WhatsApp Comercial</div>
                    <div className="text-sm font-medium text-white tabular-nums">
                      {BRAND.whatsappDisplay}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FF6500] transition-colors" aria-hidden="true" />
              </a>

              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-xl bg-[#171717] border border-white/10 px-4 py-3 hover:border-[#FF6500]/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-[#FF6500] shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-xs text-neutral-400">Instagram</div>
                    <div className="text-sm font-medium text-white">
                      DIREVA DIGITAL
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FF6500] transition-colors" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {currentYear} {BRAND.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500] rounded-sm"
            >
              Política de Privacidade
            </button>
            <span aria-hidden="true" className="text-neutral-600">
              ·
            </span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500] rounded-sm"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
