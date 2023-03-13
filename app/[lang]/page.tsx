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
      {/* <Orbit /> */}
      <Bio lang={lang} />
      <Testamonial lang={lang} />
      <ApplicationForm lang={lang} />
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

const Bio = ({ lang }: { lang: Locale }) => {
  return (
    <div>
      <div style={{ background: 'black', color: 'white' }}>
        <h3>Felipe Matamala Practice</h3>
        <p>
          Amplifying the reach of psychoanalysis and its benefits. Amplifying
          the reach of psychoanalysis and its benefits. Amplifying the reach of
          psychoanalysis and its benefits. Amplifying the reach of
          psychoanalysis and its benefits. Amplifying the reach of
          psychoanalysis and its benefits.
        </p>
        <p>
          Amplifying the reach of psychoanalysis and its benefits. Amplifying
          the reach of psychoanalysis and its benefits. Amplifying the reach of
          psychoanalysis and its benefits. Amplifying the reach of
          psychoanalysis and its benefits. Amplifying the reach of
          psychoanalysis and its benefits.
        </p>
        <div>
          <h4>follow Felipe:</h4>
          <div>
            <ul>
              <li>Insta</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ background: '#4969ED' }}>
        <h4>
          <Link href={`/${lang}/client-signup`}>Become a Client</Link>
        </h4>
        <p>
          Amplifying the reach of psychoanalysis and its benefits. Amplifying
          the reach of psychoanalysis and its benefits.{' '}
        </p>
        <h4>
          <Link href={`/${lang}/student-signup`}>Have Felipe supervise me</Link>
        </h4>
        <p>
          Amplifying the reach of psychoanalysis and its benefits. Amplifying
          the reach of psychoanalysis and its benefits.{' '}
        </p>
        <form>
          <h4>Sign up for newsletter</h4>
          <p>What value will thye get from signing up?</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 18"
              fill="black"
              aria-hidden="true"
              // class="d-inline-block position-absolute top-0 left-0 mt-1 color-text-white"
              height="16"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.625 0A2.625 2.625 0 000 2.625v12.75A2.625 2.625 0 002.625 18h18.75A2.625 2.625 0 0024 15.375V3.769 2.625A2.625 2.625 0 0021.375 0H2.625zM21.75 3.105v-.48a.375.375 0 00-.375-.375H2.625a.375.375 0 00-.375.375v.48L12 8.821l9.75-5.716zM2.25 5.714v9.661c0 .207.168.375.375.375h18.75a.375.375 0 00.375-.375V5.714l-9.18 5.381a1.125 1.125 0 01-1.139 0l-9.18-5.381z"
              ></path>
            </svg>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              aria-label="Your email address"
            />
            {/* <span class="readme-input-border position-relative width-full d-block color-bg-default z-1"></span> */}
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Testamonial = ({ lang }: { lang: Locale }) => {
  return (
    <div className={styles.readmeBody}>
      <aside>
        <p className={styles.textGradient}>
          I was doing cool stuff—and I could start telling people about it! I
          would rather put myself out there than find myself at the end of my
          career, full of regret, wishing I had taken more risks. farts
        </p>
      </aside>
    </div>
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
        width="90vw"
        height="150"
        viewBox="-20 0 1200 100"
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
