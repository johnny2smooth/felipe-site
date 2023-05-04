import { Locale } from "@/i18n-config";
export default function Banner({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <header className="absolute w-[95%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className={`s2 text-center md:text-4xl text-black`}>{children}</h2>
    </header>
  );
}
