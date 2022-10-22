import React, { useState } from 'react'
import axios from 'axios'

const PostCreate = () => {

    const [title, setTitle] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:4000/posts', {title})

        setTitle('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <h2 className='mt-3 mb-3'>Create Post</h2>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <button className='btn btn-primary mt-3'>Submit</button>
            </form>
        </div>
    )
}

export default PostCreate