import { getDictionary } from '../../get-dictionary';
import { Locale } from 'i18n-config';
import styles from './page.module.css';
import Orbit from '@/components/orbit';
import GradientTestamonial from '@/components/gradient-testamonial';
import CTA from '@/components/cta';
import Signup from '@/components/signup';
import Image from 'next/image';
import screenshot from '@/public/screenshot.png';
import Ellipse from '@/public/Ellipse.svg';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="stack">
      <div className="relative">
        <Banner lang={lang} />
        <Orbit />
      </div>
      {dictionary.home.bodyArr.map((body, i) => (
        <p key={i + `-${body.slice(0, 3)}`}>{body}</p>
      ))}
      {/* @ts-expect-error Server Component */}
      <CTA
        lang={lang}
        title={dictionary.cta.title1}
        bodyArray={[dictionary.cta.body1, dictionary.cta.body2]}
      />
      <GradientTestamonial quote={dictionary.testamonials.person1} />
      {/* @ts-expect-error Server Component */}
      <Signup lang={lang} userType="patient" />
    </div>
  );
}

const Banner = ({ lang }: { lang: Locale }) => {
  return (
    <header className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className={`md:text-4xl text-[#4969ED]`}>
        Something to make you feel{' '}
        <span style={{ textDecoration: 'underline' }}>safe</span> here.
      </h1>
    </header>
  );
};
