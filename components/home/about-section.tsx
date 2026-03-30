'use client';

import { CheckCircle } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';

export function AboutSection() {
  const { t } = useI18n();

  const benefits = [t('about.benefit1'), t('about.benefit2'), t('about.benefit3'), t('about.benefit4')];

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl bg-secondary">
              <div className="aspect-4/3 w-full bg-linear-to-br from-primary/10 via-secondary to-accent/10 p-8">
                <div className="flex h-full flex-col items-center justify-center rounded-xl bg-card p-6 shadow-sm">
                  <p className="text-center text-lg font-medium text-foreground">{t('about.officeTitle')}</p>
                  <p className="mt-2 text-center text-sm text-muted-foreground">{t('about.officeSubtitle')}</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div className="rounded-lg bg-secondary p-4">
                      <p className="text-2xl font-bold text-primary">7+</p>
                      <p className="text-xs text-muted-foreground">{t('about.yearsExperience')}</p>
                    </div>
                    <div className="rounded-lg bg-secondary p-4">
                      <p className="text-2xl font-bold text-primary">98%</p>
                      <p className="text-xs text-muted-foreground">{t('about.successRate')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">{t('about.label')}</span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{t('about.description1')}</p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t('about.description2')}</p>

            {/* Benefits List */}
            <ul className="mt-8 space-y-4">
              {benefits.map(benefit => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
