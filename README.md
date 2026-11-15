# DIREVA DIGITAL — Landing Page Oficial

**Tráfego Pago | Estratégia | Performance.**

Landing page de alta conversão desenvolvida em React, TypeScript, Vite e Tailwind CSS, configurada e pronta para deploy na Vercel.

## Estrutura do Projeto

```text
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/images/        # Ativos visuais otimizados
│   ├── components/           # Header, Footer, BrandLogo, WhatsAppFloat, PrivacyModal
│   ├── data/                 # Conteúdo estruturado da landing page
│   ├── sections/             # Hero, Problemas, Serviços, Presença Local no Google, Como Funciona, Diferenciais, Conversão
│   ├── utils/                # Validação de formulário, máscara de telefone e links do WhatsApp
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

## Inserindo a Logo Original

O arquivo `logo-direva.png` não foi incluído no diretório inicial; por isso, o componente `src/components/BrandLogo.tsx` utiliza a tipografia oficial **DIREVA DIGITAL** sem alterar ou redesenhar o símbolo original.
Para usar a imagem original:
1. Coloque o arquivo em `public/logo-direva.png`.
2. Atualize `src/components/BrandLogo.tsx` para renderizar `<img src="/logo-direva.png" alt="DIREVA DIGITAL" className="h-8 w-auto" />`.

## Execução Local

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento (porta 3000)
npm run dev

# Verificar tipagem TypeScript
npm run lint

# Gerar build de produção
npm run build
```

## Deploy na Vercel

O projeto já inclui `vercel.json` configurado para Vite:

- **Framework Preset:** `Vite`
- **Install Command:** `npm install`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

Basta conectar o repositório na Vercel ou executar `npx vercel --prod`.
Lembre-se de atualizar a URL canônica em `public/sitemap.xml` após vincular o domínio definitivo.
