import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import Banner from '@/components/banner';
import Orbit from '@/components/orbit';
import CTA2 from '@/components/cta2';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="stack">
      <div className="relative">
        <Banner lang={lang}>Felipes {dictionary.services.title}</Banner>
        <Orbit />
      </div>
      <div className="border-2 border-solid border-[#496aed21] p-4 stack rounded-md">
        <h2 className="text-2xl">{dictionary.services.psychoanalysis.title}</h2>
        {dictionary.services.psychoanalysis.bodyArr.map((body, i) => (
          <p className="text-lg" key={i + `-${body.slice(0, 3)}`}>
            {body}
          </p>
        ))}
        <h2 className="text-2xl">{dictionary.services.psychotherapy.title}</h2>
        {dictionary.services.psychotherapy.bodyArr.map((body, i) => (
          <p className="text-lg" key={i + `-${body.slice(0, 3)}`}>
            {body}
          </p>
        ))}
        <h2 className="text-2xl">{dictionary.services.supervision.title}</h2>
        {dictionary.services.supervision.bodyArr.map((body, i) => (
          <p className="text-lg" key={i + `-${body.slice(0, 3)}`}>
            {body}
          </p>
        ))}
      </div>
      <CTA2 />
    </div>
  );
}
