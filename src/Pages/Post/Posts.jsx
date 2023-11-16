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
            <div className="">
                <div key={post._id} className="post-card">
                    <div className="post-card-header">
                        {post.userPosted && <h3 className='font-bold'>{(post.userPosted).toUpperCase()}</h3>
                        }
                        <div className="post-card-info mt-1">
                            <p>{new Date(post.createdAt).toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="post-card-body mt-2">
                        <h3 >{post.title}</h3>
                        <img className=" rounded-2xl mt-2" style={style} src={post.image} alt={post.title} />
                        <p className='mt-1'>{post.tags.split(' ').map((tag) => `#${tag.trim()} `)}</p>
                        <p className="display-time mt-1 mb-2">
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
