import { Metadata } from 'next';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.practice.title,
  } as Metadata;
}

export default function Root({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
