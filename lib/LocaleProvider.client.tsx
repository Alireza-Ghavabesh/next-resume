 "use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "@/messages/en.json";
import fa from "@/messages/fa.json";

export type Locale = "en" | "fa";
const ALL_LOCALES: Locale[] = ["en", "fa"];

type Messages = Record<string, Record<string, any>>; // messages[namespace][key]
const MESSAGES: Record<Locale, Messages> = {
  en: en as any,
  fa: fa as any,
};

type ContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (namespace: string, key: string) => string;
};

const LocaleContext = createContext<ContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // initial locale: search param -> localStorage -> navigator -> default "en"
  const getInitialLocale = (): Locale => {
    try {
      // from URL search param ?lang=fa
      if (typeof window !== "undefined") {
        const q = new URLSearchParams(window.location.search).get("lang");
        if (q && (q === "fa" || q === "en")) return q;
      }
      const stored = typeof window !== "undefined" ? localStorage.getItem("locale") : null;
      if (stored === "fa" || stored === "en") return stored;
      const nav = typeof navigator !== "undefined" ? navigator.language : "en";
      if (nav && nav.toLowerCase().startsWith("fa")) return "fa";
    } catch (e) {}
    return "en";
  };

  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    // persist to localStorage
    localStorage.setItem("locale", locale);

    // set html attributes for accessibility & RTL
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    if (!ALL_LOCALES.includes(l)) return;
    setLocaleState(l);

    // update URL search param without reload (optional)
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", l);
      // replace state to not add history entry
      window.history.replaceState({}, "", url.toString());
    } catch (e) {}
  };

  // t(namespace, key)
  const t = (namespace: string, key: string) => {
    const ns = MESSAGES[locale]?.[namespace];
    if (!ns) return key;
    // support nested keys with dot?
    const maybe = ns[key];
    if (typeof maybe === "string") return maybe;
    return String(maybe ?? key);
  };

  const value = useMemo(() => ({ locale, setLocale, t }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return {
    locale: ctx.locale,
    setLocale: ctx.setLocale,
  };
}

export function useTranslations(namespace: string) {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useTranslations must be used within LocaleProvider");
  const translate = (key: string) => ctx.t(namespace, key);
  return translate;
}
