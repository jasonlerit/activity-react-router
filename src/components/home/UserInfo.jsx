
import { useState } from "react"

const UserInfo = () => {

    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@kodego.com",
        bio: "Hi I am John Doe. Ako lang malakas"
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