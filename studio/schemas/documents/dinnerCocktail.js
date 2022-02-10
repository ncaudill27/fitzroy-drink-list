export default {
  name: "dinnerCocktail",
  type: "document",
  title: "Dinner Cocktail",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      description:
        "Names should be catchy, descriptive, and reference Die Hard",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      description: "Short drink description",
    },
    {
      name: "active",
      type: "boolean",
      title: "On Menu",
    },
    {
      name: "order",
      type: "number",
      title: "Order",
      hidden: true,
    },
    {
      name: "garnish",
      type: "string",
      title: "Garnish",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "glassware",
      title: "Glassware",
      type: "string",
      options: {
        list: [
          { title: "Rocks", value: "rocks" },
          { title: "Coupe", value: "coupe" },
          { title: "Collins", value: "collins" },
          { title: "Coffee Mug", value: "coffee mug" },
          { title: "Clear Mug", value: "clear mug" },
          { title: "Wine", value: "wine" },
          { title: "Flute", value: "flute" },
          { title: "Martini", value: "martini" },
          { title: "Nick & Nora", value: "nick & nora" },
        ],
      },
    },
    {
      name: "ice",
      type: "string",
      title: "Ice",
      description: "Type of ice",
    },
    {
      name: "ingredients",
      type: "array",
      title: "Ingredients",
      of: [
        {
          type: "ingredient",
        },
      ],
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      description:
        'Used for organizational purposes. DO NOT use "Dinner" or "Brunch" categories. Those are outdated',
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
        },
      ],
    },
    {
      name: "body",
      type: "bodyPortableText",
      description: "Be sure to type as a numbered list. So click this ↓ first",
      title: "Build Steps",
    },
  ],

  preview: {
    select: {
      title: "name",
    },
  },
};
