import { getDictionary } from "../../get-dictionary";
import { Locale } from "i18n-config";
import Image from "next/image";
import Link from "next/link";
import Orbit from "@/components/orbit";
import CTA from "@/components/cta";
import Signup from "@/components/signup";
import Banner from "@/components/banner";
import eye from "public/eye.png";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="stack flex-col justify-center items-center px-2">
      <div className="relative">
        <Banner lang={lang}>
          I want to help{" "}
          <span style={{ textDecoration: "underline" }}>guide you</span> through
          your personal journey.
        </Banner>
        <Orbit />
      </div>
      <div className="flex flex-col">
        <Image src={eye} alt="placeholder" priority />
      </div>
      <div className="stack flex flex-col items-start">
        <h3 className="text-4xl">{dictionary.home.welcome.h3}</h3>
        <p className="text-lg">{dictionary.home.welcome.p}</p>
        <Link
          href="/services"
          className="self-end text-lg  border-[#A4D3FF] border-2 border-solid p-2 red-hat "
        >
          {dictionary.nav.services} &rarr;
        </Link>

        <h3 className="text-4xl">{dictionary.home.process.h3}</h3>
        <p className="text-lg">{dictionary.home.process.p}</p>
        <Link
          href="/services"
          className="self-end text-lg  border-[#A4D3FF] border-2 border-solid p-2 red-hat "
        >
          {dictionary.nav.practice} &rarr;
        </Link>

        <h3 className="text-4xl">{dictionary.home.howIHelp.h3}</h3>
        <p className="text-lg">{dictionary.home.howIHelp.p}</p>
        <Link
          href="/services"
          className="self-end text-lg  border-[#A4D3FF] border-2 border-solid p-2 red-hat "
        >
          {dictionary.nav.about} &rarr;
        </Link>
      </div>

      {/* @ts-expect-error Server Component */}
      <CTA
        lang={lang}
        title={dictionary.cta.title1}
        bodyArray={[dictionary.cta.body1, dictionary.cta.body2]}
      />
      {/* @ts-expect-error Server Component */}
      <Signup lang={lang} userType="patient" />
    </div>
  );
}
