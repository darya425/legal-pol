import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Готовы начать новую жизнь в Польше?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-primary-foreground/80">
            Запишитесь на бесплатную консультацию, и мы поможем вам разобраться 
            во всех вопросах легализации
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-card px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-card/90"
            >
              Записаться на консультацию
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+48123456789"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" />
              +48 123 456 789
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
