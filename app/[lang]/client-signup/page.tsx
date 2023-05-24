import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import Banner from '@/components/banner';
import Orbit from '@/components/orbit';
import CTA2 from '@/components/cta2';
import ContactForm from '../contact-form';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="stack flex-col items-center">
      <div className="relative">
        <Banner lang={lang}>{dictionary.contact.title}</Banner>
        <Orbit />
      </div>
      <ContactForm contact={dictionary['client-signup'].contact} lang={lang} />
      <div className="flex flex-wrap justify-center gap-4 items-start"></div>
    </div>
  );
}
