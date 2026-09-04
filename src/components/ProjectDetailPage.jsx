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
      <TechSection techDecisions={data.techDecisions}/>
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
            className="border border-gray p-1 rounded-xl hover:border-black hover:bg-gray-700 hover:text-[#A1A1AA] transition-colors duration-400"
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
    <div className="p-5 flex flex-col md:grid md:grid-cols-2 gap-16">
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
    <div className="space-y-1.5 md:space-y-2.5  py-4">
      <h2 className="text-slate-800 text-xl">OverView</h2>
      <p>{overview}</p>
      <p className="text-slate-800 text-lg">Key Features</p>
      <ul>
        {keyFeatures.map((item, ind) => {
          const Icon = item.icon;
          return (
            <li key={ind}>
              <div className="flex gap-3  items-center p-1 ">
                <Icon />
                <span className="p-1 border-b">{item.feat}</span>
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
    <div className="p-4 space-y-4 md:space-y-2  ">
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
      <div className="flex items-center gap-5 ">
        <ImTree />
        <h2 className="text-xl text-slate-800">Architecture</h2>
      </div>
      <ul className="flex flex-col md:flex-row flex-wrap md:items-center py-4 gap-3  ">
        {architecture.map((item, ind) => {
          const insertArrow = ind !== architecture.length - 1;
          return (
            <li key={ind} className="text-center">
              <span className="flex flex-col justify-center items-center md:inline-flex rounded-xl border border-slate-600 py-1 px-2 ">
                {item}
              </span>
              {insertArrow && (
                <>
                  <span className="hidden md:inline pl-1 text-orange-400 ml-1 text-xl">
                    →
                  </span>
                  <span className="md:hidden text-orange-400 text-xl ">↓</span>
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
      <div className="flex items-center">
        <div className="flex gap-2 p-4 ">
          <span className="rounded-[50%] bg-red-300 inline-block w-2 h-2 "></span>
          <span className="rounded-[50%] bg-yellow-300 inline-block w-2 h-2"></span>
          <span className="rounded-[50%] bg-green-300 inline-block w-2 h-2"></span>
        </div>
        <h2 className=" text-green-500">{terminalTitle}</h2>
      </div>
      <div className="p-2">
        <pre className="text-wrap text-sm text-gray-300 font-sora">
          {terminalData}
        </pre>
      </div>
    </div>
  );
};

const TechSection = ({techDecisions})=>{
  return (
    <div className="p-5  space-y-1.5 md:space-y-2.5">
      <h2 className="text-slate-800 text-xl">Tech Decisions</h2>
      <div className="flex flex-col min-[820px]:flex-row md:justify-center  py-4 gap-4 ">
        {techDecisions.map((data,ind)=>{
          const Icon = data.icon;
          return(
            <TechDecisionsComp key={ind} Icon={Icon} title={data.title} info={data.info}/>
          )
        })}
      </div>
    </div>
  )
}

const TechDecisionsComp = ({Icon,title,info})=>{
  return (
    <div className="flex items-center gap-2 rounded p-2">
      <Icon className="text-2xl text-orange-400 min-[820px]:text-4xl"/>
      <div>
        <span>{title}</span>
        <p>{info}</p>
      </div>
    </div>
  )
}