import { Locale } from "@/i18n-config";
import metadataGenerator from "@/metadata-generator";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return await metadataGenerator("about", lang);
}

export default function Root({ children }: { children: React.ReactNode }) {
  return <div className="stack">{children}</div>;
}
