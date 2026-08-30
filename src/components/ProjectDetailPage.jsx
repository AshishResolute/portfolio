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
    <div className="p-5 space-y-1.5 md:space-y-2.5">
      <h1 className=" text-4xl text-slate-800">{title}</h1>
      <p className="text-slate-700">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className="border border-gray p-1 rounded-xl hover:border-black hover:text-white transition-colors duration-300"
          >
            {tag}
          </button>
        ))}
      </div>
      {buttons.map((item, ind) => (
        <a href={Object.values(item)} target="_blank" key={ind}>
          <span className="border border-[#F97316] p-2 hover:bg-[#F97316] hover:text-[#A1A1AA]">
            {Object.keys(item)}
          </span>
        </a>
      ))}
    </div>
  );
};
