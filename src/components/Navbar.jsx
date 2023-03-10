
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg border border-2 border-dark p-3 d-flex justify-content-between">
            <NavLink to="/" className="nav-link">
                GROUP 1
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbar" className="collapse navbar-collapse d-lg-flex justify-content-end">
                <ul className="navbar-nav pt-2">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link p-2">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link p-2">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link p-2">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar