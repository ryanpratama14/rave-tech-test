import { client } from "@/sanity/lib/client";
import { TOP_TOUR_SUMMARY_QUERY } from "@/sanity/lib/queries";
import type { TOP_TOUR_SUMMARY_QUERYResult } from "@/sanity/types";
import { Fragment } from "react";
import AboutThisTrip from "./components/about-this-trip";
import TopTourSummary from "./components/top-tour-summary";

type Props = { params: { slug: string } };

export default async function TourPage({ params: { slug } }: Props) {
  const data = await client.fetch<TOP_TOUR_SUMMARY_QUERYResult>(TOP_TOUR_SUMMARY_QUERY, { slug });

  return (
    <Fragment>
      <TopTourSummary data={data} />
      <AboutThisTrip data={data} />
    </Fragment>
  );
}
