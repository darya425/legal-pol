'use client';

import { useEffect, useState, useRef } from 'react';
import { useI18n } from '@/lib/i18n/context';

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-primary sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">{label}</p>
    </div>
  );
}

export function StatsSection() {
  const { t } = useI18n();

  const stats = [
    { value: 1200, suffix: '+', label: t('stats.clients') },
    { value: 98, suffix: '%', label: t('stats.successRate') },
    { value: 7, suffix: '+', label: t('stats.yearsOnMarket') },
    { value: 5000, suffix: '+', label: t('stats.experts') },
  ];

  return (
    <section className="bg-secondary/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t('stats.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">{t('stats.subtitle')}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map(stat => (
            <StatItem key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
