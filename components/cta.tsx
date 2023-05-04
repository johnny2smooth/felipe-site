import { Locale } from "@/i18n-config";
import Link from "next/link";
import { getDictionary } from "@/get-dictionary";

export default async function CTA({
  lang,
  title,
  bodyArray,
}: {
  lang: Locale;
  title: string;
  bodyArray: string[];
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="flex flex-col items-center w-full">
      <div
        id="cta-signup"
        className="stack grow p-4 text-black bg-[#A4D3FF] rounded-md max-w-prose red-hat"
      >
        <h4 className="red-cap">
          <Link
            href={`/${lang}/client-signup`}
            className={`text-2xl underline underline-offset-4 red-cap font-thin`}
          >
            {dictionary.becomeClient} &#8599;
          </Link>
        </h4>
        <p>{dictionary.becomeClientContent}</p>
        <h4>
          <Link
            href={`/${lang}/supervision-signup`}
            className={`text-2xl underline underline-offset-4 font-thin`}
          >
            {dictionary.becomeStudent} &#8599;
          </Link>
        </h4>
        <p>{dictionary.services.supervision.bodyArr[0]}</p>

        {/* <h4>
          <Link href={`/${lang}/student-signup`} className={`underline`}>
            {dictionary.becomeStudent} &rarr;
          </Link>
        </h4>
        <p>{dictionary.becomeStudentContent}</p> */}

        {/* <form className="">
          <h4>{dictionary.newsletterSignup}</h4>
          <p>{dictionary.newsletterContent}</p>
          <div className="flex flex-wrap items-center gap-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 18"
              fill="white"
              aria-hidden="true"
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
              placeholder={dictionary.emailPlaceholder}
              aria-label={dictionary.emailPlaceholder}
            />
            <button type="submit">{dictionary.subscribe}</button>
          </div>
        </form> */}
      </div>
    </div>
  );
}
