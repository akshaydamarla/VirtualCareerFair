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
  {
    id: "ai-data-science-expo-2026",
    name: "AI & Data Science Expo 2026",
    date: "May 12, 2026",
    description:
      "Explore cutting-edge AI innovations and data science opportunities with industry leaders.",
    tags: ["AI", "Data Science", "Machine Learning"],
    companies: ["OpenAI", "NVIDIA", "IBM"],
  },
  {
    id: "design-media-festival-2026",
    name: "Design & Media Festival 2026",
    date: "June 20, 2026",
    description:
      "Celebrate creativity and connect with top design and media companies seeking fresh talent.",
    tags: ["Design", "Media", "Creative"],
    companies: ["Adobe", "Pixar", "Spotify"],
  },
  {
    id: "cybersecurity-careers-summit-2026",
    name: "Cybersecurity Careers Summit 2026",
    date: "July 15, 2026",
    description:
      "Join leading cybersecurity firms to discover careers protecting digital assets worldwide.",
    tags: ["Cybersecurity", "Security", "IT"],
    companies: ["CrowdStrike", "Palo Alto Networks", "FireEye"],
  },
  {
    id: "women-in-tech-conference-2026",
    name: "Women in Tech Conference 2026",
    date: "August 10, 2026",
    description:
      "Empowering women in technology with networking, mentorship, and career opportunities.",
    tags: ["Women", "Tech", "Diversity"],
    companies: ["LinkedIn", "Salesforce", "Pinterest"],
  },
  {
    id: "global-startups-expo-2026",
    name: "Global Startups Expo 2026",
    date: "September 5, 2026",
    description:
      "Connect with innovative startups from around the world seeking passionate team members.",
    tags: ["Startups", "Innovation", "Entrepreneurship"],
    companies: ["Airbnb", "Stripe", "Robinhood"],
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
  "ai-data-science-expo-2026": [
    {
      id: "openai",
      companyName: "OpenAI",
      headline: "Advancing digital intelligence for the benefit of humanity.",
      roles: ["Research Scientist", "Machine Learning Engineer", "Data Analyst"],
      about:
        "Explore roles in AI research, development, and deployment of cutting-edge models.",
    },
    {
      id: "nvidia",
      companyName: "NVIDIA",
      headline: "Visual computing and AI innovation leader.",
      roles: ["AI Engineer", "Data Scientist", "Software Developer"],
      about:
        "Join us to work on AI hardware acceleration and deep learning software.",
    },
    {
      id: "ibm",
      companyName: "IBM",
      headline: "Building smarter businesses with AI and data.",
      roles: ["Data Engineer", "AI Consultant", "Cloud Data Scientist"],
      about:
        "Discover opportunities in AI-powered cloud solutions and enterprise data analytics.",
    },
  ],
  "design-media-festival-2026": [
    {
      id: "adobe",
      companyName: "Adobe",
      headline: "Changing the world through digital experiences.",
      roles: ["UX Designer", "Graphic Designer", "Product Designer"],
      about:
        "Collaborate on creative tools that empower millions of users worldwide.",
    },
    {
      id: "pixar",
      companyName: "Pixar",
      headline: "Storytelling through animation and technology.",
      roles: ["Animator", "Visual Effects Artist", "Creative Technologist"],
      about:
        "Join our team to blend art and technology in groundbreaking animated films.",
    },
    {
      id: "spotify",
      companyName: "Spotify",
      headline: "Music for everyone, everywhere.",
      roles: ["Media Designer", "Product Designer", "UX Researcher"],
      about:
        "Help create engaging user experiences for millions of music listeners globally.",
    },
  ],
  "cybersecurity-careers-summit-2026": [
    {
      id: "crowdstrike",
      companyName: "CrowdStrike",
      headline: "Protecting organizations with cloud-delivered endpoint security.",
      roles: ["Security Analyst", "Threat Researcher", "Incident Responder"],
      about:
        "Engage with experts defending against cyber threats in real-time.",
    },
    {
      id: "palo-alto-networks",
      companyName: "Palo Alto Networks",
      headline: "Innovating cybersecurity for a digital world.",
      roles: ["Cybersecurity Engineer", "Security Consultant", "Penetration Tester"],
      about:
        "Explore roles securing cloud environments and enterprise networks.",
    },
    {
      id: "fireeye",
      companyName: "FireEye",
      headline: "Cybersecurity solutions for advanced threat protection.",
      roles: ["Malware Analyst", "Security Operations Specialist", "Forensics Expert"],
      about:
        "Join the fight against cybercrime with cutting-edge threat intelligence.",
    },
  ],
  "women-in-tech-conference-2026": [
    {
      id: "linkedin",
      companyName: "LinkedIn",
      headline: "Connecting professionals to make them more productive and successful.",
      roles: ["Software Engineer", "Product Manager", "Data Scientist"],
      about:
        "Learn about our initiatives to promote diversity and inclusion in tech.",
    },
    {
      id: "salesforce",
      companyName: "Salesforce",
      headline: "Empowering companies with cloud-based CRM solutions.",
      roles: ["Cloud Developer", "Technical Architect", "UX Designer"],
      about:
        "Discover career paths supporting our mission for equality and innovation.",
    },
    {
      id: "pinterest",
      companyName: "Pinterest",
      headline: "Inspiring people to create a life they love.",
      roles: ["Frontend Engineer", "Data Analyst", "Product Designer"],
      about:
        "Join a team dedicated to building inclusive and creative technology.",
    },
  ],
  "global-startups-expo-2026": [
    {
      id: "airbnb",
      companyName: "Airbnb",
      headline: "Belong anywhere.",
      roles: ["Software Engineer", "Product Manager", "Data Scientist"],
      about:
        "Help build innovative travel experiences and grow a global community.",
    },
    {
      id: "stripe",
      companyName: "Stripe",
      headline: "Economic infrastructure for the internet.",
      roles: ["Backend Engineer", "Security Engineer", "Data Analyst"],
      about:
        "Work on scalable payment solutions powering millions of businesses worldwide.",
    },
    {
      id: "robinhood",
      companyName: "Robinhood",
      headline: "Democratizing finance for all.",
      roles: ["Mobile Developer", "Quantitative Analyst", "Customer Experience Specialist"],
      about:
        "Join us to create accessible financial products for a new generation.",
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
