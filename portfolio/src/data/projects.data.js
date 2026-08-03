import { PiPiggyBankFill } from "react-icons/pi";
import { TbUsersGroup } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";



export const projects = [
  {
    icon: PiPiggyBankFill,
    title: "BankApi",
    description:
      "Banking backend with row-level locking,rate limiting, and refresh-token rotation.",
    tags: ["Node.js", "Postgres", "JavaScript"],
    link: "/projects/bankapi",
    githubSrc:"https://github.com/AshishResolute/bankapi"
  },
  {
    icon: TbUsersGroup,
    title: "SocialBuzz",
    description:
      "Social media backend — auth, caching, and notifications, fully migrated to TypeScript with tests.",
    tags: ["Node.js", "Express.js", "Postgres", "TypeScript", "Redis"],
    link: "/projects/socialbuzz",
    githubSrc:"https://github.com/AshishResolute/socialBuzz"
  },
  {
    icon: IoStatsChart,
    title: "Job Tracker",
    description:
      "Full-stack job application tracker — React frontend backed by a Node/TS/Postgres API.",
    tags: [
      "Node.js",
      "Postgres",
      "TypeScript",
      "React",
      "JavaScript",
      "Prisma",
    ],
    link: "/projects/jobtracker",
    githubSrc:"https://github.com/AshishResolute/Tracker_FrontEnd"
  },
];
