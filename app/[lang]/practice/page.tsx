import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="stack">
      <h1>{dictionary.practice.title}</h1>
      {dictionary.practice.bodyArr.map((body, i) => (
        <p key={i + `-${body.slice(0, 3)}`}>{body}</p>
      ))}
    </div>
  );
}
