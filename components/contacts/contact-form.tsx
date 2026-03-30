"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useI18n();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-card p-8 text-center shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          {t("form.successTitle")}
        </h3>
        <p className="mt-2 text-muted-foreground">
          {t("form.successMessage")}
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-sm font-medium text-primary hover:text-primary/80"
        >
          {t("form.sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-card p-6 shadow-sm sm:p-8"
    >
      <h3 className="text-xl font-semibold text-foreground">
        {t("form.title")}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {t("form.subtitle")}
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground"
          >
            {t("form.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder={t("form.namePlaceholder")}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground"
          >
            {t("form.phone")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder={t("form.phonePlaceholder")}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            {t("form.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder={t("form.emailPlaceholder")}
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-foreground"
          >
            {t("form.service")}
          </label>
          <select
            id="service"
            name="service"
            className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="">{t("form.servicePlaceholder")}</option>
            <option value="residence">{t("form.serviceResidence")}</option>
            <option value="work">{t("form.serviceWork")}</option>
            <option value="family">{t("form.serviceFamily")}</option>
            <option value="business">{t("form.serviceBusiness")}</option>
            <option value="student">{t("form.serviceStudent")}</option>
            <option value="citizenship">{t("form.serviceCitizenship")}</option>
            <option value="other">{t("form.serviceOther")}</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground"
          >
            {t("form.message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder={t("form.messagePlaceholder")}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
            {t("form.submitting")}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {t("form.submit")}
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {t("form.privacyText")}{" "}
        <a href="#" className="text-primary hover:underline">
          {t("form.privacyLink")}
        </a>
      </p>
    </form>
  );
}
