import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <h1>{dictionary.writing.title}</h1>
      <h2>{dictionary.writing.description}</h2>
    </>
  );
}
