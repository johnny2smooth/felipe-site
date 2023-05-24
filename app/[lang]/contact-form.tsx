'use client';

import { Locale } from '@/i18n-config';
import { FormEvent, useState } from 'react';
import Link from 'next/link';

type Contact = {
  title: string;
  required: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  organization: string;
  organizationPlaceholder: string;
  contact: string;
};

export default function ContactForm({
  contact,
  lang,
}: {
  contact: Contact;
  lang: Locale;
}) {
  const [submissionStatus, setSubmissionStatus] = useState<null | string>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let form = e.target as HTMLFormElement;

    let formData = new FormData(form);

    let response = await fetch(`/${lang}/api/hello`, {
      method: 'POST',
      body: JSON.stringify({
        ...Object.fromEntries(formData.entries()),
        lang,
      }),
    });

    let { error } = await response.json();
    if (error) {
      setSubmissionStatus('error');
    }

    setSubmissionStatus('submitted');
  }

  return (
    <div
      id="contact"
      className="stack bg-black p-4 rounded-md w-96 mx-auto min-h-[200px] transition-all"
    >
      {submissionStatus === 'submitted' && (
        <div className="flex flex-col w-full items-center gap-4 transition-all">
          <h4 className="text-3xl text-white">Thank you!</h4>
          <p className="text-xl text-white">
            We will reach out to you directly very soon 🙂
          </p>
          <p className="text-xl text-white">
            In the meantime, feel free to check out our{' '}
            <Link
              href={`${lang}/team`}
              className="underline underline-offset-2"
            >
              Team
            </Link>
            {', '}
            <Link
              href={`${lang}/testimonials`}
              className="underline underline-offset-2"
            >
              Testimonials
            </Link>
            {', or our '}
            <Link
              href={`${lang}/methods`}
              className="underline underline-offset-2"
            >
              Methods
            </Link>
            .
          </p>
        </div>
      )}
      {submissionStatus === 'error' && (
        <div className="flex flex-col w-full items-center gap-4 transition-all">
          <h4 className="text-3xl text-white">There was an error!</h4>
          <p className="text-xl text-white">
            Please reach out directly to{' '}
            <a
              href="mailto:sjiribar@uw.edu"
              className="underline underline-offset-4"
            >
              sjiribar@uw.edu
            </a>
          </p>
        </div>
      )}
      {!submissionStatus && (
        <>
          <h3 className="text-2xl text-[#A4D3FF] ">{contact.title}</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col text-lg w-full">
                <div className="flex space-between">
                  <label htmlFor="name" className="text-[#A4D3FF] grow">
                    {contact.name}{' '}
                  </label>
                  <p className="text-xs self-end text-[#A4D3FF]">
                    {contact.required}*
                  </p>
                </div>
                <input
                  className="bg-[#cce0ffe5] rounded-md text-black px-2 py-1 text-md"
                  type="text"
                  id="name"
                  name="name"
                  placeholder={contact.namePlaceholder}
                  autoComplete="name"
                  required
                />
              </div>
              <div className="flex flex-col text-lg w-full">
                <div className="flex space-between">
                  <label htmlFor="email" className="text-[#A4D3FF] grow">
                    {contact.email}{' '}
                  </label>
                  <p className="text-xs self-end text-[#A4D3FF]">
                    {contact.required}*
                  </p>
                </div>
                <input
                  className="bg-[#cce0ffe5] rounded-md text-black px-2 py-1 text-md"
                  type="email"
                  id="email"
                  name="email"
                  placeholder={contact.emailPlaceholder}
                  autoComplete="email"
                  required
                />
              </div>
              <div className="flex flex-col text-lg w-full">
                <label htmlFor="organization" className="text-[#A4D3FF] grow">
                  {contact.organization}
                </label>
                <input
                  className="bg-[#cce0ffe5] rounded-md text-black px-2 py-1 text-md"
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder={contact.organizationPlaceholder}
                />
              </div>
              <div className="flex self-end">
                <button
                  className="bg-[#A4D3FF] rounded-md text-black px-2 py-1 text-lg"
                  type="submit"
                >
                  {contact.contact}
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
