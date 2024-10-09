import { client } from "@/sanity/lib/client";
import { TOP_TOUR_SUMMARIES_QUERY } from "@/sanity/lib/queries";
import type { TOP_TOUR_SUMMARIES_QUERYResult } from "@/sanity/types";
import { notFound, redirect } from "next/navigation";

export default async function HomePage() {
  const topTourSummaries = await client.fetch<TOP_TOUR_SUMMARIES_QUERYResult>(TOP_TOUR_SUMMARIES_QUERY);
  const selectedContent = topTourSummaries.find((e) => e.slug?.current === "best-of-italy");
  if (!selectedContent?.slug?.current) notFound();
  redirect(`/tours/${selectedContent.slug.current}`);
}
