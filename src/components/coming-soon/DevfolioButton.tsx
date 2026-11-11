"use client";

import { useEffect } from "react";

type Props = {
  hackathonSlug: string;
  theme?: "light" | "dark" | "dark-inverted";
};

export default function DevfolioButton({ hackathonSlug, theme = "light" }: Props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="apply-button"
      data-hackathon-slug={hackathonSlug}
      data-button-theme={theme}
      style={{ height: 44, width: 312 }}
    />
  );
}