import { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import strategyVisual from '../assets/images/strategy_direva_workspace_1794765349494.jpg';
import { PROCESS_STEPS } from '../data/landingContent';

export function HowItWorksSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="como-funciona"
      className="border-t border-white/10 bg-[#050505] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Sticky Context & Visual */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#FF6500] mb-3">
                Metodologia de Trabalho
              </p>
              <h2 className="font-display text-balance text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Como funciona na prática do diagnóstico à otimização.
              </h2>
              <p className="mt-4 text-base text-neutral-400 leading-relaxed">
                Um processo claro, organizado em quatro etapas, para tirar sua empresa da
                improvisação e construir uma operação consistente de aquisição.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#171717]">
              {!imageError ? (
                <img
                  src={strategyVisual}
                  alt="Planejamento e análise estratégica de campanhas na DIREVA DIGITAL"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#171717] to-[#050505]">
                  <BarChart3 className="w-10 h-10 text-[#FF6500] mb-3" aria-hidden="true" />
                  <span className="text-sm text-neutral-300">
                    Processo em 4 etapas
                  </span>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent"
              />
            </div>
          </div>

          {/* Right 4-Step Timeline List */}
          <div className="lg:col-span-7 flex flex-col justify-between divide-y divide-white/10 rounded-2xl bg-[#171717] border border-white/10 px-6 sm:px-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-6 sm:py-7 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
              >
                <span className="font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-[#FF6500] leading-none shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
