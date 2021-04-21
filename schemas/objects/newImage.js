export default {
  name: "newImage",
  title: "Image with Alt Text",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative Text",
      description: "Important for SEO and accessibility",
      validation: (Rule) =>
        Rule.max(60).error("You have to fill out the alternative text."),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "caption",
      type: "string",
      title: "Image Caption",
      options: {
        isHighlighted: true,
      },
    },
  ],
};