import { defineQuery } from "next-sanity";

export const TOP_TOUR_SUMMARIES_QUERY = defineQuery(`*[_type == "topTourSummary"] {
    ...,
    slug,
    travelHighlights->{
      ...,
    },
    sightseeingHighlights->{
      ...,
    }
  }`);

export const TOP_TOUR_SUMMARY_QUERY = defineQuery(`*[_type == "topTourSummary" && slug.current == $slug][0] {
    ...,
    travelHighlights->{
      ...,
    },
    sightseeingHighlights->{
      ...,
    }
  }`);
