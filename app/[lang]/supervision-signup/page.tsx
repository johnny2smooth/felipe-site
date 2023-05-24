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
        <Banner lang={lang}>{dictionary['supervision-signup'].title}</Banner>
        <Orbit />
      </div>
      <h1>FORM</h1>
      <div className="flex flex-wrap justify-center gap-4 items-start">
        <CTA2 />
      </div>
    </div>
  );
}
