import { projects } from "../data/projects.data.js";
import { useParams } from "react-router";
import { ImTree } from "react-icons/im";
export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const data = projects.find(({ title }) => title.toLowerCase() === slug);
  return (
    <div className="font-sora p-5 text-[#6b6b68] ">
      <ProjectPageHeader
        title={data.title}
        description={data.description}
        tags={data.tags}
        buttons={data.buttons}
      />
      <ProjectMainContent
        overview={data.overview}
        keyFeatures={data.keyFeatures}
        architecture={data.architecture}
        terminalTitle={data.terminalTitle}
        terminalData={data.terminalData}
      />
    </div>
  );
};

const ProjectPageHeader = ({ title, description, tags, buttons }) => {
  return (
    <div className="p-5 space-y-1.5 md:space-y-3">
      <h1 className=" text-5xl text-slate-800">{title}</h1>
      <p className="text-slate-700">{description}</p>
      <div className="flex flex-wrap gap-2  pb-2.5">
        {tags.map((tag) => (
          <button
            key={tag}
            className="border border-gray p-1 rounded-xl hover:border-black hover:bg-gray-700 hover:text-[#A1A1AA] transition-colors duration-300"
          >
            {tag}
          </button>
        ))}
      </div>
      {buttons.map((item, ind) => {
        const Icon = item.icon;
        return (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={ind}
            className="mx-1 inline-flex justify-center items-center gap-1.5 p-2 rounded-md bg-orange-400 text-gray-900 hover:bg-black hover:text-white transition-colors duration-300"
          >
            <Icon />
            <span className="">{item.label}</span>
          </a>
        );
      })}
    </div>
  );
};

const ProjectMainContent = ({
  overview,
  keyFeatures,
  architecture,
  terminalData,
  terminalTitle,
}) => {
  return (
    <div className="p-5 flex flex-col gap-4  md:grid md:grid-cols-2 md:gap-4">
      <ProjectBodyFeaturesSection
        overview={overview}
        keyFeatures={keyFeatures}
      />
      <ProjectArchitectureWithTerminal
        architecture={architecture}
        terminalData={terminalData}
        terminalTitle={terminalTitle}
      />
    </div>
  );
};

const ProjectBodyFeaturesSection = ({ overview, keyFeatures }) => {
  return (
    <div className="space-y-1.5 md:space-y-2.5 ">
      <h2 className="text-slate-800 text-xl">OverView</h2>
      <p>{overview}</p>
      <p className="text-slate-800 text-lg">Key Features</p>
      <ul>
        {keyFeatures.map((item, ind) => {
          const Icon = item.icon;
          return (
            <li key={ind}>
              <div className="flex gap-3  items-center p-1 border-b">
                <Icon />
                <span className="">{item.feat}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ProjectArchitectureWithTerminal = ({
  architecture,
  terminalData,
  terminalTitle,
}) => {
  return (
    <div className="p-4 space-y-4 md:space-y-4 ">
      <ProjectArch architecture={architecture} />
      <ProjectTerminal
        terminalData={terminalData}
        terminalTitle={terminalTitle}
      />
    </div>
  );
};

const ProjectArch = ({ architecture }) => {
  return (
    <div className="space-y-1.5 md:space-y-2.5">
      <div className="flex items-center gap-2 ">
        <ImTree />
        <h2>Architecture</h2>
      </div>
      <ul className="md:flex md:flex-wrap md:items-center gap-1">
        {architecture.map((item, ind) => {
          const insertArrow = ind !== architecture.length - 1;
          return (
            <li key={ind} className="text-center">
              <span className="p-1 flex justify-center md:inline  rounded border border-slate-600 py-1 px-2 ">
                {item}
              </span>
              {insertArrow && (
                <>
                  <span className="hidden md:inline px-1">→</span>
                  <span className="md:hidden border border-white">↓</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ProjectTerminal = ({ terminalData, terminalTitle }) => {
  return (
    <div className="bg-black rounded-xl p-4 hidden min-[460px]:block">
      <div>
        <h2 className="text-white/95">{terminalTitle}</h2>
      </div>
      <div className="">
        <pre className="text-wrap text-sm text-slate-400">{terminalData}</pre>
      </div>
    </div>
  );
};
