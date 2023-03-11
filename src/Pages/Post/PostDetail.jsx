import React from "react"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import './PostDetail.css'
import PostList from "./PostList"
const PostDetail = () => {
  const [posts, setPosts] = useState([]);
  const user = 1;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://server-zeta-eight-72.vercel.app/posts/getPosts', {
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
  const postsList = useSelector((state) => state.postsReducer);

  const navigate = useNavigate()

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question")
      navigate('/Auth')
    } else {
      navigate('/Post')
    }
  }



  return (
    <>
      <div className="btn">
        <button onClick={checkAuth} className='ask-btn'>Post</button>
      </div>
      {posts.length === null || "" ? (
        <h1>Loading...</h1>
      ) :
        <>
          <p>{posts.length} posts</p>
          <PostList postsList={posts} />
        </>}
    </>
  )
}
export default PostDetail
