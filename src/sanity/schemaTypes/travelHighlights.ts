import { defineField, defineType } from "sanity";

export const travelHighlights = defineType({
  name: "travelHighlights",
  title: "Travel Highlights",
  type: "document",
  fields: [
    defineField({
      name: "topTourSummaryTitle",
      title: "Top Tour Summary Title",
      type: "string",
      description: "Stores the title of the related Top Tour Summary.",
    }),
    defineField({
      name: "topTourSummary",
      title: "Top Tour Summary",
      type: "reference",
      to: [{ type: "topTourSummary" }],
      description: "Reference to the related Top Tour Summary for this set of highlights.",
    }),
    defineField({
      name: "firstHighlights",
      title: "First Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "An array of travel highlights for the tour, like 'Visit the Colosseum', 'Explore Venice', etc.",
    }),
    defineField({
      name: "secondHighlights",
      title: "Second Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "An array of travel highlights for the tour, like 'Visit the Colosseum', 'Explore Venice', etc.",
    }),
  ],
});
