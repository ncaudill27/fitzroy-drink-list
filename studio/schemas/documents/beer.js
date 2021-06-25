export default {
  title: "Beer",
  name: "beer",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: 'style',
      type: 'string',
      title: "Style"
    },
    {
      title: "Brewery",
      name: "brewery",
      type: "string"
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
