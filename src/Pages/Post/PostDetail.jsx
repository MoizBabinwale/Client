import React from "react"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import './PostDetail.css'
const PostDetail = () => {
  const [posts, setPosts] = useState([]);
  const user = 1;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/posts/getPosts', {
          method: 'GET'
        });
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const navigate = useNavigate()
  // const postsList = useSelector(state => state.postsReducer)
  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question")
      navigate('/Auth')
    } else {
      navigate('/Post')
    }
  }
  const style = {
    height: 300,
    width: 700,
    // alingitem:center
  }
  return (
    <>
      <div className="btn">
        <button onClick={checkAuth} className='ask-btn'>Post</button>
      </div>
      {posts.data === null || "" ?
        <h1>Loading...</h1> :
        <>
          <div className="post-container">
            {posts.map((post) => (
              <div key={post._id} className="post-card">
                <div className="post-card-header">
                  <div className="post-card-info">
                    <p>{new Date(post.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                <div className="post-card-body">
                  <h3>{post.title}</h3>
                  <img style={style} src={post.image} alt={post.title} className="post-card-image" />
                  <p>{post.tags.split(' ').map((tag) => `#${tag.trim()} `)}</p>
                  <hr />
                </div>
              </div>
            ))}
          </div>
        </>}
    </>
  )
}
export default PostDetail
