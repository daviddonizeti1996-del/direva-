import { useEffect } from 'react';
import { X } from 'lucide-react';

export type LegalDocumentType = 'privacy' | 'terms' | null;

interface PrivacyModalProps {
  documentType: LegalDocumentType;
  onClose: () => void;
}

export function PrivacyModal({ documentType, onClose }: PrivacyModalProps) {
  useEffect(() => {
    if (!documentType) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [documentType, onClose]);

  if (!documentType) return null;

  const isPrivacy = documentType === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-[#171717] border border-white/10 p-6 sm:p-8 text-neutral-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <h2 id="legal-modal-title" className="text-xl font-bold text-white">
            {isPrivacy ? 'Política de Privacidade' : 'Termos de Uso'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela"
            className="inline-flex items-center justify-center min-h-[40px] min-w-[40px] -mr-2 -mt-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-300 max-h-[65vh] overflow-y-auto pr-1">
          {isPrivacy ? (
            <>
              <p>
                A <strong className="text-white">DIREVA DIGITAL</strong> respeita a sua
                privacidade e trata os dados fornecidos neste site em conformidade com a
                Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              </p>
              <p>
                <strong className="text-white">1. Coleta de informações:</strong> Os dados
                preenchidos no formulário de contato (nome, empresa, WhatsApp, segmento,
                objetivo e faixa de investimento) não são armazenados em bancos de dados
                externos por esta página. Eles são utilizados exclusivamente para compor a
                mensagem enviada diretamente por você ao nosso atendimento comercial via
                WhatsApp.
              </p>
              <p>
                <strong className="text-white">2. Finalidade:</strong> As informações
                compartilhadas no atendimento servem unicamente para compreender as
                necessidades da sua empresa e elaborar uma proposta ou diagnóstico de
                gestão de tráfego pago.
              </p>
              <p>
                <strong className="text-white">3. Seus direitos:</strong> Você pode
                solicitar a exclusão ou atualização de informações enviadas em conversas
                comerciais a qualquer momento pelo nosso canal oficial de WhatsApp
                (+55 19 99325-6915).
              </p>
            </>
          ) : (
            <>
              <p>
                Ao navegar pela página oficial da{' '}
                <strong className="text-white">DIREVA DIGITAL</strong>, você concorda com
                os termos abaixo.
              </p>
              <p>
                <strong className="text-white">1. Natureza informativa:</strong> Este site
                apresenta os serviços de gestão de tráfego pago, Meta Ads, Google Ads e
                estratégia digital oferecidos pela DIREVA DIGITAL.
              </p>
              <p>
                <strong className="text-white">2. Contratação de serviços:</strong> O envio
                de informações pelo formulário ou contato via WhatsApp inicia uma conversa
                comercial e não constitui contrato automático de prestação de serviços.
              </p>
              <p>
                <strong className="text-white">3. Propriedade intelectual:</strong> Textos,
                identidade visual e estrutura desta página pertencem à DIREVA DIGITAL,
                sendo vedada a reprodução sem autorização prévia.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center min-h-[40px] px-5 py-2 rounded-lg bg-[#FF6500] text-sm font-semibold text-white hover:bg-[#e55a00] transition-colors cursor-pointer"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}
