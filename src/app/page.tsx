"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/loading/Loader";
import Home from "@/components/coming-soon/Home";

export default function Page() {
  const [fading, setFading] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const fade = setTimeout(() => setFading(true), 5000);        // loader plays 5s, then crossfade starts
    const remove = setTimeout(() => setShowLoader(false), 8000); // unmount after the fade finishes
    return () => {
      clearTimeout(fade);
      clearTimeout(remove);
    };
  }, []);

  return (
  <>
    {/* dark base so the crossfade never shows white */}
    <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#1a1a33_0%,#0D0B26_60%,#080718_100%)]" />

    <Home visible={fading} />

    {showLoader && (
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-2500 ease-in-out ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Loader size={420} />
      </div>
    )}
  </>
);
}