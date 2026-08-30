import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'
import { ProjectDetailPage } from './components/ProjectDetailPage.jsx'
import './index.css'
import App from './App.jsx'

const Project1 = ()=>{
  return (
    <h1>Project 1</h1>
  )
}
const Project2 = ()=>{
  return (
    <h1>Project </h1>
  )
}





createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
   <Route path='/' element={<App/>}/>
   <Route path="project/:slug" element={<ProjectDetailPage />}/>
  </Routes>
  </BrowserRouter>,
)
