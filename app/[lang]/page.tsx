import { getDictionary } from "../../get-dictionary";
import { Locale } from "i18n-config";
import Image, { StaticImageData } from "next/image";
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

      <div className="stack flex flex-col items-center">
        <ReverseFlexCard
          h3={dictionary.home.welcome.h3}
          p={dictionary.home.welcome.p}
          link={dictionary.nav.services}
          image={eye}
        />
        <ReverseFlexCard
          h3={dictionary.home.process.h3}
          p={dictionary.home.process.p}
          link={dictionary.nav.practice}
          image={eye}
        />
        <ReverseFlexCard
          h3={dictionary.home.howIHelp.h3}
          p={dictionary.home.howIHelp.p}
          link={dictionary.nav.about}
          image={eye}
        />
      </div>
      {/*  */}
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

const ReverseFlexCard = ({
  h3,
  p,
  link,
  image,
}: {
  h3: string;
  p: string;
  link: string;
  image: StaticImageData;
}) => {
  return (
    <div className="w-full flex flex-wrap-reverse gap-6 justify-center items-center border-b-2 border-[#A4D3FF] border-solid pb-4">
      <div className="stack max-w-prose">
        <h3 className="text-4xl">{h3}</h3>
        <p className="text-lg">{p}</p>
        <Link
          href="/services"
          className="self-end text-lg  border-[#A4D3FF] border-2 border-solid p-2 red-hat "
        >
          {link} &rarr;
        </Link>
      </div>
      <Image src={image} alt="placeholder" width={500} height={100} priority />
    </div>
  );
};
