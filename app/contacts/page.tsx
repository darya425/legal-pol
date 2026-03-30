import type { Metadata } from "next";
import { ContactForm } from "@/components/contacts/contact-form";
import { ContactInfo } from "@/components/contacts/contact-info";
import { OfficeMap } from "@/components/contacts/office-map";
import { ContactsHeader } from "@/components/contacts/contacts-header";

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
        <ContactsHeader />

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
