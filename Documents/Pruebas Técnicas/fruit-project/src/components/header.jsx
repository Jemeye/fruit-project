import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Header() {
    return ( 
        <header className="header-container">
            <Link className="logo-container" to="/">
                <h1 className="logo">Fruit</h1>
            </Link>
            <nav className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item"><FaSearch></FaSearch></li>
                    <Link><li className="nav-item"><FaUser></FaUser></li></Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;