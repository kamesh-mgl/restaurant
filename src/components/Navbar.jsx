import Menu from "./Menu"
import Clock from './Clock.jsx';
function Navbar()
{
    return(
        <>
            <nav className="navbar">
                <a href="#home" className="anchor">Home</a>
                <a href="#menu" className="anchor">Menu</a>
                <a href="#additems" className="anchor">Add Item</a>
                <Clock/>
            </nav>
        </>
    )
}

export default Navbar