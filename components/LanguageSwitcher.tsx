
"use client";
import React from "react";
import { useLocale } from "@/lib/LocaleProvider.client";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="inline-flex gap-2 items-center">
      <button
        className={`px-3 py-1 rounded ${locale === "en" ? "font-bold" : ""}`}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <button
        className={`px-3 py-1 rounded ${locale === "fa" ? "font-bold" : ""}`}
        onClick={() => setLocale("fa")}
      >
        FA
      </button>
    </div>
  );
}
