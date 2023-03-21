import { getDictionary } from '../../get-dictionary';
import { Locale } from 'i18n-config';
import styles from './page.module.css';
import Orbit from '@/components/orbit';
import GradientTestamonial from '@/components/gradient-testamonial';
import CTA from '@/components/cta';
import Signup from '@/components/signup';
import Banner from '@/components/banner';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="stack">
      <div className="relative">
        <Banner lang={lang}>
          Feel <span style={{ textDecoration: 'underline' }}>safe</span> here.
        </Banner>
        <Orbit />
      </div>
      <div className="flex flex-wrap p-4">
        <div className="stack flex flex-wrap max-w-prose center">
          {dictionary.home.bodyArr.map((body, i) => (
            <p key={i + `-${body.slice(0, 3)}`}>{body}</p>
          ))}
        </div>
        <GradientTestamonial quote={dictionary.testamonials.person1} />
        {/* @ts-expect-error Server Component */}
        <CTA
          lang={lang}
          title={dictionary.cta.title1}
          bodyArray={[dictionary.cta.body1, dictionary.cta.body2]}
        />
      </div>
      {/* @ts-expect-error Server Component */}
      <Signup lang={lang} userType="patient" />
    </div>
  );
}
