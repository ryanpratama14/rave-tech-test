"use client";

import { ICONS } from "@/lib/constants";
import { urlFor } from "@/sanity/lib/image";
import type { TOP_TOUR_SUMMARY_QUERYResult } from "@/sanity/types";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { PortableText } from "next-sanity";
import Link from "next/link";
import InnerImageZoom from "react-inner-image-zoom";

type Props = { data: TOP_TOUR_SUMMARY_QUERYResult };

export default function AdditionalInfo({ data }: Props) {
  return (
    <article className="px-shorter xl:px-36 2xl:px-longer5 flex flex-col">
      <section className="py-shorter lg:py-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-4 lg:gap-16">
        <Feature
          condition={!!data?.additionalInfo?.depositAmount}
          icon={ICONS.deposit}
          text={`Low deposit from ${new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR" }).format(data?.additionalInfo?.depositAmount ?? 0)}`}
        />
        <Feature condition={!!data?.additionalInfo?.depositProtection} icon={ICONS.depositProtection} text="Deposit protection" />
        <Feature condition={!!data?.additionalInfo?.freeBookingChanges} icon={ICONS.freeBookingChanges} text="Free booking changes" />
      </section>

      <section className="bg-[#125A55] rounded-md flex items-center justify-center px-4 py-6 text-white">
        {data?.additionalInfo?.cta ? (
          <PortableText
            value={data?.additionalInfo?.cta}
            components={{
              marks: {
                link: ({ value, children }) => {
                  const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
                  return (
                    <Link href={value?.href} target={target} rel={"_blank"} className="border-b-1 hover:border-solid border-dotted border-red">
                      {children}
                    </Link>
                  );
                },
              },
            }}
          />
        ) : null}
      </section>

      <section className="flex flex-col gap-4 text-center lg:pt-10 pt-shorter">
        <h1 className="font-bold font-source text-dark">{data?.additionalInfo?.mapImageTitle}</h1>
        <section className="grid grid-cols-3 shadow-md bg-white">
          {data?.additionalInfo?.mapImage ? (
            <section className="col-span-2">
              <InnerImageZoom src={urlFor(data?.additionalInfo?.mapImage).url()} zoomSrc={urlFor(data?.additionalInfo?.mapImage).url()} />
            </section>
          ) : null}

          <section className="flex flex-col gap-4 text-left">
            <p>Legend</p>
            {[
              { icon: ICONS.dot, color: "#4B6B35", label: "Start Location" },
              { icon: ICONS.dot, color: "#E01F44", label: "End Location" },
              { icon: ICONS.dotOne, color: "#414141", label: "Over night" },
              { icon: ICONS.dotVisited, color: "#414141", label: "Visited Location" },
              { icon: ICONS.dot, color: "#2D5A7B", label: "Optional Location" },
              { icon: ICONS.plane, color: "#414141", label: "Plane" },
              { icon: ICONS.cruise, color: "#414141", label: "Cruise" },
              { icon: ICONS.train, color: "#414141", label: "Train" },
            ].map((e) => {
              return (
                <section key={e.label} className="flex items-center gap-2">
                  <Icon style={{ color: e.color }} icon={e.icon} width={25} />
                  <p className="font-bold">{e.label}</p>
                </section>
              );
            })}
          </section>
        </section>
      </section>
    </article>
  );
}

const Feature = ({ condition, icon, text }: { condition: boolean; text: string; icon: string }) => {
  if (!condition) return null;

  return (
    <section className="flex gap-4 items-center">
      <div className="flex items-center justify-center bg-[#F2F2F2] size-12 lg:size-14 rounded-full">
        <Icon icon={icon} width={30} className="text-gray" />
      </div>
      <p className="font-semibold text-dark">{text}</p>
    </section>
  );
};
