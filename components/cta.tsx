import { Locale } from '@/i18n-config';
import Link from 'next/link';
import { getDictionary } from '@/get-dictionary';

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
    <div>
      <div className="stack" style={{ background: 'black', color: 'white' }}>
        <h3>{title}</h3>
        {bodyArray.map((content, i) => (
          <div key={i + `${content.slice(1, 5)}`}>
            <p>{content}</p>
          </div>
        ))}
        <div>
          <h4>{dictionary.follow}</h4>
          <div>
            <ul>
              {/* link to correct spots */}
              <li>
                <a href="/">icon to external</a>
              </li>
              <li>
                <a href="/">icon to external</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="stack" style={{ background: '#4969ED' }}>
        <h4>
          <Link href={`/${lang}/client-signup`}>{dictionary.becomeClient}</Link>
        </h4>
        <p>{dictionary.becomeClientContent}</p>
        <h4>
          <Link href={`/${lang}/student-signup`}>
            {dictionary.becomeStudent}
          </Link>
        </h4>
        <p>{dictionary.becomeStudentContent}</p>
        <form>
          <h4>{dictionary.newsletterSignup}</h4>
          <p>{dictionary.newsletterContent}</p>
          <div className="flex">
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
              placeholder={dictionary.emailPlaceholder}
              aria-label={dictionary.emailPlaceholder}
            />
            {/* <span class="readme-input-border position-relative width-full d-block color-bg-default z-1"></span> */}
            <button type="submit">{dictionary.subscribe}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
