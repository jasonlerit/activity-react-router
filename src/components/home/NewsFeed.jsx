import { useEffect, useState } from "react"
import Post from "./Post"

const NewsFeed = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPost()
    }, [])

    const getPost = async () => {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await result.json()
        setPosts(() => data)
    }

    return (
        <div className="border border-2 border-dark p-3">
            {
                posts.map((post, index) => <Post key={index} post={post} />)
            }
        </div>
    )
}

export default NewsFeed