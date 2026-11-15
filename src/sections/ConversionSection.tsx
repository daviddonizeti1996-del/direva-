import { useState, useEffect, useRef, type FormEvent } from 'react';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import {
  BRAND,
  BUDGET_OPTIONS,
  OBJECTIVE_OPTIONS,
  SEGMENT_OPTIONS,
} from '../data/landingContent';
import {
  buildLeadWhatsAppUrl,
  formatBrazilPhone,
  validateLeadForm,
  type LeadFormData,
  type LeadFormErrors,
} from '../utils/whatsapp';

interface ConversionSectionProps {
  preselectedObjective?: string;
}

export function ConversionSection({
  preselectedObjective = '',
}: ConversionSectionProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    company: '',
    whatsapp: '',
    segment: '',
    objective: preselectedObjective,
    budget: '',
  });

  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const whatsappLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (preselectedObjective) {
      setFormData((prev) => ({
        ...prev,
        objective: preselectedObjective,
      }));
      setErrors((prev) => ({ ...prev, objective: undefined }));
      setSubmittedUrl(null);
    }
  }, [preselectedObjective]);

  const handleFieldChange = (field: keyof LeadFormData, value: string) => {
    const nextValue = field === 'whatsapp' ? formatBrazilPhone(value) : value;
    setFormData((prev) => ({ ...prev, [field]: nextValue }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateLeadForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const url = buildLeadWhatsAppUrl(formData);
    if (whatsappLinkRef.current) {
      whatsappLinkRef.current.href = url;
      whatsappLinkRef.current.click();
    }
    setSubmittedUrl(url);
  };

  return (
    <section
      id="contato"
      className="border-t border-white/10 bg-[#050505] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Conversion Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs sm:text-sm font-medium text-[#FF6500]">
              Atendimento Comercial
            </p>
            <h2 className="font-display text-balance text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              ESTÁ PRONTO PARA DAR O PRÓXIMO PASSO?
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed">
              Conte para nós sobre sua empresa e descubra como podemos ajudar a atrair
              novas oportunidades.
            </p>

            <div className="rounded-2xl bg-[#171717] border border-white/10 p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#FF6500] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Atendimento direto no WhatsApp
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    Ao enviar o formulário, seus dados já vão organizados para iniciar a
                    conversa com nosso time pelo número{' '}
                    <span className="text-neutral-200 tabular-nums">
                      {BRAND.whatsappDisplay}
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#FF6500] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Sem spam ou compromissos automáticos. Seus dados são usados apenas
                  para montar a mensagem inicial do seu atendimento.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Container */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#171717] border border-white/10 p-6 sm:p-8">
              {submittedUrl ? (
                <div className="space-y-6 py-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FF6500]/15 text-[#FF6500]">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Informações prontas para envio
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-neutral-300 leading-relaxed">
                      Preparamos sua mensagem com os dados da empresa{' '}
                      <strong className="text-white">{formData.company}</strong>. Caso o
                      WhatsApp não tenha aberto automaticamente, clique no botão abaixo:
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      ref={whatsappLinkRef}
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 py-3 rounded-lg bg-[#FF6500] text-sm font-semibold text-white hover:bg-[#e55a00] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>Abrir conversa no WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedUrl(null)}
                      className="inline-flex items-center justify-center min-h-[48px] px-5 py-3 rounded-lg border border-white/15 text-sm font-medium text-neutral-200 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
                    >
                      Editar informações
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <a
                    ref={whatsappLinkRef}
                    href={submittedUrl ?? BRAND.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    WhatsApp
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nome */}
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="block text-sm font-medium text-neutral-200 mb-1.5"
                      >
                        Nome *
                      </label>
                      <input
                        id="lead-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={(e) => handleFieldChange('name', e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        className={`w-full min-h-[44px] rounded-lg bg-[#050505] border px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF6500] transition-colors ${
                          errors.name ? 'border-red-500' : 'border-white/15'
                        }`}
                      />
                      {errors.name && (
                        <p
                          id="error-name"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Nome da empresa */}
                    <div>
                      <label
                        htmlFor="lead-company"
                        className="block text-sm font-medium text-neutral-200 mb-1.5"
                      >
                        Nome da empresa *
                      </label>
                      <input
                        id="lead-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Nome do seu negócio"
                        value={formData.company}
                        onChange={(e) => handleFieldChange('company', e.target.value)}
                        aria-invalid={Boolean(errors.company)}
                        aria-describedby={errors.company ? 'error-company' : undefined}
                        className={`w-full min-h-[44px] rounded-lg bg-[#050505] border px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF6500] transition-colors ${
                          errors.company ? 'border-red-500' : 'border-white/15'
                        }`}
                      />
                      {errors.company && (
                        <p
                          id="error-company"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.company}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* WhatsApp */}
                    <div>
                      <label
                        htmlFor="lead-whatsapp"
                        className="block text-sm font-medium text-neutral-200 mb-1.5"
                      >
                        WhatsApp *
                      </label>
                      <input
                        id="lead-whatsapp"
                        name="whatsapp"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        placeholder="(19) 99999-9999"
                        value={formData.whatsapp}
                        onChange={(e) => handleFieldChange('whatsapp', e.target.value)}
                        aria-invalid={Boolean(errors.whatsapp)}
                        aria-describedby={errors.whatsapp ? 'error-whatsapp' : undefined}
                        className={`w-full min-h-[44px] rounded-lg bg-[#050505] border px-3.5 py-2.5 text-sm text-white tabular-nums placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF6500] transition-colors ${
                          errors.whatsapp ? 'border-red-500' : 'border-white/15'
                        }`}
                      />
                      {errors.whatsapp && (
                        <p
                          id="error-whatsapp"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.whatsapp}</span>
                        </p>
                      )}
                    </div>

                    {/* Segmento de atuação */}
                    <div>
                      <label
                        htmlFor="lead-segment"
                        className="block text-sm font-medium text-neutral-200 mb-1.5"
                      >
                        Segmento de atuação *
                      </label>
                      <select
                        id="lead-segment"
                        name="segment"
                        value={formData.segment}
                        onChange={(e) => handleFieldChange('segment', e.target.value)}
                        aria-invalid={Boolean(errors.segment)}
                        aria-describedby={errors.segment ? 'error-segment' : undefined}
                        className={`w-full min-h-[44px] rounded-lg bg-[#050505] border px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FF6500] transition-colors ${
                          errors.segment ? 'border-red-500' : 'border-white/15'
                        }`}
                      >
                        <option value="">Selecione o segmento</option>
                        {SEGMENT_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.segment && (
                        <p
                          id="error-segment"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.segment}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Principal objetivo */}
                    <div>
                      <label
                        htmlFor="lead-objective"
                        className="block text-sm font-medium text-neutral-200 mb-1.5"
                      >
                        Principal objetivo *
                      </label>
                      <select
                        id="lead-objective"
                        name="objective"
                        value={formData.objective}
                        onChange={(e) => handleFieldChange('objective', e.target.value)}
                        aria-invalid={Boolean(errors.objective)}
                        aria-describedby={errors.objective ? 'error-objective' : undefined}
                        className={`w-full min-h-[44px] rounded-lg bg-[#050505] border px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FF6500] transition-colors ${
                          errors.objective ? 'border-red-500' : 'border-white/15'
                        }`}
                      >
                        <option value="">Selecione o objetivo</option>
                        {OBJECTIVE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.objective && (
                        <p
                          id="error-objective"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.objective}</span>
                        </p>
                      )}
                    </div>

                    {/* Faixa de investimento mensal (opcional) */}
                    <div>
                      <label
                        htmlFor="lead-budget"
                        className="block text-sm font-medium text-neutral-200 mb-1.5"
                      >
                        Investimento mensal em anúncios{' '}
                        <span className="text-neutral-400 font-normal">(opcional)</span>
                      </label>
                      <select
                        id="lead-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={(e) => handleFieldChange('budget', e.target.value)}
                        className="w-full min-h-[44px] rounded-lg bg-[#050505] border border-white/15 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FF6500] transition-colors"
                      >
                        <option value="">Prefiro informar depois</option>
                        {BUDGET_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group w-full inline-flex items-center justify-center gap-2.5 min-h-[50px] px-6 py-3.5 rounded-lg bg-[#FF6500] text-sm font-semibold tracking-wide text-white hover:bg-[#e55a00] active:scale-[0.99] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
                    >
                      <span>ENVIAR E CONTINUAR NO WHATSAPP</span>
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
