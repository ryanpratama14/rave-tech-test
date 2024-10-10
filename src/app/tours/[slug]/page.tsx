import { getMetadata } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { FAQ_QUERY, TOP_TOUR_SUMMARY_QUERY } from "@/sanity/lib/queries";
import type { FAQ_QUERYResult, TOP_TOUR_SUMMARY_QUERYResult } from "@/sanity/types";
import type { Metadata } from "next";
import { Fragment } from "react";
import AboutThisTrip from "./components/about-this-trip";
import AdditionalInfo from "./components/additional-info";
import Faq from "./components/faq";
import Itinerary from "./components/itinerary";
import TopTourSummary from "./components/top-tour-summary";

type Props = { params: { slug: string } };

export const generateMetadata = async ({ params: { slug } }: Props): Promise<Metadata> => {
  const data = await client.fetch<TOP_TOUR_SUMMARY_QUERYResult>(TOP_TOUR_SUMMARY_QUERY, { slug }, { next: { revalidate: 10 } });

  const title = data?.title ?? "";
  const path = data?.slug?.current ? `/tours/${data?.slug?.current}` : "";
  const description = data?.description ?? "";
  const imageUrl = data?.image ? urlFor(data?.image).url() : "";
  return await getMetadata({ title, path, description, imageUrl });
};

export default async function TourPage({ params: { slug } }: Props) {
  const data = await client.fetch<TOP_TOUR_SUMMARY_QUERYResult>(TOP_TOUR_SUMMARY_QUERY, { slug }, { next: { revalidate: 10 } });
  const faq = await client.fetch<FAQ_QUERYResult>(FAQ_QUERY, {}, { next: { revalidate: 10 } });

  return (
    <Fragment>
      <TopTourSummary data={data} />
      <AdditionalInfo data={data} />
      <Itinerary data={data} />
      <AboutThisTrip data={data} />
      <Faq faq={faq} />
    </Fragment>
  );
}
