import { Locale } from '@/i18n-config';
import type { Metadata } from 'next';
import { getDictionary } from '@/get-dictionary';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.services.title,
  } as Metadata;
}

export default function Root({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
