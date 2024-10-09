import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("topTourSummary").title("Top Tour Summary"),
      S.documentTypeListItem("travelHighlights").title("Travel Highlights"),
      S.documentTypeListItem("sightseeingHighlights").title("Sightseeing Highlights"),
      S.divider(),

      ...S.documentTypeListItems().filter(
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        (item) => item.getId() && !["topTourSummary", "travelHighlights", "sightseeingHighlights"].includes(item.getId()!),
      ),
    ]);
