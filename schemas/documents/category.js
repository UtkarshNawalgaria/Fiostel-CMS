export default {
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "_"),
      },
    },
    {
      title: "Food Category Image",
      name: "image",
      type: "newImage",
    },
    {
      title: "Menu Order",
      name: 'order',
      type: 'number'
    }
  ],
};
