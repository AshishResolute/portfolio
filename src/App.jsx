import "./index.css"
import { useState } from "react"
import { NavBar,NavModal } from "./components/Navbar.jsx"
import { Hero } from "./components/main.jsx"
import { Projects } from "./components/project.jsx"

let App = ()=>{
  const [navModal,setNavModal]=useState(false)
  return(
    <div className="  text-[#1E2022] flex flex-col font-sora overflow-auto">
      {navModal&&<NavModal navModal={navModal} setNavModal={setNavModal}/>}
        <NavBar userName="Ashish." navModal={navModal} setNavModal={setNavModal}/>
        <Hero userName="Ashish."/>
        <Projects/>
    </div>
  )
}

export default App