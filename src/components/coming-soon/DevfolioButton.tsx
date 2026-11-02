type Props = {
  href: string;
  onHoverChange?: (hovering: boolean) => void;
};

export default function DevfolioButton({ href, onHoverChange }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
      onFocus={() => onHoverChange?.(true)}
      onBlur={() => onHoverChange?.(false)}
      className="group relative inline-flex justify-self-center"
    >
      {/* gradient shadow that blooms on hover */}
      <span
        aria-hidden
        className="synth-gradient absolute -inset-1 scale-100 rounded-full opacity-40 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-100"
      />

      <span className="relative overflow-hidden rounded-full bg-[#FF007F] px-10 py-4 text-base font-bold tracking-wide text-white transition-transform duration-300 group-hover:scale-105">
        {/* gradient fill that takes over on hover */}
        <span
          aria-hidden
          className="synth-fill absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span className="relative">Register on Devfolio</span>
      </span>
    </a>
  );
}