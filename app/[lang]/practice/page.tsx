import Banner from "@/components/banner";
import Orbit from "@/components/orbit";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import CTA2 from "@/components/cta2";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="stack">
      <div className="relative">
        <Banner lang={lang}>{dictionary.practice.title}</Banner>
        <Orbit />
      </div>
      <div className="border-2 border-solid border-[#a4d3ff99] p-4 stack rounded-md">
        {dictionary.practice.bodyArr.map((body, i) => (
          <p className="text-lg" key={i + `-${body.slice(0, 3)}`}>
            {body}
          </p>
        ))}
      </div>
      <CTA2 />
    </div>
  );
}
