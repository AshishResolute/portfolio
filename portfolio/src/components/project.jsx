import { ImGithub } from "react-icons/im";
import { projects } from "../data/projects.data.js";

export const Projects = () => {
  return (
    <div className=" p-8 space-y-5 text-[#6b6b68]">
      <ProjectSectionHeader />
      <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-4 md:grid-rows-2 gap-4">
        {projects.map((data) => (
          <ProjectCard
            key={data.title}
            icon={data.icon}
            title={data.title}
            description={data.description}
            githubSrc={data.githubSrc}
            tags={data.tags}
          />
        ))}
        <div className="bg-black border p-4 rounded-2xl space-y-1 md:h-52  shadow-xl shadow-black/50 hover:shadow-gray-300 hover:text-xl transition-all hover:text-gray-300  transform hover:-translate-y-1 duration-400  text-gray-400 h-[53] flex justify-center items-center">
          <p>More coming soon</p>
        </div>
      </div>
    </div>
  );
};

const ProjectSectionHeader = () => {
  return (
    <div className="space-y-1 ">
      <h1 className="text-[#185fa5] text-2xl ">Projects</h1>
      <h2 className="text-xl text-gray-400">Things I've Built</h2>
      <p>
        A few backend-heavy projects — APIs, auth systems, and the plumbing
        behind them.
      </p>
    </div>
  );
};

const ProjectCard = ({
  name,
  icon: Icon,
  title,
  description,
  githubSrc,
  tags,
}) => {
  return (
    <a href={githubSrc}>
      <div
        key={name}
        className="bg-black border p-4 rounded-2xl space-y-1 md:h-52  shadow-xl shadow-black/50 hover:shadow-gray-300 transition transform hover:-translate-y-1 duration-400"
      >
        <div className="flex justify-between space-y-1">
          <Icon />
          <a href={githubSrc} title="View GitHub Repository">
            <ImGithub className=" inline-block transform hover:scale-150 duration-400 " />
          </a>
        </div>
        <div className="space-y-1.5 md:space-y-2.5 ">
          <h2 className="text-xl text-white">{title}</h2>
          <p className="text-sm text-gray-400">{description}</p>
          {tags.map((tag, index) => (
            <button className="border border-gray p-1 ml-1 rounded-xl hover:border-black hover:text-white hover:bg-gray-600 transition-colors duration-300">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </a>
  );
};
