
import { NavLink } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#434242'}}>
            <div className="text-center">
                <h1 className="text-light">
                    Page Not Found
                </h1>
                <NavLink to="/" className="btn btn-light">
                    Go back to Home
                </NavLink>
            </div>
        </div>
    )
}

export default PageNotFound