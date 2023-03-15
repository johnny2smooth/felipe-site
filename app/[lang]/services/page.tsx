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
      <h1>{dictionary.services.title}</h1>
      <h2>{dictionary.services.psychoanalysis.title}</h2>
      {dictionary.services.psychoanalysis.bodyArr.map((body, i) => (
        <p key={i + `-${body.slice(0, 3)}`}>{body}</p>
      ))}
      <h2>{dictionary.services.psychotherapy.title}</h2>
      {dictionary.services.psychotherapy.bodyArr.map((body, i) => (
        <p key={i + `-${body.slice(0, 3)}`}>{body}</p>
      ))}
      <h2>{dictionary.services.supervision.title}</h2>
      {dictionary.services.supervision.bodyArr.map((body, i) => (
        <p key={i + `-${body.slice(0, 3)}`}>{body}</p>
      ))}
    </>
  );
}
