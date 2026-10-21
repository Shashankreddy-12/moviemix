//Navbar.jsx
import "../css/Navbar.css"
import {Link} from "react-router-dom"
export default function Navbar(){
    return <nav className="navbar">
    <div className="nav-logo">
        <h2>MovieMix</h2>
    </div>
    <Link to="/" className="nav-home"><h3>Home</h3></Link>
    <Link to="/favourites" className="nav-favourites"><h3>Favourites</h3></Link>
    </nav>
}