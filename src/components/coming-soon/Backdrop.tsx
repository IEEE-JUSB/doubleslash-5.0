export default function Backdrop({ active }: { active: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: active ? 1 : 0.5,
          backgroundImage: [
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(59,0,102,0.8), transparent 70%)",
            "radial-gradient(ellipse 60% 45% at 50% 40%, rgba(255,0,127,0.35), transparent 70%)",
            "radial-gradient(ellipse 50% 40% at 15% 90%, rgba(31,81,255,0.4), transparent 70%)",
            "radial-gradient(ellipse 50% 40% at 85% 90%, rgba(0,240,255,0.25), transparent 70%)",
          ].join(","),
        }}
      />
      <div
        className={`synth-grid absolute bottom-0 left-[-50%] h-[45vh] w-[200%] transition-opacity duration-700 ${
          active ? "opacity-60" : "opacity-25"
        }`}
      />
    </div>
  );
}