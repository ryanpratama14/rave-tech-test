import { defineArrayMember, defineField, defineType } from "sanity";

export const itinerary = defineType({
  name: "itinerary",
  title: "Itinerary",
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
      name: "title",
      title: "Title",
      type: "string",
      description: "Example: 'Day by day itinerary.'",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Example: '13 days itinerary trip from Rome to Rome...'",
    }),

    defineField({
      name: "itineraryItems",
      title: "Itinerary Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "itineraryItem",
          title: "Itinerary Item",
          fields: [
            defineField({
              name: "day",
              title: "Day",
              type: "number",
              description: "Example: '2'",
            }),

            defineField({
              name: "experienceType",
              title: "Experience Type",
              type: "reference",
              to: [{ type: "experienceType" }],
            }),

            defineField({
              name: "image",
              title: "Itinerary Image",
              type: "image",
              options: { hotspot: true },
            }),

            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description: "Example: 'Welcome to Rome'",
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
              description: "We journey south to the well-preserved ruins of Pompeii...'",
            }),

            defineField({
              name: "cities",
              title: "Cities",
              type: "array",
              of: [{ type: "string" }],
            }),

            defineField({
              name: "meals",
              title: "Meals",
              type: "array",
              of: [{ type: "string" }],
            }),

            defineField({
              name: "accommodation",
              title: "Accommodation",
              type: "array",
              of: [{ type: "string" }],
            }),

            defineField({
              name: "arrivalTransfer",
              title: "Arrival Transfer",
              type: "string",
            }),

            defineField({
              name: "departureTransfer",
              title: "Departure Transfer",
              type: "string",
            }),

            defineField({
              name: "welcome",
              title: "Welcome",
              type: "string",
            }),

            defineField({
              name: "experiences",
              title: "Included and optional experiences",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "experience",
                  title: "Included and optional experience",
                  fields: [
                    defineField({
                      name: "image",
                      title: "Itinerary Image",
                      type: "image",
                      options: { hotspot: true },
                    }),
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                      description: "Example: 'Learn about the History and Ancient Skills of Venetian Glassblowing'",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                      description: "Example: 'Enjoy an after-hours visit to the Basilica of Santa Maria in Cosmedin...'",
                    }),
                    defineField({
                      name: "experienceType",
                      title: "Experience Type",
                      type: "reference",
                      to: [{ type: "experienceType" }],
                    }),
                    defineField({
                      name: "price",
                      title: "Price",
                      type: "number",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
