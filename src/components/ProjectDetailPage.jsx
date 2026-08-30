import { projects } from "../data/projects.data.js";
import { useParams } from "react-router";
import "../index.css";
export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const data = projects.find(({ title }) => title.toLowerCase() === slug);
  return (
    <div className="font-sora p-5 text-[#6b6b68]">
      <ProjectPageHeader
        title={data.title}
        description={data.description}
        tags={data.tags}
        buttons={data.buttons}
      />
    </div>
  );
};

const ProjectPageHeader = ({ title, description, tags, buttons }) => {
  return (
    <div className="p-5 space-y-1.5 md:space-y-3">
      <h1 className=" text-4xl text-slate-800">{title}</h1>
      <p className="text-slate-700">{description}</p>
      <div className="flex flex-wrap gap-2  pb-2.5">
        {tags.map((tag) => (
          <button
            key={tag}
            className="border border-gray p-1 rounded-xl hover:border-black hover:text-[#A1A1AA] transition-colors duration-300"
          >
            {tag}
          </button>
        ))}
      </div>
      {buttons.map((item, ind) => {
        return (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={ind}
          >
            <span className=" p-2 rounded-md bg-orange-400 text-gray-900 hover:bg-black hover:text-white transition-colors duration-300">
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
};
