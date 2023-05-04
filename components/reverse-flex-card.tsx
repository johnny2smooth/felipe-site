import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function ReverseFlexCard({
  h3,
  p,
  link,
  image,
}: {
  h3: string;
  p: string;
  link: string;
  image: StaticImageData;
}) {
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
}
