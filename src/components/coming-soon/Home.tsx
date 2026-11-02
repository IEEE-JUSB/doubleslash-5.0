type ComingSoonProps = {
  visible: boolean;
};

export default function Home({ visible }: ComingSoonProps) {
  return (
    <main
      className={`fixed inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_top,#1a1a33_0%,#0D0B26_60%,#080718_100%)] transition-opacity duration-2500 ease-in-out delay-800 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1
        className="text-center uppercase text-white"
        style={{
          fontFamily: "ArtDecoMedium, 'ArtDecoMedium Fallback', times-new-roman",
          fontWeight: 100,
          fontSize: "clamp(48px, 11vw, 60px)",
          lineHeight: 1.1,
          letterSpacing: "-0.01em",
        }}
      >
        Coming Soon
      </h1>
    </main>
  );
}