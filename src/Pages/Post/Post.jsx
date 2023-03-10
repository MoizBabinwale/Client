import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Post.css';

const MakePost = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const navigate = useNavigate();

  const User = useSelector((state) => state.currentUserReducer);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to store the form data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('tags', tags);
    formData.append('image', image);

    // Make a POST request to the server to save the post
    try {
      const response = await fetch('https://server-zeta-eight-72.vercel.app/posts/upload', {
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
          tags
        })
      })
      const data = await response.json();
      console.log(data);
      navigate('/DisplayPost');
    } catch (error) {
      console.error(error);
    }
  };

  const imageToBase64 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };

    reader.onerror = (error) => {
      console.error('Error: ', error);
    };
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>
          Image:
          <input type="file" accept="image/*" onChange={imageToBase64} />
        </label>
      </div>
      <div>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Tags:
          <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
        </label>
      </div>
      <button type="submit">Submit</button>
      <img src={image} height={150} width={150} />
    </form>
  );
};

export default MakePost;
