
import { useState } from "react"

const UserInfo = () => {

    const [user, setUser] = useState({
        name: "J",
        email: "j@kodego.com",
        bio: "My bio here"
    })

    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">
                    {user.name}
                </p>
                <p className="card-text">
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