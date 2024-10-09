import { ICONS } from "@/lib/constants";
import { cn, isTruncated, truncate } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageCrop, SanityImageHotspot, internalGroqTypeReferenceTo } from "@/sanity/types";
import { Icon } from "@iconify-icon/react";
import { Fragment, useState } from "react";
import { Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Dialog from "../dialog";
import Img from "../html/img";

type Data = {
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  title?: string;
  description?: string;
  experienceType: {
    _id: string;
    _type: "experienceType";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    bgColor?: string;
    textColor?: string;
  } | null;
  price?: number;
  _type: "experience";
  _key: string;
};

type Props = { data: Data[] | null };

export default function AdditionalExperiences({ data }: Props) {
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedData, setSelectedData] = useState<Data | null>(null);
  const [isAtBeginning, setIsAtBeginning] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  return (
    <Fragment>
      <section className="space-y-4 lg:space-y-6">
        <section className="flex justify-between items-center">
          <h1 className="text-dark font-bold font-source">Included and optional experiences</h1>
          <section className="flex gap-4">
            <button
              disabled={isAtBeginning}
              type="button"
              className={cn("animate size-10 nav-prev rounded-full flex items-center justify-center bg-gray text-white", {
                "bg-gray/20": isAtBeginning,
              })}
            >
              <Icon icon={ICONS.arrow2} width={35} rotate={3} />
            </button>

            <button
              disabled={isAtEnd}
              type="button"
              className={cn("animate size-10 nav-next rounded-full flex items-center justify-center bg-gray text-white", {
                "bg-gray/20": isAtEnd,
              })}
            >
              <Icon icon={ICONS.arrow2} width={35} rotate={1} />
            </button>
          </section>
        </section>

        <Swiper
          navigation={{ nextEl: ".nav-next", prevEl: ".nav-prev" }}
          simulateTouch={false}
          className="w-full"
          mousewheel={{ forceToAxis: true }}
          slidesPerView={1.1}
          spaceBetween={15}
          modules={[Mousewheel, Navigation]}
          breakpoints={{ 1024: { slidesPerView: 3 } }}
          onSlideChange={(swiper) => {
            setIsAtBeginning(swiper.isBeginning);
            setIsAtEnd(swiper.isEnd);
          }}
        >
          {data?.map((e) => {
            return (
              <SwiperSlide key={e._key}>
                <section className="flex flex-col rounded-md border-1 border-gray_lighter">
                  <section className="relative">
                    {e.image ? <Img src={urlFor(e.image).url()} alt={e.title ?? ""} className="rounded-t-md aspect-[21/10] object-cover" /> : null}

                    <small
                      className="px-2 py-0.5 rounded-md font-semibold absolute top-2 left-2"
                      style={{ backgroundColor: e.experienceType?.bgColor, color: e.experienceType?.textColor }}
                    >
                      {e.experienceType?.title}
                    </small>
                  </section>
                  <section className="h-56 lg:h-64 xl:h-56 flex flex-col justify-between p-4">
                    <section className="flex flex-col gap-2">
                      <h5 className="text-dark font-source font-bold">{e?.title}</h5>
                      <small className="text-pretty">{truncate(e?.description ?? "")}</small>

                      {isTruncated(e?.description ?? "") ? (
                        <button
                          onClick={() => {
                            setOpenDetail(true);
                            setSelectedData(e);
                          }}
                          type="button"
                          className="border-b-1 border-dotted hover:border-solid border-red font-bold w-fit text-[14px]"
                        >
                          See more
                        </button>
                      ) : null}
                    </section>

                    {e?.price ? (
                      <section className="flex items-center justify-between text-dark">
                        <small className="font-bold">Additional cost applies</small>
                      </section>
                    ) : (
                      <section className="text-purple_darker flex gap-2 items-center">
                        <Icon icon={ICONS.check} width={25} />
                        <small className="font-bold">Included with trip</small>
                      </section>
                    )}
                  </section>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <Dialog open={openDetail} onClose={() => setOpenDetail(false)}>
        <section className="space-y-6">
          <h1 className="font-bold text-dark font-source">{selectedData?.title}</h1>
          {selectedData?.image ? (
            <Img src={urlFor(selectedData.image).url()} alt={selectedData.title ?? ""} className="rounded-md aspect-video object-cover" />
          ) : null}

          <section className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-dark">
            <section className={cn("space-y-2 lg:col-span-2", { "lg:col-span-3": !selectedData?.price })}>
              <h2 className="font-bold font-source">Experience Info</h2>
              <p className="text-pretty">{selectedData?.description}</p>
            </section>

            {selectedData?.price ? (
              <section className="space-y-4">
                <section>
                  <h2 className="font-bold font-source">Pricing Info</h2>
                  <small className="font-bold">Adults</small>
                  <h5 className="font-bold">
                    {new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR" }).format(selectedData?.price ?? 0)}
                  </h5>
                </section>
                <section>
                  <h2 className="font-bold font-source">How To Book?</h2>
                  <small>Optional Experiences are enhancements to your tour and can be booked through your Travel Director while on tour.</small>
                </section>
              </section>
            ) : null}
          </section>
        </section>
      </Dialog>
    </Fragment>
  );
}
