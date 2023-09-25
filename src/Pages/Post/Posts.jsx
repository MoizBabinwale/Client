import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './PostDetail.css';

const Posts = ({ post }) => {
    // const [postsList, setPostsList] = useState([]);

    const style = {
        height: 300,
        width: 700,
    };

    return (
        <>
            <div className="post-container">
                <div key={post._id} className="post-card">
                    <div className="post-card-header">
                        <h3>{post.userPosted}</h3>
                        <div className="post-card-info">
                            <p>{new Date(post.createdAt).toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="post-card-body">
                        <h3>{post.title}</h3>
                        <img style={style} src={post.image} alt={post.title} className="post-card-image" />
                        <p>{post.tags.split(' ').map((tag) => `#${tag.trim()} `)}</p>
                        <p className="display-time">
                            asked {moment(post.askedOn).fromNow()} {post.userPosted}
                        </p>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Posts;
