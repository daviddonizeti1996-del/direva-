import { BRAND } from '../data/landingContent';

interface BrandLogoProps {
  className?: string;
}

/**
 * Renders the DIREVA DIGITAL wordmark in clean display typography
 * without fabricating or altering an external symbol.
 * Once the original `public/logo-direva.png` asset is provided,
 * it can be rendered directly inside this component.
 */
export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <span
      className={`font-display inline-flex items-baseline gap-1.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 select-none ${className}`}
      aria-label={BRAND.name}
    >
      <span>DIREVA</span>
      <span className="text-[#FF6500]">DIGITAL</span>
    </span>
  );
}
