"use client";

import Img from "@/components/html/img";
import AdditionalExperiences from "@/components/sections/additional-experiences";
import { ICONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import type { TOP_TOUR_SUMMARY_QUERYResult } from "@/sanity/types";
import { Icon } from "@iconify-icon/react";
import { PortableText } from "next-sanity";
import { Fragment, useState } from "react";

type Props = { data: TOP_TOUR_SUMMARY_QUERYResult };

export default function Itinerary({ data }: Props) {
  const [collapsed, setCollapsed] = useState<string[]>([]);

  const toggleCollapse = (key: string) => {
    setCollapsed((prev) => (prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]));
  };

  const isSelectedAll = collapsed.length === data?.itinerary?.itineraryItems?.length;

  const handleExpandCollapseAll = () => {
    if (isSelectedAll) {
      setCollapsed([]);
    } else {
      setCollapsed(data?.itinerary?.itineraryItems?.map((item) => item._key) || []);
    }
  };

  return (
    <article id="itinerary" className="p-shorter xl:px-36 2xl:px-longer5 flex flex-col lg:gap-6 gap-4">
      <section className="flex flex-col gap-2">
        <h1 className="font-bold text-dark font-source">{data?.itinerary?.title}</h1>
        <div className="text-gray">
          {data?.itinerary?.description ? (
            <PortableText
              value={data?.itinerary?.description}
              components={{
                block: {
                  normal: ({ children }) => <small>{children}</small>,
                },
              }}
            />
          ) : null}
        </div>
      </section>

      <section className="self-end">
        <button type="button" onClick={handleExpandCollapseAll} className="font-semibold flex items-center gap-2">
          {isSelectedAll ? "Collapse all days" : "Expand all days"}

          <Icon icon={ICONS.arrow} width={25} rotate={2} className={cn("animate", { "rotate-180": isSelectedAll })} />
        </button>
      </section>

      <section className="space-y-4">
        {data?.itinerary?.itineraryItems?.map((e, index) => {
          const isSelected = collapsed.includes(e._key);
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          const firstAndLastIndex = index === 0 || index === data?.itinerary?.itineraryItems?.length! - 1;

          return (
            <section key={e._key} className="rounded-md border-1 border-gray_lighter">
              <button
                type="button"
                onClick={() => toggleCollapse(e._key)}
                className={cn("flex items-center animate w-full lg:h-[7.5rem]", {
                  "border-b-1 border-gray_lighter bg-gray_hover text-white": isSelected,
                  "lg:h-[10rem]": firstAndLastIndex,
                })}
              >
                <div className={cn("w-0 lg:w-56 h-full animate-longer", { "w-0": isSelected })}>
                  {e?.image ? <Img src={urlFor(e.image).url()} alt={e?.title ?? ""} className="object-cover size-full rounded-l-md" /> : null}
                </div>

                <section className="w-full flex items-center justify-between p-4 lg:p-6">
                  <section className="flex flex-col gap-2 text-left text-dark w-full">
                    <section className="flex items-center gap-4 max-lg:justify-between max-lg:w-full">
                      <p className="font-semibold text-gray">Day {e.day}</p>
                      {e?.experienceType?.title ? (
                        <small
                          className="px-2 py-0.5 rounded-md font-semibold"
                          style={{ backgroundColor: e.experienceType.bgColor, color: e.experienceType.textColor }}
                        >
                          {e.experienceType.title}
                        </small>
                      ) : null}
                    </section>
                    <section className="flex lg:flex-row flex-col lg:gap-4">
                      <h5 className="text-dark font-bold font-source">{e?.title}</h5>
                      <small className="text-gray flex items-center">
                        {e?.cities?.map((city, index) => (
                          <Fragment key={index}>
                            {city}
                            {/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
                            {index < e?.cities?.length! - 1 && <Icon icon={ICONS.arrow2} width={15} rotate={1} className="mx-1" />}
                          </Fragment>
                        ))}
                      </small>
                    </section>

                    <section className="flex gap-4 items-center">
                      <ItineraryAttribute smallLabel condition={!!e?.arrivalTransfer} icon={ICONS.arrival} label="Arrival Transfer" />
                      <ItineraryAttribute smallLabel condition={!!e?.welcome} icon={ICONS.welcome} label="Welcome" />
                      <ItineraryAttribute smallLabel condition={!!e?.departureTransfer} icon={ICONS.departure} label="Departure Transfer" />
                    </section>
                  </section>

                  <section className="font-semibold flex items-center gap-2 text-dark">
                    <Icon icon={ICONS.arrow} width={25} rotate={2} className={cn("animate", { "rotate-180": isSelected })} />
                  </section>
                </section>
              </button>

              <section className={cn("animate-longer", { "-translate-y-4 opacity-0 invisible": !isSelected })}>
                <div className={cn("lg:p-8 p-4 space-y-4 lg:space-y-6", { hidden: !isSelected })}>
                  <section className="grid lg:grid-cols-2 gap-4 lg:gap-16">
                    <section className="space-y-2 max-lg:order-2">
                      <p className="font-semibold text-gray">Day {e.day}</p>
                      <h2 className="font-source font-bold text-dark">{e?.title}</h2>
                      <p className="text-gray">{e?.description}</p>

                      <section className="lg:pt-4 lg:pl-4 space-y-2 lg:space-y-6">
                        <ItineraryAttribute
                          condition={!!e?.arrivalTransfer}
                          icon={ICONS.arrival}
                          label={e?.arrivalTransfer ?? ""}
                          title="Arrival Transfer"
                        />
                        <ItineraryAttribute condition={!!e?.welcome} icon={ICONS.welcome} label={e?.welcome ?? ""} title="Welcome" />

                        <ItineraryAttribute
                          condition={!!e?.departureTransfer}
                          icon={ICONS.departure}
                          label={e?.departureTransfer ?? ""}
                          title="Departure Transfer"
                        />

                        <ItineraryAttribute
                          condition={!!e?.accommodation?.length}
                          icon={ICONS.accommodation}
                          label={e?.accommodation?.join(" / ") ?? ""}
                          title="Accommodation"
                        />
                        <ItineraryAttribute
                          condition={!!e?.meals?.length}
                          icon={ICONS.meals}
                          label={e.meals?.join(", ") ?? ""}
                          title="Included Meals"
                        />
                      </section>
                    </section>
                    {e?.image ? <Img src={urlFor(e.image).url()} alt={e?.title ?? ""} className="object-cover rounded-md aspect-video" /> : null}
                  </section>

                  {e?.experiences?.length ? <AdditionalExperiences data={e?.experiences} /> : null}
                </div>
              </section>
            </section>
          );
        })}
      </section>
    </article>
  );
}

const ItineraryAttribute = ({
  condition,
  label,
  icon,
  title,
  smallLabel,
}: { condition: boolean; label: string; icon: string; title?: string; smallLabel?: boolean }) => {
  if (!condition) return null;

  return (
    <section className="flex lg:flex-row flex-col lg:gap-2">
      <section className="flex gap-2 items-center">
        <Icon icon={icon} width={25} className="text-dark" />
        {title ? <p className="text-dark font-semibold">{title}</p> : null}
      </section>
      {smallLabel ? <small>{label}</small> : <p>{label}</p>}
    </section>
  );
};
