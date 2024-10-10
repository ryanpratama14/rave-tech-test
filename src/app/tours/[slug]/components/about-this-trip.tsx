"use client";

import { ICONS } from "@/lib/constants";
import type { SightseeingHighlights, TOP_TOUR_SUMMARY_QUERYResult } from "@/sanity/types";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { PortableText } from "next-sanity";

type Props = { data: TOP_TOUR_SUMMARY_QUERYResult };

export default function AboutThisTrip({ data }: Props) {
  return (
    <article className="p-shorter xl:px-36 2xl:px-longer5 flex flex-col divide-y-1 divide-gray_lighter">
      <section className="flex flex-col gap-6 py-10 max-lg:text-center w-full">
        <h1>{data?.sightseeingHighlights?.menuTitle}</h1>
        <section className="grid lg:grid-cols-3 gap-4">
          <section className="max-lg:mb-6 flex flex-col gap-2 max-lg:items-center max-lg:justify-center max-lg:text-center">
            <h2 className="text-green">{data?.sightseeingHighlights?.title}</h2>
            {data?.sightseeingHighlights?.cta?.ctaTitle ? (
              <section className="space-y-4">
                <small className="text-gray">{data?.sightseeingHighlights?.cta?.description}</small>
                <button
                  className="hidden lg:block font-bold w-fit animate px-9 py-3 bg-green hover:bg-white hover:text-green text-white border-1 border-green"
                  type="button"
                >
                  {data?.sightseeingHighlights?.cta?.ctaTitle}
                </button>
              </section>
            ) : null}
          </section>

          <ContentRenderer data={data?.sightseeingHighlights?.firstHighlights} />
          <section className="flex flex-col gap-8">
            <ContentRenderer data={data?.sightseeingHighlights?.secondHighlights} />
            <button
              className="mx-auto font-bold w-fit animate px-9 py-3 bg-green hover:bg-white hover:text-green text-white border-1 border-green lg:hidden"
              type="button"
            >
              {data?.sightseeingHighlights?.cta?.ctaTitle}
            </button>
          </section>
        </section>
      </section>

      <section className="grid lg:grid-cols-3 gap-4 py-10">
        <section className="max-lg:mb-6 flex flex-col gap-2 max-lg:items-center max-lg:justify-center max-lg:text-center">
          <h2 className="text-red_darker">{data?.travelHighlights?.title}</h2>
          {data?.travelHighlights?.cta?.ctaTitle ? (
            <section className="space-y-4">
              <small className="text-gray">{data?.travelHighlights?.cta?.description}</small>
              <button
                className="hidden lg:block font-bold w-fit animate px-9 py-3 bg-red_darker hover:bg-white hover:text-red_darker text-white border-1 border-red_darker"
                type="button"
              >
                {data?.travelHighlights?.cta?.ctaTitle}
              </button>
            </section>
          ) : null}
        </section>

        <section className="flex flex-col gap-4">
          {data?.travelHighlights?.firstHighlights?.map((e) => {
            return (
              <section key={e} className="flex gap-6">
                <Icon icon={ICONS.check} className="text-red_darker" width={40} />
                <small>{e}</small>
              </section>
            );
          })}
        </section>

        <section className="flex flex-col gap-8">
          <section className="flex flex-col gap-4">
            {data?.travelHighlights?.secondHighlights?.map((e) => {
              return (
                <section key={e} className="flex gap-6">
                  <Icon icon={ICONS.check} className="text-red_darker" width={40} />
                  <small>{e}</small>
                </section>
              );
            })}
          </section>
          <button
            className="mx-auto font-bold w-fit animate px-9 py-3 bg-red_darker hover:bg-white hover:text-red_darker text-white border-1 border-red_darker lg:hidden"
            type="button"
          >
            {data?.travelHighlights?.cta?.ctaTitle}
          </button>
        </section>
      </section>
    </article>
  );
}

const ContentRenderer = ({ data }: { data: SightseeingHighlights["firstHighlights"] }) => {
  return (
    <section className="flex flex-col gap-4">
      {data?.map((block) => {
        return (
          <section key={block._key} className="flex gap-6 text-left sightsee-style">
            <Icon icon={ICONS.itinerary} className="text-green inline-flex" width={40} />
            <PortableText value={block} />
          </section>
        );
      })}
    </section>
  );
};
