import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DIFFERENTIALS, TARGET_AUDIENCES } from '../data/landingContent';

interface DifferentialsSectionProps {
  onNavigateToContact: () => void;
}

export function DifferentialsSection({
  onNavigateToContact,
}: DifferentialsSectionProps) {
  return (
    <section
      id="diferenciais"
      className="border-t border-white/10 bg-[#080808] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Header */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#FF6500] mb-3">
                Por que a DIREVA DIGITAL
              </p>
              <h2 className="font-display text-balance text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Compromisso com clareza, acompanhamento e resultado comercial.
              </h2>
              <p className="mt-4 text-base text-neutral-400 leading-relaxed">
                Atendemos negócios que levam o próprio crescimento a sério e precisam de
                um parceiro estratégico para gerenciar anúncios pagos e fortalecer a
                presença digital local no Google.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                Para quem é indicado
              </p>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm text-neutral-200">
                {TARGET_AUDIENCES.map((audience, idx) => (
                  <span key={audience} className="inline-flex items-center gap-2.5">
                    <span>{audience}</span>
                    {idx < TARGET_AUDIENCES.length - 1 && (
                      <span aria-hidden="true" className="text-[#FF6500]">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onNavigateToContact}
                className="group inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-lg bg-[#171717] border border-white/15 text-sm font-semibold text-white hover:border-[#FF6500] hover:bg-[#1c1c1c] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500]"
              >
                <span>Solicitar diagnóstico estratégico</span>
                <ArrowRight
                  className="w-4 h-4 text-[#FF6500] transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          {/* Right Differentials List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DIFFERENTIALS.map((item, idx) => {
              const isLastFull = idx === DIFFERENTIALS.length - 1;
              return (
                <div
                  key={item.title}
                  className={`rounded-2xl bg-[#171717] border border-white/10 p-6 ${
                    isLastFull ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#FF6500] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
