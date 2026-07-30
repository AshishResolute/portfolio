import "./index.css"
import { useState } from "react"
import { NavBar,NavModal } from "./components/Navbar.jsx"

let App = ()=>{
  const [navModal,setNavModal]=useState(false)
  return(
    <div className="min-h-screen  text-[#1E2022]">
      {navModal&&<NavModal navModal={navModal} setNavModal={setNavModal}/>}
        <NavBar userName="Ashish Gourh" navModal={navModal} setNavModal={setNavModal}/>
    </div>
  )
}

export default App