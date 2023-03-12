import { getDictionary } from '../../get-dictionary';
import { Locale } from 'i18n-config';
import LocaleSwitcher from './locale-switcher';
import Counter from './counter';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <LocaleSwitcher />
      <h1>{dictionary.title}</h1>
      <p>This page is currently in {lang}</p>
      <Counter dictionary={dictionary.counter} />
    </div>
  );
}
