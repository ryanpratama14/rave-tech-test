import { defineArrayMember, defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Example: 'Frequently asked questions'",
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "faqItem",
          title: "FAQ Item",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
            }),
            defineField({
              name: "response",
              title: "Response",
              type: "array",
              of: [{ type: "block" }],
            }),
          ],
        }),
      ],
    }),
  ],
});
