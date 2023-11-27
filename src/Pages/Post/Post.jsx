import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Post.css';
import { uploadPosts } from '../../api';
import { Alert } from '../../components/Alert/Alert';

const MakePost = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const navigate = useNavigate();

  const User = useSelector((state) => state.currentUserReducer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (User) {
      // Create a FormData object to store the form data
      const formData = new FormData();
      formData.append('title', title);
      formData.append('tags', tags);
      formData.append('image', image);

      // Make a POST request to the server to save the post
      try {
        const response = await fetch("http://localhost:5000/posts/upload", {
          method: 'POST',
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            base64: image,
            title,
            tags,
            userPosted: User.result.name,
          })
        })
        const data = await response.json();
        if (data) {
          navigate('/DisplayPost');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      <Alert type="error" message="Login to make a post" />;

    }
  };

  const imageToBase64 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.onerror = (error) => {
      console.error('Error: ', error);
    };
  };

  return (
    <>
      {/* <Alert type="error" message="Login to make a post" />; */}
      <form onSubmit={handleSubmit} className="form-container  p-4" style={{ width: "100%" }}>
        <div className='border border-b-2 p-3'>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Image:
              <input type="file" accept="image/*" onChange={imageToBase64} className="border border-gray-300 p-2 mt-1 w-full" />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Title:
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' className="border border-gray-300 p-2 mt-1 w-full" />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Tags:
              <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder='Enter Tags' className="border border-gray-300 p-2 mt-1 w-full" />
            </label>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          <div className='w-100'>
            <img src={image} height={150} width={350} className="mt-4 w-100" />
          </div>
        </div>
      </form>

    </>
  );
};

export default MakePost;
