import { ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/landingContent';

interface ServicesSectionProps {
  onSelectServiceObjective: (objective: string) => void;
}

export function ServicesSection({ onSelectServiceObjective }: ServicesSectionProps) {
  return (
    <section
      id="servicos"
      className="border-t border-white/10 bg-[#080808] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#FF6500] mb-3">
              Soluções em Tráfego Pago e Presença no Google
            </p>
            <h2 className="font-display text-balance text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Estratégia em anúncios pagos e visibilidade local para gerar oportunidades.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed">
            Atuamos na criação e gestão de campanhas de mídia paga e no gerenciamento
            completo do Perfil da Empresa no Google para destacar seu negócio.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {SERVICES.map((service, index) => {
            const isWide = index === 0 || index === 3;
            const spanClass = isWide ? 'lg:col-span-7' : 'lg:col-span-5';
            const hasManyDeliverables = service.deliverables.length > 4;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${spanClass} flex flex-col justify-between rounded-2xl border p-6 sm:p-8 transition-colors duration-150 ${
                  service.featured
                    ? 'bg-gradient-to-br from-[#171717] via-[#171717] to-[#1f120a] border-white/15 hover:border-[#FF6500]/45'
                    : 'bg-[#171717] border-white/10 hover:border-white/25'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono tabular-nums text-xs font-semibold text-[#FF6500]">
                      {service.number}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {service.description}
                  </p>

                  <ul
                    className={`mt-6 border-t border-white/10 pt-5 ${
                      hasManyDeliverables
                        ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5'
                        : 'space-y-2.5'
                    }`}
                  >
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-neutral-300"
                      >
                        <Check
                          className="w-4 h-4 text-[#FF6500] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectServiceObjective(service.objectivePreset)}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#FF6500] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500] rounded-sm"
                  >
                    <span>Solicitar plano para {service.title}</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#FF6500] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
