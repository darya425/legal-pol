"use client";

import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  imagePosition?: "left" | "right";
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  imagePosition = "left",
}: ServiceCardProps) {
  const { t } = useI18n();

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-md lg:flex-row ${
        imagePosition === "right" ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image/Icon Side */}
      <div className="flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary to-accent/10 p-8 lg:w-2/5">
        <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-card shadow-sm">
          <Icon className="h-16 w-16 text-primary" />
        </div>
      </div>

      {/* Content Side */}
      <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
        <h3 className="text-xl font-bold text-foreground sm:text-2xl">{title}</h3>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
        <ul className="mt-4 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            {t("services.learnMore")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
