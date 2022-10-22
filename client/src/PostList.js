import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

const PostList = () => {
    const [posts, setPosts] = useState({})

    const fetchedPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts')
        setPosts(res.data)
    }

    useEffect(() => {
        fetchedPosts()
    }, [])

    const rendredPost = Object.values(posts).map(post => {
        return <div className='card'>
            <div className='card-body'>
                <h4>{post.title}</h4>
                <CommentList comments={post.comments} />
                <CommentCreate postId={post.id} />
            </div>
        </div>
    })

    return (
        <div className='d-flex justify-content-between flex-row flex-wrap'>
            {rendredPost}
        </div>
    )
}

export default PostList