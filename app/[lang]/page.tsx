import { getDictionary } from '../../get-dictionary';
import { Locale } from 'i18n-config';
import Counter from './counter';
import Orbit from '@/components/orbit';
import GradientTestamonial from '@/components/gradient-testamonial';
import CTA from '@/components/cta';
import Signup from '@/components/signup';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <h1>{dictionary.title}</h1>
      <p>This page is currently in {lang}</p>
      <Counter dictionary={dictionary.counter} />
      <Banner lang={lang} />
      <Orbit />
      {/* @ts-expect-error Server Component */}
      <CTA
        lang={lang}
        title={dictionary.cta.title1}
        bodyArray={[dictionary.cta.body1, dictionary.cta.body2]}
      />
      <GradientTestamonial quote={dictionary.testamonials.person1} />
      {/* @ts-expect-error Server Component */}
      <Signup lang={lang} userType="patient" />
    </>
  );
}

const Banner = ({ lang }: { lang: Locale }) => {
  return (
    <header className={`banner`}>
      <h1>
        Something to make you feel{' '}
        <span style={{ textDecoration: 'underline' }}>safe</span> here.
      </h1>
    </header>
  );
};
