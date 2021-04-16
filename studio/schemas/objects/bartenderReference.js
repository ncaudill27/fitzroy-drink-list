export default {
  name: "bartenderReference",
  type: "object",
  title: "Bartender reference",
  fields: [
    {
      name: "bartender",
      type: "reference",
      to: [
        {
          type: "bartender",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "bartender.name",
      media: "bartender.image.asset",
    },
  },
};
