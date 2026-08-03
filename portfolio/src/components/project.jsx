import { MdArrowOutward } from "react-icons/md";

import { projects } from "../data/projects.data.js";

export const Projects = ()=>{
    return (
        <div className=" p-8 space-y-3 text-[#6b6b68]">
            <ProjectSectionHeader/>
            <div className="grid grid-cols-2 gap-4">{projects.map((data)=><ProjectCard key={data.title} icon={data.icon} title={data.title} description={data.description} githubSrc={data.githubSrc}/>)}</div>
        </div>
    )
}

const ProjectSectionHeader = ()=>{
    return (
        <div className="space-y-1 ">
            <h1 className="text-[#185fa5] text-2xl ">Projects</h1>
            <h2 className="text-xl text-white">Things I've Built</h2>
            <p>
                A few backend-heavy projects — APIs, auth systems, and the plumbing behind them.
            </p>
        </div>
    )
}


const ProjectCard = ({name,icon:Icon,title,description,githubSrc})=>{
    return (
        <div key={name} className="bg-black border p-4 rounded-2xl space-y-1 h-52">
            <div className="flex justify-between space-y-1">
                <Icon/>
                <a href={githubSrc}><MdArrowOutward/></a>
            </div>
            <div>
                <h2 className="text-xl text-white">{title}</h2>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}

