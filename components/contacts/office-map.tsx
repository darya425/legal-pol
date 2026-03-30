'use client';

import { MapPin } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';

export function OfficeMap() {
  const { t } = useI18n();

  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-sm">
      <div className="relative aspect-video w-full bg-secondary">
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps?q=Legionowa+6,+Bialystok&output=embed"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t('contacts.mapTitle')}
        />
      </div>
      <div className="flex items-center gap-3 p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <MapPin className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-medium text-foreground">{t('contacts.mapTitle')}</p>
          <p className="text-sm text-muted-foreground">{t('contacts.mapSubtitle')}</p>
        </div>
      </div>
    </div>
  );
}
