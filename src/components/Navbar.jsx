
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg border border-2 border-dark p-3 d-flex justify-content-between">
            {/* Logo */}
            <NavLink to="/" className="nav-link">
                Logo
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* Menus */}
            <div id="navbar" className="collapse navbar-collapse d-lg-flex justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item px-2">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item px-2">
                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item px-2">
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar