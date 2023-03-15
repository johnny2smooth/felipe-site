import type { Metadata } from 'next';
import { Locale } from './i18n-config';
import { getDictionary } from './get-dictionary';

export default async function metadataGenerator(
  path: 'about' | 'practice' | 'services' | 'writing' | 'home',
  lang: Locale
) {
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary[path].title + ' | Felipe Matamala',
    description: dictionary[path].description,
    generator: 'Next.js',
    applicationName: 'Felipe Matamala',
    referrer: 'origin-when-cross-origin',
    keywords: [
      'Felipe Matamala',
      'Matamala',
      'Felipe',
      'Psychoanalyst',
      'Psychoanalysis',
      'Psychotherapy',
      'Psychotherapist Supervision',
      'Psicoanalista',
      ' Psicoterapeuta',
      'Supervisor',
      ...dictionary[path].keywords,
    ],
    creator: '@johnny.2.smooth',
    openGraph: {
      title: dictionary[path].title,
      description: dictionary[path].description,
      url: `https://felipe-matamala.com/${lang}/${path === 'home' ? '' : path}`,
      siteName: 'Felipe Matamala',
      images: [
        {
          url: 'https://felipe-matamala.com/og.png',
          width: 800,
          height: 600,
        },
        {
          url: 'https://felipe-matamala.com/og-alt.png',
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
      locale: lang,
      type: 'website',
    },
    // icons: {
    //   icon: '/Ellipse.svg',
    //   shortcut: '/shortcut-icon.png',
    //   apple: '/apple-icon.png',
    //   other: {
    //     rel: 'apple-touch-icon-precomposed',
    //     url: '/apple-touch-icon-precomposed.png',
    //   },
    // },
    // themeColor: [
    //   { media: '(prefers-color-scheme: light)', color: 'cyan' },
    //   { media: '(prefers-color-scheme: dark)', color: 'black' },
    // ],
    alternates: {
      canonical: 'https://felipe-matamala.com',
      languages: {
        en: 'https://felipe-matamala.com/en',
        es: 'https://felipe-matamala.com/es',
      },
    },
  } as Metadata;
}
