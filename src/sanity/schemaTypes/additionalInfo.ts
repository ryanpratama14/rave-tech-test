import { defineField, defineType } from "sanity";

export const additionalInfo = defineType({
  name: "additionalInfo",
  title: "Additional Info",
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
      name: "cta",
      title: "CTA Text",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "depositAmount",
      title: "Deposit Amount",
      type: "number",
    }),

    defineField({
      name: "depositProtection",
      title: "Deposit Protection?",
      type: "boolean",
    }),
    defineField({
      name: "freeBookingChanges",
      title: "Free Booking Changes",
      type: "boolean",
    }),

    defineField({
      name: "mapImageTitle",
      title: "Map Image Title",
      type: "string",
    }),

    defineField({
      name: "mapImage",
      title: "Map Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
