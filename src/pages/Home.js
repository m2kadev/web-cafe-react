import React, { useContext, useState } from 'react'
import UserLogo from '../assets/user.png'
import { AppContext } from '../App'
import Del from '../assets/del.png'

export const Home = () => {
    const { posts, setPosts } = useContext(AppContext)
    const [ comment, setComment ] = useState('')

    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    const handleLike = (id) => {
        setPosts(posts.map(post => {
            if(post.id === id) {
                return {...post, like : !post.like}
            } else {
                return post
            }
        }))
    }

    const handleComment = (id) => {
        setPosts(posts.map(post => {
            if (post.id === id) {
                return { ...post, showComment: !post.showComment }
            } else {
                return post
            }
        }))
    } 

    const addComment = (id) => {
        setPosts(posts.map(post => {
            if (post.id === id) {
                return { ...post, comment: [...post.comment, comment]}
            } else {
                return post
            }
        }))
    }

    return (
        <div className='home-wrapper'>

            {posts.length === 0 && <h1>You have no posts now</h1>}

            {posts !== null && 
            
                posts.map(post => (
                    <div className="posts" key={post.id}>
                        <div className='user-info'>
                            <img src={UserLogo} />
                            <div className="user-name">
                                <span>Myat Ko Ko</span>
                            </div>
                            <button onClick={() => deletePost(post.id) } className='del'>
                                <img src={Del} />
                            </button>
                        </div>
                        <div className="description">
                            {post.description}
                        </div>
                        <div className="post-option">
                            <button 
                                onClick={() => handleLike(post.id)}
                                style={{ backgroundColor: post.like ? '#42bff5' : 'transparent', 
                                        color: post.like ? '#333' : '#fff'}}
                            >{post.like ? 'Liked' : 'Like'}</button>
                            <button 
                                onClick={() => handleComment(post.id)}
                            >{post.comment.length} Comment</button>
                            <button>Share Now</button>
                        </div>

                        {post.showComment && <div>
                            {post.comment.map((cmt, index) => (
                                <div key={index} className="comments-wrapper">
                                    <div className="comments">
                                        <img src={UserLogo} />
                                        <span>{cmt}</span>
                                    </div>
                                    <div className='line'></div>
                                </div>
                            ))}
                            <input onChange={(e) => setComment(e.target.value)} className='comment' type="text" placeholder='write your comment here' id='comment'  />
                            <button onClick={() => addComment(post.id)} className='cmt-btn'>Submit</button>
                        </div>}
                    </div>
                ))
            } 
            
        </div>
    )
}
