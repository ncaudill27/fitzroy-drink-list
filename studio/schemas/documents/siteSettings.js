export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "legal",
      type: "text",
      title: "Dinner menu legal text",
      description: "Small text printed at the bottom of the dinner menu",
    }
  ],
};
