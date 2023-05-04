import Link from "next/link";

export default function CTA2() {
  return (
    <div className="flex flex-col items-start bg-[#a4d3ff99] text-black stack p-4 rounded-md max-w-sm">
      <h2 className="text-3xl max-w-prose font-thin red-hat ">
        Amplifying the reach of psychoanalysis and its benefits
      </h2>
      <p className="text-lg red-hat max-w-prose font-light">
        I strive to be the best guide that I can be for every person who is
        looking for support. I provide tailored and effective care for all of my
        clients.
      </p>
      <p className="text-lg red-hat max-w-prose font-light">
        Please, feel free to reach out to me with any questions. I am well aware
        of the uncertainties one may feel when asking for help. You can rest
        assured that I will be able to provide assistance in any way that I can.
      </p>
      <div className="self-end border-2 border-white border-solid text-xl p-2 red-hat">
        <Link href="/">Contact Me &#8599;</Link>
      </div>
    </div>
  );
}
