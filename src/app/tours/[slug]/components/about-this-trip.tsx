"use client";

import { ICONS } from "@/lib/constants";
import type { TOP_TOUR_SUMMARY_QUERYResult } from "@/sanity/types";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

type Props = { data: TOP_TOUR_SUMMARY_QUERYResult };

export default function AboutThisTrip({ data }: Props) {
  console.log(data?.travelHighlights);
  return (
    <article className="py-normal px-longer5 flex flex-col">
      <section className="flex flex-col gap-6 py-6">
        <h1 className="text-dark font-bold">About this trip</h1>
        <section className="grid grid-cols-2 gap-4">
          <h2 className="font-bold text-green">Sightseeing highlights</h2>
        </section>
      </section>

      <section className="grid grid-cols-3 gap-4 py-6">
        <section className="flex flex-col space-y-3">
          <section className="space-y-2">
            <h2 className="font-bold text-red_darker font-source">Travel highlights</h2>
            <small className="text-gray">Specific transfer information can be found here:</small>
          </section>
          <button
            className="font-bold w-fit animate px-6 py-3 bg-red_darker hover:bg-white hover:text-red_darker text-white border-1 border-red_darker"
            type="button"
          >
            Airport Transfers
          </button>
        </section>

        <section className="flex flex-col gap-6">
          {data?.travelHighlights?.firstHighlights?.map((e) => {
            return (
              <section key={e} className="flex gap-6">
                <Icon icon={ICONS.check} className="text-red_darker" width={40} />
                <small>{e}</small>
              </section>
            );
          })}
        </section>

        <section className="flex flex-col gap-6">
          {data?.travelHighlights?.secondHighlights?.map((e) => {
            return (
              <section key={e} className="flex gap-6">
                <Icon icon={ICONS.check} className="text-red_darker" width={40} />
                <small>{e}</small>
              </section>
            );
          })}
        </section>
      </section>
    </article>
  );
}
