"use client";

import { Building2, Users, Briefcase, Globe, Award, Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function ClientsSection() {
  const { t } = useI18n();

  const clientTypes = [
    {
      icon: Users,
      title: t("clients.individuals"),
      description: t("clients.individualsDesc"),
    },
    {
      icon: Briefcase,
      title: t("clients.entrepreneurs"),
      description: t("clients.entrepreneursDesc"),
    },
    {
      icon: Building2,
      title: t("clients.companies"),
      description: t("clients.companiesDesc"),
    },
    {
      icon: Globe,
      title: t("clients.itSpecialists"),
      description: t("clients.itSpecialistsDesc"),
    },
    {
      icon: Award,
      title: t("clients.students"),
      description: t("clients.studentsDesc"),
    },
    {
      icon: Heart,
      title: t("clients.families"),
      description: t("clients.familiesDesc"),
    },
  ];

  return (
    <section className="bg-secondary/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            {t("clients.label")}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("clients.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            {t("clients.subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clientTypes.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex items-start gap-4 rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
