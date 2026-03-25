import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/contacts", label: "Контакты" },
] as const;

const services = [
  "Вид на жительство",
  "Рабочая виза",
  "Воссоединение семьи",
  "Регистрация бизнеса",
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">LP</span>
              </div>
              <span className="text-lg font-semibold text-foreground">LegalPol</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Профессиональная помощь в легализации в Польше. Работаем с 2015 года, 
              помогли более 5000 клиентов обрести новый дом.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Навигация
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Услуги
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Контакты
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+48123456789"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +48 123 456 789
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@legalpol.pl"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  info@legalpol.pl
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  ул. Маршалковская 100, Варшава
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} LegalPol. Все права защищены.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
