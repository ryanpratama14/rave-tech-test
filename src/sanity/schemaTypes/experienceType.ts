import { defineField, defineType } from "sanity";

export const experienceType = defineType({
  name: "experienceType",
  title: "Experience Type",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Example: 'Trafalgar Difference'",
    }),

    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "string",
      description: "Example: '#FFFFFF'",
    }),

    defineField({
      name: "textColor",
      title: "Text Color",
      type: "string",
      description: "Example: '#FFFFFF'",
    }),
  ],
});
