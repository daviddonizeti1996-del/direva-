import { Users, Compass, Activity, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { PROBLEMS, type ProblemItem } from '../data/landingContent';

const PROBLEM_ICONS: Record<ProblemItem['iconName'], typeof Users> = {
  users: Users,
  compass: Compass,
  activity: Activity,
  target: Target,
};

export function ProblemsSection() {
  return (
    <section
      id="problemas"
      className="border-t border-white/10 bg-[#050505] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-medium text-[#FF6500] mb-3">
            Diagnóstico de Cenário
          </p>
          <h2 className="font-display text-balance text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            SEU NEGÓCIO NÃO PRECISA DE MAIS ACHISMOS. PRECISA DE ESTRATÉGIA.
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed max-w-2xl">
            Investir em anúncios sem método gera frustração e desperdício. Identifique os
            gargalos mais comuns que travam a entrada de novos clientes.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROBLEMS.map((problem, index) => {
            const Icon = PROBLEM_ICONS[problem.iconName];
            return (
              <motion.article
                key={problem.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl bg-[#171717] border border-white/10 p-6 sm:p-7 transition-colors duration-150 hover:border-white/20"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#050505] border border-white/10 text-[#FF6500]">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg sm:text-xl font-semibold text-white">
                  {problem.title}
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {problem.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
