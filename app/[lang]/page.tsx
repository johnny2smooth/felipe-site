import { getDictionary } from '../../get-dictionary';
import { Locale } from 'i18n-config';
import Counter from './counter';
import styles from './page.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
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
      <div
        style={{ height: '1000px', width: '1000px' }}
        className={styles.noise}
      ></div>
    </>
  );
}
