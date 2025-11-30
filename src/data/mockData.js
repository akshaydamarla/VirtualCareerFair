export const fairs = [
  {
    id: "spring-2026-tech",
    name: "Spring 2026 Tech Careers Fair",
    date: "March 18, 2026",
    description:
      "Meet top tech companies hiring software engineers, data scientists, and product managers.",
    tags: ["Tech", "Software", "Graduate"],
    companies: ["Google", "Microsoft", "Netflix", "Stripe"],
  },
  {
    id: "finance-analyst-day",
    name: "Global Finance & Analyst Summit",
    date: "April 4, 2026",
    description:
      "Connect with leading financial institutions looking for analysts and associates.",
    tags: ["Finance", "Analytics"],
    companies: ["Goldman Sachs", "J.P. Morgan", "Morgan Stanley"],
  },
];

export const boothsByFair = {
  "spring-2026-tech": [
    {
      id: "google",
      companyName: "Google",
      headline: "Building helpful products for everyone.",
      roles: ["SWE Intern", "New Grad SWE", "Data Scientist"],
      about:
        "Chat with engineers and recruiters about internships and full‑time opportunities across Search, Cloud, and more.",
    },
    {
      id: "microsoft",
      companyName: "Microsoft",
      headline: "Empowering every person and organization.",
      roles: ["Program Manager", "Cloud Engineer"],
      about:
        "Learn about Microsoft's work in Azure, Office, and AI — and how you can join.",
    },
  ],
  "finance-analyst-day": [
    {
      id: "gs",
      companyName: "Goldman Sachs",
      headline: "Make things possible.",
      roles: ["Investment Banking Analyst", "Risk Analyst"],
      about:
        "Discuss analyst programs, internships, and pathways into global markets.",
    },
  ],
};

// Simple starting data for chat
export const initialChatMessages = [
  {
    id: 1,
    sender: "Recruiter",
    text: "Welcome! Feel free to ask any questions about our roles 😊",
    timestamp: "09:30",
  },
];
