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
    <div className="stack flex-col items-center">
      <div className="relative">
        <Banner lang={lang}>{dictionary.about.title}</Banner>
        <Orbit />
      </div>
      <div className="flex flex-wrap justify-center gap-4 items-start">
        <div className="border-2 border-solid border-[#a4d3ff99] p-4 stack rounded-md max-w-prose">
          {dictionary.about.bodyArr.map((body, i) => (
            <p className="text-lg" key={i + `-${body.slice(0, 3)}`}>
              {body}
            </p>
          ))}
        </div>
        <CTA2 />
      </div>
    </div>
  );
}
