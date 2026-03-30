'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';

export function CTASection() {
  const { t } = useI18n();

  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-primary-foreground/80">{t('cta.subtitle')}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-card px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-card/90"
            >
              {t('cta.button')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+48507042767"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" />
              +48 507 042 767
            </a>
            <a
              href="tel:+48698149204"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" />
              +48 698 149 204
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
