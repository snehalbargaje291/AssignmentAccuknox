// src/initialData.js
export const initialData = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Cloud Accounts", type: "cloudAccounts" },
        {
          id: 2,
          name: "Cloud Account Risk Assessment",
          type: "cloudAccountRisk",
        },
      ],
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [
        {
          id: 3,
          name: "Top 5 Namespace Specific Alerts",
          content: "No Graph data available",
        },
        { id: 4, name: "Workload Alerts", content: "No Graph data available" },
      ],
    },
    {
      id: 3,
      name: "Registry Scan",
      widgets: [
        { id: 5, name: "Image Risk Assessment", type: "imageRisk" },
        { id: 6, name: "Image Security Issues", content: "2 Total Images" },
      ],
    },
  ],
};
