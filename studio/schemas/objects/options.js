export default {
  name: "options",
  type: "object",
  title: "Options",
  fields: [
    {
      name: 'context',
      type: 'string',
      title: 'Context',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: "If multiple options share the same price point use the main Price input above instead."
    }
  ]
};