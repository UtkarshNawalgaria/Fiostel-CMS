export default {
  name: "seo",
  type: "object",
  fieldsets: [{ name: "seoData", title: "SEO Details" }],
  fields: [
    {
      title: "Meta Title",
      name: "title",
      type: "string",
      fieldset: "seoData",
      validation: (Rule) =>
        Rule.max(60).error(
          "Meta title should not be more than 60 characters long"
        ),
    },
    {
      title: "Meta Description",
      name: "description",
      type: "text",
      fieldset: "seoData",
      validation: (Rule) =>
        Rule.max(160).error(
          "Meta Description should not be more than 160 characters long"
        ),
    },
    {
        name: 'seoImage',
        type: 'newImage'
    }
  ],
};
