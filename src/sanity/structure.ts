import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("topTourSummary").title("Top Tour Summary"),
      S.documentTypeListItem("travelHighlights").title("Travel Highlights"),
      S.documentTypeListItem("sightseeingHighlights").title("Sightseeing Highlights"),
      S.documentTypeListItem("faq").title("FAQ"),
      S.documentTypeListItem("experienceType").title("Experience Type"),
      S.documentTypeListItem("itinerary").title("Itinerary"),
      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          !["topTourSummary", "travelHighlights", "sightseeingHighlights", "experienceType", "faq", "itinerary"].includes(item.getId()!),
      ),
    ]);
