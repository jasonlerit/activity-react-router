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
        <div>
            {
                posts.map((post) => <Post post={post} />)
            }
        </div>
    )
}

export default NewsFeed