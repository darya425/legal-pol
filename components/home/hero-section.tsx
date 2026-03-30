'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';

export function HeroSection() {
  const { t } = useI18n();

  const features = [
    { icon: Shield, text: t('hero.feature1') },
    { icon: Clock, text: t('hero.feature2') },
    { icon: Users, text: t('hero.feature3') },
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-secondary/50 to-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {t('hero.badge')}
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t('hero.title')} <span className="text-primary">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {t('hero.description')}
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              {features.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 rounded-lg bg-card px-4 py-2 shadow-sm cursor-default"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t('hero.ctaPrimary')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 p-8">
              <div className="absolute inset-4 flex items-center justify-center rounded-xl  shadow-lg bg-linear-to-br from-primary/10 via-secondary to-accent/10">
                <div className="p-8 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <p className="mt-6 text-2xl font-bold text-foreground">1200+</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t('hero.clients')}</p>
                  <div className="mt-6 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-chart-2 text-chart-2" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t('hero.avgRating')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
