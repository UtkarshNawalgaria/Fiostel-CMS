import { BiFoodMenu } from 'react-icons/bi'

export default {
  title: "Menu Item",
  name: "item",
  type: "document",
  icon: BiFoodMenu,
  fields: [
    {
      title: "Item Name",
      name: "item_name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "item_name",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "_"),
      },
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },
    {
      name: "category",
      title: "Item Category",
      type: "reference",
      to: [{type: "category"}]
    },
    {
        title: "Food Image",
        name: 'image',
        type: 'newImage'
    }
  ],
};