export default {
  title: "Amenities",
  name: "amenity",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Amenity Image",
      name: "image",
      type: "image",
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
      ],
    },
  ],
};