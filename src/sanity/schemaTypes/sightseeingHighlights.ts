import { defineField, defineType } from "sanity";

export const sightseeingHighlights = defineType({
  name: "sightseeingHighlights",
  title: "Sightseeing Highlights",
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
      name: "menuTitle",
      title: "Menu Title",
      type: "string",
      description: "Example: 'About this trip'",
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Example: 'Sightseeing highlights'",
    }),

    defineField({
      name: "cta",
      title: "Call To Action",
      type: "object",
      fields: [
        defineField({
          name: "ctaTitle",
          title: "CTA Title",
          type: "string",
          description: "The title for the call to action.",
        }),
        defineField({
          name: "slug",
          title: "Slug",
          type: "string",
          description: "The slug for the call to action.",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "string",
          description: "Description of the call to action.",
        }),
      ],
    }),

    defineField({
      name: "firstHighlights",
      title: "First Highlights",
      type: "array",
      of: [{ type: "block" }],
      description: "An array of travel highlights for the tour, like 'Visit the Colosseum', 'Explore Venice', etc.",
    }),
    defineField({
      name: "secondHighlights",
      title: "Second Highlights",
      type: "array",
      of: [{ type: "block" }],
      description: "An array of travel highlights for the tour, like 'Visit the Colosseum', 'Explore Venice', etc.",
    }),
  ],
});
