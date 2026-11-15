import { BRAND } from '../data/landingContent';

export interface LeadFormData {
  name: string;
  company: string;
  whatsapp: string;
  segment: string;
  objective: string;
  budget: string;
}

export type LeadFormErrors = Partial<Record<keyof LeadFormData, string>>;

export function formatBrazilPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function validateLeadForm(data: LeadFormData): LeadFormErrors {
  const errors: LeadFormErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = 'Informe seu nome completo.';
  }

  if (data.company.trim().length < 2) {
    errors.company = 'Informe o nome da sua empresa.';
  }

  const phoneDigits = data.whatsapp.replace(/\D/g, '');
  if (phoneDigits.length < 10 || phoneDigits.length > 11) {
    errors.whatsapp = 'Informe um WhatsApp válido com DDD (10 ou 11 dígitos).';
  }

  if (!data.segment.trim()) {
    errors.segment = 'Selecione o segmento de atuação.';
  }

  if (!data.objective.trim()) {
    errors.objective = 'Selecione o principal objetivo.';
  }

  return errors;
}

export function buildDefaultWhatsAppUrl(): string {
  const encoded = encodeURIComponent(BRAND.initialWhatsappMessage);
  return `${BRAND.whatsappBaseUrl}?text=${encoded}`;
}

export function buildLeadWhatsAppUrl(data: LeadFormData): string {
  const lines = [
    BRAND.initialWhatsappMessage,
    '',
    `*Nome:* ${data.name.trim()}`,
    `*Empresa:* ${data.company.trim()}`,
    `*WhatsApp:* ${data.whatsapp.trim()}`,
    `*Segmento:* ${data.segment.trim()}`,
    `*Principal objetivo:* ${data.objective.trim()}`,
  ];

  if (data.budget.trim()) {
    lines.push(`*Investimento mensal em anúncios:* ${data.budget.trim()}`);
  }

  const encoded = encodeURIComponent(lines.join('\n'));
  return `${BRAND.whatsappBaseUrl}?text=${encoded}`;
}
