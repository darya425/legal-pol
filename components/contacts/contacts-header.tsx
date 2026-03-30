"use client";

import { useI18n } from "@/lib/i18n/context";

export function ContactsHeader() {
  const { t } = useI18n();

  return (
    <div className="text-center">
      <span className="text-sm font-medium uppercase tracking-wider text-primary">
        {t("contacts.label")}
      </span>
      <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {t("contacts.title")}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
        {t("contacts.subtitle")}
      </p>
    </div>
  );
}
