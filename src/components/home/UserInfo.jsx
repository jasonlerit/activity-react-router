
import { useState } from "react"

const UserInfo = () => {

    const [user, setUser] = useState({
        name: "Jryl Lim",
        email: "jryllim@kodego.com",
        bio: "Hi I am Jryl Lim. Ako lang malakas kasi J 😎"
    })

    return (
        <div className="card border border-2 border-dark mb-2 lh-2">
            <div className="card-body">
                <p className="card-text fw-bold">
                    Name: {user.name}
                </p>
                <p className="card-text fw-bold">
                    Email: {user.email}
                </p>
                <p className="card-text">
                    <span className="fw-bold">Bio:</span> {user.bio}
                </p>
            </div>
        </div>
    )
}

export default UserInfo