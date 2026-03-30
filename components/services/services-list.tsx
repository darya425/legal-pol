"use client";

import {
  FileText,
  Briefcase,
  Users,
  Building2,
  GraduationCap,
  Plane,
} from "lucide-react";
import { ServiceCard } from "./service-card";
import { useI18n } from "@/lib/i18n/context";

export function ServicesList() {
  const { t } = useI18n();

  const services = [
    {
      icon: FileText,
      title: t("services.residence.title"),
      description: t("services.residence.description"),
      features: [
        t("services.residence.feature1"),
        t("services.residence.feature2"),
        t("services.residence.feature3"),
        t("services.residence.feature4"),
      ],
    },
    {
      icon: Briefcase,
      title: t("services.work.title"),
      description: t("services.work.description"),
      features: [
        t("services.work.feature1"),
        t("services.work.feature2"),
        t("services.work.feature3"),
        t("services.work.feature4"),
      ],
    },
    {
      icon: Users,
      title: t("services.family.title"),
      description: t("services.family.description"),
      features: [
        t("services.family.feature1"),
        t("services.family.feature2"),
        t("services.family.feature3"),
        t("services.family.feature4"),
      ],
    },
    {
      icon: Building2,
      title: t("services.business.title"),
      description: t("services.business.description"),
      features: [
        t("services.business.feature1"),
        t("services.business.feature2"),
        t("services.business.feature3"),
        t("services.business.feature4"),
      ],
    },
    {
      icon: GraduationCap,
      title: t("services.student.title"),
      description: t("services.student.description"),
      features: [
        t("services.student.feature1"),
        t("services.student.feature2"),
        t("services.student.feature3"),
        t("services.student.feature4"),
      ],
    },
    {
      icon: Plane,
      title: t("services.citizenship.title"),
      description: t("services.citizenship.description"),
      features: [
        t("services.citizenship.feature1"),
        t("services.citizenship.feature2"),
        t("services.citizenship.feature3"),
        t("services.citizenship.feature4"),
      ],
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            {t("services.label")}
          </span>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("services.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8 lg:mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
