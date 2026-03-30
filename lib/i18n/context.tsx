"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Locale, type TranslationKeys } from "./translations";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKeys) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored && (stored === "ru" || stored === "uk" || stored === "en" || stored === "pl")) {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: TranslationKeys): string => {
    const keys = key.split(".");
    let value: unknown = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  if (!mounted) {
    return (
      <I18nContext.Provider value={{ locale: "ru", setLocale, t }}>
        {children}
      </I18nContext.Provider>
    );
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

// Default translation function for when context is not available
const defaultT = (key: TranslationKeys): string => {
  const keys = key.split(".");
  let value: unknown = translations["ru"];
  
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  
  return typeof value === "string" ? value : key;
};

export function useI18n() {
  const context = useContext(I18nContext);
  // Return default values if context is not available (e.g., in global-error.tsx)
  if (context === undefined) {
    return {
      locale: "ru" as Locale,
      setLocale: () => {},
      t: defaultT,
    };
  }
  return context;
}
