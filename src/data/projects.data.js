import { PiPiggyBankFill } from "react-icons/pi";
import { TbUsersGroup } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { RiGithubLine } from "react-icons/ri";
import { SiGoogledocs } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { RiUserFollowLine } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import { SiVitest } from "react-icons/si";
export const projects = [
  {
    icon: TbUsersGroup,
    title: "SocialBuzz",
    description:
      "Social media backend — auth, caching, and notifications, fully migrated to TypeScript with tests.",
    tags: ["Node.js", "Express.js", "Postgres", "TypeScript", "Redis"],
    link: "/projects/socialbuzz",
    buttons: [
      {
        label: "View on Github",
        url: "https://github.com/AshishResolute/socialBuzz",
        icon: RiGithubLine,
      },
    ],
    overview:
      "Built a production-ready social media API from scratch with real auth, cache-aside feed, and reliable notifications. Fully migrated to TypeScript for better maintainability and developer experience.",
    keyFeatures: [
      {
        icon: FaUser,
        feat: "JWT + refresh token rotation with reuse detection",
      },
      { icon: DiRedis, feat: "Redis-cached feed (170ms → 5ms)" },
      { icon: RiUserFollowLine, feat: "Follow graph + paginated feed" },
      {
        icon: AiTwotoneLike,
        feat: "Likes & comments with race-safe constraints",
      },
      { icon: MdMarkEmailRead, feat: "BullMQ + Resend email notifications" },
      { icon: SiVitest, feat: "80%+ test coverage with Jest" },
    ],
    architecture:["Client","Middlewares","Controllers","Data Layer"]
  },
  {
    icon: PiPiggyBankFill,
    title: "BankApi",
    description:
      "Banking backend with row-level locking,rate limiting, and refresh-token rotation.",
    tags: ["Node.js", "Postgres", "JavaScript"],
    link: "/projects/bankapi",
    githubSrc: "https://github.com/AshishResolute/bankapi",
    buttons: [
      {
        label: "View on Github",
        url: "https://github.com/AshishResolute/bankapi",
        icon: RiGithubLine,
      },
      {
        label: "Api Docs",
        url: "https://bankapi-1-5iag.onrender.com/api-docs/",
        icon: SiGoogledocs,
      },
    ],
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
    buttons: [
      {
        label: "View on Github",
        url: "https://github.com/AshishResolute/Tracker_FrontEnd",
        icon: RiGithubLine,
      },
      {
        label: "Live",
        url: "https://tracker-front-end-xi.vercel.app/",
        icon: SiRender,
      },
    ],
  },
];

export const aboutMeData = [
  "I'm a self-taught backend developer based in Bengaluru, currently finishing my final year of a B.Tech in Mechanical Engineering at UVCE. I started programming a little over a year ago — no bootcamp, no CS degree, just building things until they worked, then rebuilding them until they worked well.",
  "Most of my time goes into backend systems — auth flows, rate limiting, caching, the kind of plumbing that's invisible when it's done right. I like the problems where getting it \"almost working\" isn't good enough.",
  { exp: 17, projectsShipped: 3, location: "Bengaluru" },
];

export const skills = {
  backend: [
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Express",
    "PostgreSQL",
    "Redis",
    "Prisma",
    "Docker",
  ],
  auth: ["JWT", "OAuth 2.0", "RBAC", "bcrypt"],
  also: ["React", "Tailwind CSS", "BullMQ"],
};

export const contactDetails = {
  email: "ashishresolute@gmail.com",
  github: "https://github.com/AshishResolute",
  linkedin: "https://www.linkedin.com/in/ashishgourh/",
};
