"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile";
}) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`lang-switch${
        variant === "mobile" ? " lang-switch--mobile" : ""
      }`}
    >
      <button
        type="button"
        className={lang === "fr" ? "active" : ""}
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
      >
        FR
      </button>

      <span className="lang-switch__divider">/</span>

      <button
        type="button"
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}