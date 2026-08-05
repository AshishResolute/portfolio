import {aboutMeData,skills} from '../data/projects.data.js'

export const  AboutSection = ()=>{
    return(
        <div className="p-8 text-[#6b6b68] space-y-8">
            <AboutSectionHeader/>
            <div className='flex flex-col md:flex-row md: gap-4 justify-around'>
            <AboutSectionContent/>
            <SkillsSection/>
            </div>
        </div>
    )
}

const AboutSectionHeader = ()=>{
    return(
        <div>
            <h3 className="text-[#185fa5] text-2xl">About</h3>
            <h2 className="text-xl">A bit about me</h2>
        </div>
    )
}

const AboutSectionContent = ()=>{
    return (
        <div className="space-y-5  p-8 flex flex-col items-center">
            <div>
                <p>{aboutMeData[0]}</p>
                <br />
                <p>{aboutMeData[1]}</p>
            </div>
            <ExpAndLocation/>
        </div>
    )
}

const ExpAndLocation = ()=>{
    return(
        <div className="flex gap-4 text-center ">
            <div >
                <p className="text-gray-300 text-xl">{aboutMeData[2].exp}</p>
                <p className='text-center'>months building</p>
            </div>
            <div>
                <p className="text-gray-300 text-xl">{aboutMeData[2].projectsShipped}</p>
                <p>Projects Shipped</p>
                </div>
            <div>
                <p className="text-gray-300 text-xl">{aboutMeData[2].location}</p>
                <p>based in</p>
            </div>
        </div>
    )
}

const SkillsSection = ()=>{
    return (
        <div className=' p-8 space-y-2'>
            <div className='space-y-1.5'>
                <p className='text-gray-700'>BACKEND</p>
                <InlineSkillsSpan data={skills.backend}/>
            </div>
            <div>
                <p className='text-gray-700'>AUTH & SECURITY</p>
                <InlineSkillsSpan data={skills.auth}/>
            </div>
            <div>
                <p className='text-gray-700'>ALSO USING</p>
                <InlineSkillsSpan data={skills.also}/>
            </div>
            <div>
                <p>Find me Resume here</p>
                <button>Resume</button>
            </div>
        </div>
    )
}

const InlineSkillsSpan = ({data})=>{
    return(
        <div className='flex flex-wrap gap-2'>
            {data.map((skill,ind)=><span key={ind} className='border border-gray-500 p-1 rounded-xl'>{skill}</span>)}
        </div>
    )
}