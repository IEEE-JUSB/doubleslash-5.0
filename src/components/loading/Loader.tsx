import DevfolioButton from "../coming-soon/DevfolioButton";

type LoaderProps = {
  size?: number; // logo width in px
};

export default function Loader({ size = 560 }: LoaderProps) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[radial-gradient(ellipse_at_top,#1a1a33_0%,#0D0B26_60%,#080718_100%)]">
      <div
        className="relative overflow-hidden"
        style={{
          width: `min(${size}px, 80vw)`,
          aspectRatio: "2576 / 441",
          WebkitMaskImage: "url(/ieee-jusb.png)",
          maskImage: "url(/ieee-jusb.png)",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        {/* dim base logo */}
        <div className="absolute inset-0 bg-white/10" />

        {/* diffused light band */}
        <div className="shimmer absolute top-[-20%] left-0 h-[140%] w-[22%] bg-white blur-[50px]" />
        <DevfolioButton hackathonSlug="doubleslash5" theme="dark" />
      </div>

      <style>{`
        .shimmer {
          transform: translateX(-150%) skewX(-20deg);
          animation: sweep 2.4s ease-in-out infinite;
        }
        @keyframes sweep {
          0%   { transform: translateX(-150%) skewX(-20deg); }
          70%  { transform: translateX(550%)  skewX(-20deg); }
          100% { transform: translateX(550%)  skewX(-20deg); }
        }
      `}</style>
    </div>
  );
}