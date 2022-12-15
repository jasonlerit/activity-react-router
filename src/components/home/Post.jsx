
const Post = ({ post }) => {
    return (
        <div className="card my-2">
            <div className="card-body">
                <div className="card-title fw-bold">
                    {post.title}
                </div>
                <div className="card-text">
                    {post.body}
                </div>
            </div>
        </div>
    )
}

export default Post