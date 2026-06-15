import { GrContact } from "react-icons/gr";


export const NavBar = ({userName})=>{
    return (
        <nav id="nav-bar">
            <h2>{userName}</h2>
            <ol style={{listStyleType:"none"}} id="list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
            </ol>
            <GrContact />
        </nav>
    )
}