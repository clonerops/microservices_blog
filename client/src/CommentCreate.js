import React, { useState } from 'react'
import axios from 'axios'


const CommentCreate = ({ postId }) => {

    const [content, setContent] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()
        await axios.post(`http://localhost:4001/post/${postId}/comments`, {
            content
        })
        setContent('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>new comment</label>
                    <input
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <button className='btn btn-success mt-2'>submit</button>
            </form>
        </div>
    )
}

export default CommentCreate