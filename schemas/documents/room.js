import { GiBed } from "react-icons/gi";

export default {
  title: "Room",
  name: "room",
  type: "document",
  icon: GiBed,
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
      title: "Price per Month",
      name: "price",
      type: "number",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Room Amenities",
      name: "amenities",
      type: "array",
      of: [{
        type: 'reference',
        to: [{type: 'amenity'}]
      }]
    },
    {
      title: "Room Image",
      name: "image",
      type: "newImage",
    },
  ],
};
