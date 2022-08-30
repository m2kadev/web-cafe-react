import React, { useState, useContext } from 'react'
import UserLogo from '../assets/user.png'
import { AppContext } from '../App'

export const AddPost = () => {
    const { posts, setPosts } = useContext(AppContext)
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const addPost = () => {
        const post = {
            id: posts.length === 0 ? 1 : posts[posts.length-1].id + 1,
            description: description, 
            category: category, 
            like: false, 
            showComment: false,
            comment: []
        }
        setPosts([...posts, post])
        document.getElementById('alert').classList.add('show')
        setTimeout(() => {
            document.getElementById('alert').classList.remove('show')
        }, 3000);
    }

    return (
        <div className='add-post'>
            <div className="alert" id='alert'>Your post is now published</div>
            <div className='user-info'>
                <img src={UserLogo} />
                <div className="user-name">
                    <span>Myat Ko Ko</span>
                </div>
            </div>
            <textarea onChange={(e) => setDescription(e.target.value)} placeholder='Write your post\s description here'></textarea>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option>What type of your post?</option>
                <option value="Web Development">Web Development</option>
                <option value="Technology">Technology</option>
                <option value="Application">Application</option>
                <option value="Jobs">Jobs</option>
                <option value="Social">Social</option>
            </select>
            <button onClick={addPost} className='post-btn'>Post Now</button>
        </div>
    )
}