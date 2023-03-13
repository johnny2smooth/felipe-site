import { getDictionary } from '../../get-dictionary';
import { Locale, LangParams } from 'i18n-config';
import Counter from './counter';
import styles from './page.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

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
      <ApplicationForm lang={lang} />
      <Orbit />
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

const ApplicationForm = ({ lang }: { lang: Locale }) => {
  return (
    <>
      <h3>I am currently not accepting new patients</h3>
      <p>If you would like to join the waitlist...</p>
      <form>
        <label htmlFor="test">testing:</label>
        <input type="text" name="test" id="test" required />
      </form>
    </>
  );
};

const Orbit = () => {
  return (
    <div style={{ maxWidth: '500px' }}>
      <svg
        width="700"
        height="450"
        viewBox="-20 -20 1400 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          z="2"
          cx="20"
          cy="20"
          rx="20"
          ry="20"
          fill="#4969ED"
          className={styles.orbit}
          transform="translate(100px,20px)"
        />
        <path
          d="M1092 87.5C1092 93.0865 1088.46 98.7265 1081.28 104.347C1074.12 109.953 1063.49 115.405 1049.7 120.624C1022.14 131.057 982.199 140.471 932.776 148.384C833.945 164.208 697.376 174 546.5 174C395.624 174 259.055 164.208 160.224 148.384C110.801 140.471 70.8618 131.057 43.3007 120.624C29.5147 115.405 18.8847 109.953 11.7192 104.347C4.53621 98.7265 1 93.0865 1 87.5C1 81.9135 4.53621 76.2735 11.7192 70.6533C18.8847 65.0467 29.5147 59.5949 43.3007 54.3763C70.8618 43.9432 110.801 34.5287 160.224 26.6156C259.055 10.7919 395.624 1 546.5 1C697.376 1 833.945 10.7919 932.776 26.6156C982.199 34.5287 1022.14 43.9432 1049.7 54.3763C1063.49 59.5949 1074.12 65.0467 1081.28 70.6533C1088.46 76.2735 1092 81.9135 1092 87.5Z"
          stroke="#4969ED"
          stroke-width="2"
        />
        <path />
      </svg>
    </div>
  );
};
