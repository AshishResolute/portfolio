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
import { FiLock } from "react-icons/fi";
import { FiRefreshCw } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { FiLayout } from "react-icons/fi";
import { FiDatabase } from "react-icons/fi";
import { FiGitBranch } from "react-icons/fi";
import { SiJsonwebtokens } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaUserShield } from "react-icons/fa6";
const SocialBuzzTerminal = `POST   /api/auth/login
{
        "success": true,
        "data": {
          "user": {
            "id": "usr_8f3a7c2e",
            "email": "jane@socialbuzz.dev",
            "username": "jane_dev"
          },
          "tokens": {
            "accessToken": "eyJhbGciOiJI...",
            "refreshToken": "rt_9b7e4d1a..."
          }
        }
}`;

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
    architecture: [
      "Client",
      "Middlewares",
      "Controllers",
      "Data Layer",
      "Postgres",
      "Redis",
      "BullMQ",
    ],
    terminalTitle: "Login Response (200 OK)",
    terminalData: SocialBuzzTerminal,
    techDecisions:[{icon:FaUserShield,title:"Refresh Token Family",info:"Self-referencing foreign key, bcrypt-hashed tokens, full revocation on reuse detection"},{icon:DiRedis,title:"Cache-aside Feed latency win",info:"Redis cache layer reduced feed latency from 170ms to 5ms"},{icon:TbBrandTypescript,title:"Typescript migration + tests + Docker + CI",info:"Full TypeScript migration, 80% test coverage with Jest, Dockerized services, GitHub Actions CI"}]
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
    overview:
      "A banking backend focused on data safety under concurrent access — built around PostgreSQL row-level locking, Redis-backed rate limiting, and secure session rotation. Live Swagger docs let you explore every endpoint.",
    keyFeatures: [
      {
        icon: FiLock,
        feat: "PostgreSQL row-level locking to prevent race conditions on concurrent transactions",
      },
      {
        icon: DiRedis,
        feat: "Rate limiting via Upstash Redis, enforced through Lua scripts",
      },
      {
        icon: FiRefreshCw,
        feat: "JWT refresh-token rotation for secure, revocable sessions",
      },
      { icon: FiCheckCircle, feat: "70%+ Jest/Supertest test coverage" },
      {
        icon: SiGoogledocs,
        feat: "Live interactive API docs (Swagger), deployed on Render",
      },
    ],
    architecture: [
      "Client",
      "Auth middleware",
      "Rate limiter",
      "Routes",
      "Postgres",
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
    keyFeatures: [
      { icon: FiLayout, feat: "React frontend deployed on Vercel" },
      {
        icon: FiDatabase,
        feat: "Node.js + TypeScript + PostgreSQL + Prisma backend, deployed on Render",
      },
      {
        icon: FiGitBranch,
        feat: "Full-stack deployment pipeline (separate frontend/backend hosting, connected via API)",
      },
    ],
    architecture: [
      "Client(React)",
      "Backend(Express/Ts)",
      "Prisma",
      "Postgres",
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
