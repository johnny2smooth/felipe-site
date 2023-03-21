import Link from 'next/link';

export default function CTA2() {
  return (
    <div className="flex flex-wrap bg-[#4969ed] text-white stack p-4 rounded-md">
      <h2 className="text-3xl max-w-prose font-thin font-sans">
        Amplifying the reach of psychoanalysis and its benefits
      </h2>
      <p className="text-lg font-sans max-w-prose font-light">
        No, seriously. Tell me why you are to be trusted? I know that a lot of
        people struggle to find suitable care which is also personalized.
      </p>
      <p className="text-lg font-sans max-w-prose font-light">
        A home page is the place where they need to feel like they’re being
        seen. How can we ease them in? I should really do some user research and
        find out what it feels like to try to find care. Especially a care where
        you feel safe.
      </p>
      <div className="flex justify-end underline underline-offset-8 text-xl">
        <Link href="/">learn more &rarr;</Link>
      </div>
    </div>
  );
}
