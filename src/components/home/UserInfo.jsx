
import { useState } from "react"

const UserInfo = () => {

    const [user, setUser] = useState({
        name: "J",
        email: "j@kodego.com",
        bio: "My bio here"
    })

    return (
        <div className="card border border-2 border-dark mb-2 lh-2">
            <div className="card-body">
                <p className="card-text fw-bold">
                    {user.name}
                </p>
                <p className="card-text fw-bold">
                    {user.email}
                </p>
                <p className="card-text">
                    {user.bio}
                </p>
            </div>
        </div>
    )
}

export default UserInfo