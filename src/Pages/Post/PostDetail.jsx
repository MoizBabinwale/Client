import React from "react"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import './PostDetail.css'
import PostList from "./PostList"
import { getAllPosts } from "../../api"
const PostDetail = () => {
  const [posts, setPosts] = useState([]);
  const user = 1;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/posts/getPosts")
        const data = await response.json();
        console.log(data);
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
    <div className="float-left my-6 p-2 lg:w-[700px]  block w-[100%]">
      <div className="btn ">
        <button onClick={checkAuth} className='ask-btn'>New Post</button>
      </div>
      {posts.length === null || "" ? (
        <h1>Loading...</h1>
      ) :
        <>
          <PostList postsList={posts} />
        </>}
    </div>
  )
}
export default PostDetail
