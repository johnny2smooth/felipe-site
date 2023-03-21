import { Locale } from '@/i18n-config';
export default function Banner({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <header className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className={`s2 md:text-4xl text-[#4969ED]`}>{children}</h1>
    </header>
  );
}
