import Menu from "./Menu"
import Clock from './Clock.jsx';
import { NavLink} from "react-router-dom"


function Navbar() {
    console.log("navbar")
    return (
        <>
            <nav className="navbar">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "anchor active" : "anchor"}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/menu"
                    className={({ isActive }) => isActive ? "anchor active" : "anchor"}
                >
                    Menu
                </NavLink>

                <NavLink
                    to="/additems"
                    className={({ isActive }) => isActive ? "anchor active" : "anchor"}
                >
                    AddItems
                </NavLink>
                <Clock />
            </nav >
        </>
    )
}

export default Navbar