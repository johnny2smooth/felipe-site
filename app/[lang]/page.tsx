import { getDictionary } from '../../get-dictionary';
import { Locale, LangParams } from 'i18n-config';
import Counter from './counter';
import styles from './page.module.css';
import Link from 'next/link';
import { Metadata } from 'next';
import Orbit from '@/components/orbit';
import GradientTestamonial from '@/components/gradient-testamonial';
import CTA from '@/components/cta';
import Signup from '@/components/signup';

export async function generateMetadata({ params: { lang } }: LangParams) {
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.home,
  } as Metadata;
}

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <h1>{dictionary.title}</h1>
      <ul>
        <li>
          <Link href={`${lang}/about`}>{dictionary.about}</Link>
        </li>
        <li>
          <Link href={`${lang}/contact`}>{dictionary.contact}</Link>
        </li>
      </ul>
      <p>This page is currently in {lang}</p>
      <Counter dictionary={dictionary.counter} />
      <Banner lang={lang} />
      {/* <Orbit /> */}
      {/* @ts-expect-error Server Component */}
      <CTA
        lang={lang}
        title={dictionary.cta.title1}
        bodyArray={[dictionary.cta.body1, dictionary.cta.body2]}
      />
      <GradientTestamonial quote={dictionary.about} />
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
