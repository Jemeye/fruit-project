import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('user');

    const logOut = (e) => {
        e.preventDefault();
        if (isAuthenticated) {
            localStorage.removeItem('user');
            navigate('/login');
        } else {
            navigate('/login');
        }
    }

    return (
        <header className="header-container">
            <Link className="logo-container" to="/">
                <h1 className="logo">Fruit</h1>
            </Link>
            <nav className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item"><FaSearch></FaSearch></li>
                    <button onClick={logOut}><li className="nav-item"><FaUser></FaUser></li></button>
                </ul>
            </nav>
        </header>
    );
}

export default Header;