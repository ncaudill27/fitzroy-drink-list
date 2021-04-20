export default {
  name: "drink",
  type: "document",
  title: "Drink",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      description: "Names should be catchy, descriptive, and reference Die Hard",
    },
    {
      name: 'garnish',
      type: 'string',
      title: 'Garnish'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: 'glassware',
      type: 'string',
      title: 'Glassware',
      options: {
        list: [
          {title: 'Rocks', value: 'rocks'},
          {title: 'Coupe', value: 'coupe'},
          {title: 'Collins', value: 'collins'},
          {title: 'Coffee Mug', value: 'coffee mug'},
          {title: 'Clear Mug', value: 'clear mug'},
          {title: 'Wine', value: 'wine'}
        ]
      }
    },
    {
      name: "ingredients",
      type: "array",
      title: "Ingredients",
      of: [
        {
          type: 'ingredient'
        }
      ]
    },
    {
      name: "bartenders",
      title: "Bartenders",
      type: "array",
      of: [
        {
          type: "bartenderReference",
        },
      ],
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
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
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: "mainImage",
    },
  }
};
