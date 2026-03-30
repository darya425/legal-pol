import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { I18nProvider } from '@/lib/i18n/context';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Legalizacja PRO — Помощь в легализации в Польше',
    template: '%s | Legalizacja PRO',
  },
  description:
    'Профессиональная помощь в получении вида на жительство, Карты Поляка и гражданства Польши. Полное сопровождение от подачи документов до получения карты побыту.',
  keywords: [
    'легализация в Польше',
    'карта побыту',
    'вид на жительство',
    'Карта Поляка',
    'кадровое сопровождение бизнеса',
    'воссоединение семьи',
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#4a7c59',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} min-h-screen font-sans antialiased`}>
        <I18nProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
