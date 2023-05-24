import { getDictionary } from '../../get-dictionary';
import { Locale } from 'i18n-config';
import ReverseFlexCard from '@/components/reverse-flex-card';
import Orbit from '@/components/orbit';
import CTA from '@/components/cta';
import Signup from '@/components/signup';
import Banner from '@/components/banner';
import pinkEye from 'public/eye-pink.png';
import blueEye from 'public/blue-eye.png';
import nova from 'public/nova.png';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="stack flex-col justify-center items-center px-2">
      <div className="relative">
        <Banner lang={lang}>{dictionary.home.banner}</Banner>
        <Orbit />
      </div>

      <div className="stack flex flex-col items-center">
        <ReverseFlexCard
          h3={dictionary.home.welcome.h3}
          p={dictionary.home.welcome.p}
          link={dictionary.nav.services}
          image={blueEye}
        />
        <ReverseFlexCard
          h3={dictionary.home.process.h3}
          p={dictionary.home.process.p}
          link={dictionary.nav.practice}
          image={nova}
        />
        <ReverseFlexCard
          h3={dictionary.home.howIHelp.h3}
          p={dictionary.home.howIHelp.p}
          link={dictionary.nav.about}
          image={pinkEye}
        />
      </div>
      {/*  */}
      {/* @ts-expect-error Server Component */}
      <CTA
        lang={lang}
        title={dictionary.cta.title1}
        bodyArray={[dictionary.cta.body1, dictionary.cta.body2]}
      />
    </div>
  );
}
