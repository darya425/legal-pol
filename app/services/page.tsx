import type { Metadata } from "next";
import { ServicesList } from "@/components/services/services-list";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Полный спектр услуг по легализации в Польше: вид на жительство, рабочие визы, воссоединение семьи, регистрация бизнеса, студенческие визы и получение гражданства.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesList />
      <CTASection />
    </>
  );
}
