import { ArrowRight, Briefcase, Layers, MapPin, Star } from 'lucide-react';
import { motion } from 'motion/react';
import {
  LOCAL_PRESENCE_HIGHLIGHTS,
  type LocalPresenceHighlight,
} from '../data/landingContent';

interface LocalPresenceSectionProps {
  onSelectLocalPresence: () => void;
}

const HIGHLIGHT_ICONS: Record<LocalPresenceHighlight['iconName'], typeof MapPin> = {
  'map-pin': MapPin,
  briefcase: Briefcase,
  star: Star,
  layers: Layers,
};

export function LocalPresenceSection({
  onSelectLocalPresence,
}: LocalPresenceSectionProps) {
  return (
    <section
      id="presenca-google"
      className="border-t border-white/10 bg-[#050505] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#171717] via-[#121212] to-[#0a0a0a] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Strategic Explanation */}
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs sm:text-sm font-medium text-[#FF6500]">
                Presença Digital Local · Google Meu Negócio
              </p>

              <h2 className="font-display text-balance text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                SEJA ENCONTRADO POR QUEM ESTÁ PROCURANDO PELO SEU NEGÓCIO.
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Todos os dias, clientes da sua cidade pesquisam no Google exatamente pelo
                serviço ou produto que sua empresa oferece. Quando o Perfil da Empresa no
                Google está incompleto, desatualizado ou mal posicionado, essas
                oportunidades acabam indo para o concorrente.
              </p>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Na DIREVA DIGITAL, unimos a força das campanhas de tráfego pago à gestão
                estratégica do seu Perfil da Empresa no Google — fortalecendo sua
                autoridade local e facilitando que novos clientes encontrem, confiem e
                entrem em contato com o seu negócio.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onSelectLocalPresence}
                  className="group inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 py-3 rounded-lg bg-[#FF6500] text-sm font-semibold text-white hover:bg-[#e55a00] active:scale-[0.98] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
                >
                  <span>Quero melhorar minha presença no Google</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            {/* Right 2x2 Highlights Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LOCAL_PRESENCE_HIGHLIGHTS.map((item, index) => {
                const Icon = HIGHLIGHT_ICONS[item.iconName];
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="rounded-xl bg-[#050505] border border-white/10 p-5 sm:p-6"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#171717] border border-white/10 text-[#FF6500]">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-base sm:text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
