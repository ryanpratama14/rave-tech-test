import Img from "@/components/html/img";
import Tooltip from "@/components/tooltip";
import { ICONS } from "@/lib/constants";
import { urlFor } from "@/sanity/lib/image";
import type { TOP_TOUR_SUMMARY_QUERYResult } from "@/sanity/types";
import { Icon } from "@iconify-icon/react";

type Props = { data: TOP_TOUR_SUMMARY_QUERYResult };

export default function TopTourSummary({ data }: Props) {
  const SUMMARIES = [
    { icon: ICONS.travel, label: "Travel", description: data?.travel },
    { icon: ICONS.accommodation, label: "Accommodation", description: data?.accommodation },
    { icon: ICONS.meals, label: "Meals", description: data?.meals },
    { icon: ICONS.itinerary, label: "Itinerary", description: "View trip itinerary" },
  ] as const;

  return (
    <article className="grid lg:grid-cols-2">
      {data?.image ? <Img src={urlFor(data.image).url()} alt={data?.image?.alt ?? ""} className="size-full object-cover overflow-hidden" /> : null}

      <section className="p-shorter lg:py-10 lg:px-16 xl:pr-32 text-dark flex flex-col gap-4 lg:gap-6 justify-center">
        <h1 className="font-bold font-source">{data?.title}</h1>
        <p>{data?.description}</p>
        <section className="grid grid-cols-2 gap-2 lg:gap-6">
          {SUMMARIES.map((e) => {
            const isItenerary = e.label === "Itinerary";
            const isTravel = e.label === "Travel";

            return (
              <section key={e.icon} className="flex flex-col lg:gap-2">
                <section className="flex gap-2 items-center">
                  <Icon icon={e.icon} width={20} />
                  <h6 className="font-semibold">{e.label}</h6>
                </section>
                {isItenerary ? (
                  <a
                    href="#itinerary"
                    className="border-b-1 border-red border-dotted hover:border-solid animate w-fit font-bold text-dark/80 hover:text-dark"
                  >
                    <small>{e.description}</small>
                  </a>
                ) : (
                  <p>
                    {e.description} {"  "}
                    {isTravel ? (
                      <Tooltip classNameContent="w-[26rem]" content={data?.cities ?? ""}>
                        <Icon icon={ICONS.info} width={20} />
                      </Tooltip>
                    ) : null}
                  </p>
                )}
              </section>
            );
          })}
        </section>

        <button
          type="button"
          className="px-4 py-3 rounded-md border-1 border-gray_lighter flex items-center justify-between gap-4 hover:bg-gray_lighter animate"
        >
          <section className="space-y-2 text-left">
            <p className="font-source font-bold text-lg">{data?.promoTitle}</p>

            <small className="text-gray">{data?.promoDescription}</small>
          </section>
          <Icon icon={ICONS.arrow} rotate={1} width={30} />
        </button>

        <p>
          <b>Trip code:</b> {data?.tripCode}
        </p>
      </section>
    </article>
  );
}
