"use client";

import { useState } from "react";
import Backdrop from "./Backdrop";
import Countdown from "./Countdown";
import DevfolioButton from "./DevfolioButton";
import { LAUNCH_DATE, DATE_LABEL, DEVFOLIO_URL, INFO_LINES } from "./config";

type ComingSoonProps = {
  visible: boolean;
};

export default function Home({ visible }: ComingSoonProps) {
  const [glow, setGlow] = useState(false);

  return (
    <main
      style={{ fontFamily: "JosefinSans, 'JosefinSans Fallback', sans-serif" }}
      className={`fixed inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_top,#1a1a33_0%,#0D0B26_60%,#080718_100%)] transition-opacity duration-2500 ease-in-out delay-800 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Backdrop active={glow} />

      <div className="relative z-10 flex h-full flex-col">
        {/* top banner */}
        <div className="bg-linear-to-r from-[#3B0066] via-[#FF007F]/60 to-[#1F51FF] py-3 text-center text-[11px] font-bold uppercase tracking-[0.35em] text-white sm:text-xs">
          Registrations opening soon
        </div>

        {/* hero */}
        <section className="flex flex-1 flex-col items-center justify-center gap-10 px-6 sm:gap-14 text-white">
          <h1
            className="synth-gradient synth-text text-center uppercase"
            style={{
              fontWeight: 700,
              fontSize: "clamp(56px, 12vw, 160px)",
              lineHeight: 1.1,
              letterSpacing: "0.02em",
            }}
          >
            Coming Soon
          </h1>

          <Countdown target={LAUNCH_DATE} />
        </section>

        {/* bottom row */}
        <footer className="grid items-center gap-8 px-6 pb-10 text-center md:grid-cols-3 md:px-16 md:text-left">
          <p className="text-xl font-bold uppercase leading-tight tracking-wide text-white sm:text-2xl">
            Coming
            <br />
            {DATE_LABEL}
          </p>

          <DevfolioButton href={DEVFOLIO_URL} onHoverChange={setGlow} />

          <p className="text-lg font-bold uppercase leading-tight tracking-wide text-white/80 md:text-right">
            {INFO_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </footer>
      </div>
    </main>
  );
}