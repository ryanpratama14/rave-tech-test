import { defineField, defineType } from "sanity";

export const topTourSummary = defineType({
  name: "topTourSummary",
  title: "Top Tour Summary",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Tour Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "title",
      title: "Tour Title",
      type: "string",
      description: "Title of the tour, like '13-Day Italy Sightseeing Tour of Rome, Lake Como and Sorrento'",
    }),
    defineField({
      name: "description",
      title: "Tour Description",
      type: "text",
      description: "Short description of the tour, like 'Discover the Best of Italy, from the...'",
    }),
    defineField({
      name: "travel",
      title: "Travel",
      type: "string",
      description: "Travel details like '13 days, 2 countries and 15 cities'",
    }),
    defineField({
      name: "accommodation",
      title: "Accommodation",
      type: "string",
      description: "Accommodation information like '12 nights'",
    }),
    defineField({
      name: "meals",
      title: "Meals",
      type: "string",
      description: "Meals information like '12 Breakfasts, 6 Dinners'",
    }),
    defineField({
      name: "tripCode",
      title: "Trip Code",
      type: "string",
      description: "Trip code like 'ROMETOUR'",
    }),
    defineField({
      name: "travelHighlights",
      title: "Travel Highlights",
      type: "reference",
      to: [{ type: "travelHighlights" }],
      description: "Link to the related travel highlights document for the tour.",
    }),
    defineField({
      name: "sightseeingHighlights",
      title: "Sightseeing Highlights",
      type: "reference",
      to: [{ type: "sightseeingHighlights" }],
      description: "Link to the related sightseeing highlights document for the tour.",
    }),
  ],
});
