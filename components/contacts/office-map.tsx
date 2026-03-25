"use client";

import { MapPin } from "lucide-react";

export function OfficeMap() {
  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-sm">
      <div className="relative aspect-video w-full bg-secondary">
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.635742668!2d21.0096354!3d52.2288548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0x4bf4b1b8f8a4f!2sMarszałkowska%20100%2C%20Warszawa!5e0!3m2!1sen!2spl!4v1648639393744!5m2!1sen!2spl"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Расположение офиса LegalPol"
        />
      </div>
      <div className="flex items-center gap-3 p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <MapPin className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-medium text-foreground">Офис LegalPol</p>
          <p className="text-sm text-muted-foreground">
            ул. Маршалковская 100, оф. 512, Варшава
          </p>
        </div>
      </div>
    </div>
  );
}
