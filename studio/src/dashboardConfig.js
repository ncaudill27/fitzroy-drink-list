export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60790d07a5f2a044b2f525aa",
                  title: "Sanity Studio",
                  name: "fitzroy-drink-list-studio",
                  apiId: "3fc2314e-c893-4afe-af37-c42b5dca9c17",
                },
                {
                  buildHookId: "60790d073618422e93fc5da3",
                  title: "Blog Website",
                  name: "fitzroy-drink-list",
                  apiId: "b1218151-75fc-42f6-824c-286c5c4562c5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ncaudill27/fitzroy-drink-list",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://fitzroy-drink-list.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent drinks",
        order: "_createdAt desc",
        types: ["drink"],
      },
      layout: { width: "medium" },
    },
  ],
};