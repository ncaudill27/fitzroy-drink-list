export default {
  name: "barFood",
  type: "document",
  title: "Bar Food",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    // {
    //   name: "is_gluten_free",
    //   type: "boolean",
    //   title: "Gluten Free"
    // },
    // {
    //   name: "is_kid_menu",
    //   type: "boolean",
    //   title: "Kid's Menu"
    // },
    // {
    //   name: "is_dessert",
    //   type: "boolean",
    //   title: "Dessert Menu"
    // },
    {
      name: "price",
      type: "number",
      title: "Price",
      description: 'If item does not have one "standard" price leave this field blank and input price points in Additional Options below.'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'bodyPortableText'
    },
    {
      name: "additional_options",
      type: "array",
      title: "Additional Options",
      description: "Each additional option will be printed on it's own line.",
      of: [
        {
          type: 'options'
        }
      ]
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    // {
    //   name: "categories",
    //   type: "array",
    //   title: "Categories",
    //   of: [
    //     {
    //       type: "reference",
    //       to: {
    //         type: "category",
    //       },
    //     },
    //   ],
    // },
  ],
};
