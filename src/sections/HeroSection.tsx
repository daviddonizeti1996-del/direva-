import { useState } from 'react';
import { ArrowRight, MessageCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import heroVisual from '../assets/images/hero_direva_performance_1794765348504.jpg';
import { BRAND } from '../data/landingContent';
import { buildDefaultWhatsAppUrl } from '../utils/whatsapp';

interface HeroSectionProps {
  onPrimaryCtaClick: () => void;
}

export function HeroSection({ onPrimaryCtaClick }: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);
  const whatsappUrl = buildDefaultWhatsAppUrl();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#050505] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Subtle top-right radial ambient glow in #FF6500 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[520px] rounded-full bg-[#FF6500]/12 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-10 lg:gap-12">
          {/* Left Copy Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#FF6500] mb-4">
              Tráfego Pago · Estratégia · Performance
            </p>

            <h1
              className="font-display text-balance font-bold tracking-tight text-white leading-[1.08]"
              style={{ fontSize: 'clamp(2.15rem, 4vw, 3.5rem)' }}
            >
              SUA EMPRESA MERECE MAIS CLIENTES. NÓS CRIAMOS O CAMINHO.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Transformamos estratégia em oportunidades. Atraia pessoas interessadas no
              seu negócio com campanhas inteligentes de tráfego pago e gestão estratégica
              da sua presença local no Google.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                onClick={onPrimaryCtaClick}
                className="group inline-flex items-center justify-center gap-2.5 min-h-[48px] px-7 py-3.5 rounded-lg bg-[#FF6500] text-sm font-semibold tracking-wide text-white hover:bg-[#e55a00] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
              >
                <span>QUERO CRESCER COM A DIREVA</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3.5 rounded-lg border border-white/15 bg-[#171717]/70 text-sm font-medium text-neutral-200 hover:text-white hover:border-white/30 hover:bg-[#171717] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500]"
              >
                <MessageCircle className="w-4 h-4 text-[#FF6500]" aria-hidden="true" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-400">
              <span>Meta Ads</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Google Ads</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Google Meu Negócio</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Presença Digital Local</span>
            </div>
          </div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full min-h-[280px] lg:min-h-full rounded-2xl overflow-hidden border border-white/10 bg-[#171717]">
              {!imageError ? (
                <img
                  src={heroVisual}
                  alt="Direção estratégica e performance em campanhas digitais da DIREVA DIGITAL"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#171717] via-[#0d0d0d] to-[#050505]">
                  <TrendingUp className="w-10 h-10 text-[#FF6500] mb-3" aria-hidden="true" />
                  <span className="text-sm font-medium text-neutral-300 text-center">
                    {BRAND.name}
                  </span>
                </div>
              )}
              {/* Measured scrim for edge blending */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-[#050505]/20"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-medium text-neutral-300">
                  {BRAND.slogan}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
