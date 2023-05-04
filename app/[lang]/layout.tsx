import { i18n } from "@/i18n-config";
import type { Locale, LangParams } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import "./globals.css";
import metadataGenerator from "@/metadata-generator";
import Nav from "@/components/nav";
import "@fontsource/lora";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params: { lang } }: LangParams) {
  return await metadataGenerator("home", lang);
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { practice, writing, services, about } = dictionary;
  return (
    <html lang={lang}>
      <body
        className="p-4 mx-auto max-w-7xl flex-col  justify-center items-center"
        style={{ fontFamily: '"Lora",serif' }}
      >
        <header className="flex w-full sticky top-0 z-50 bg-gradient-to-b from-white  to-[rgba(255,255,255,.95)] pt-2 ">
          <Nav
            lang={lang}
            endpoints={["practice", "about", "services"]}
            translations={dictionary.nav}
          />
        </header>
        <main className="stack relative">{children}</main>
      </body>
    </html>
  );
}
