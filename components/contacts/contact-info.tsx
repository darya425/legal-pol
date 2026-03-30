'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp, FaTelegramPlane, FaViber } from 'react-icons/fa';
import { useI18n } from '@/lib/i18n/context';

export function ContactInfo() {
  const { t } = useI18n();

  const contactDetails = [
    {
      icon: Phone,
      label: t('contacts.phone'),
      value: '+48 507 042 767',
      href: 'tel:+48507042767',
    },
    {
      icon: Mail,
      label: t('contacts.email'),
      value: 'azarchen@gmail.com',
      href: 'mailto:azarchen@gmail.com',
    },
    {
      icon: MapPin,
      label: t('contacts.address'),
      value: t('contacts.addressValue'),
      href: null,
    },
    {
      icon: Clock,
      label: t('contacts.workingHours'),
      value: t('contacts.workingHoursValue'),
      href: null,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-foreground">{t('contacts.infoTitle')}</h3>
        <p className="mt-2 text-muted-foreground">{t('contacts.infoSubtitle')}</p>
      </div>

      <div className="space-y-4">
        {contactDetails.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{label}</p>
              {href ? (
                <a href={href} className="whitespace-pre-line text-foreground transition-colors hover:text-primary">
                  {value}
                </a>
              ) : (
                <p className="whitespace-pre-line text-foreground">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div className="border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">{t('contacts.messengers')}</p>
        <div className="mt-3 flex gap-3">
          <a
            href="https://t.me/daashsa"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Telegram"
            target="_blank"
          >
            <FaTelegramPlane className="h-6 w-6" />
          </a>
          <a
            href="https://wa.me/48698149204"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="WhatsApp"
            target="_blank"
          >
            <FaWhatsapp className="h-6 w-6" />
          </a>
          <a
            href="viber://chat?number=%2B48698149204"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Viber"
            target="_blank"
          >
            <FaViber className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
