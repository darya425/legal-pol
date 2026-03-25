import type { Metadata } from "next";
import { ContactForm } from "@/components/contacts/contact-form";
import { ContactInfo } from "@/components/contacts/contact-info";
import { OfficeMap } from "@/components/contacts/office-map";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с LegalPol для получения бесплатной консультации по легализации в Польше. Офис в центре Варшавы, работаем пн-сб.",
};

export default function ContactsPage() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Контакты
          </span>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Свяжитесь с нами
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Запишитесь на бесплатную консультацию или посетите наш офис в центре
            Варшавы
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-8">
            <ContactInfo />
            <OfficeMap />
          </div>

          {/* Right Column - Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
