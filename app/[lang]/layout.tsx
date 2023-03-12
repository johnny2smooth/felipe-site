import { i18n } from '@/i18n-config';
import type { Locale } from '@/i18n-config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'hello! This will be overwritten when a page below me has a title!',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
