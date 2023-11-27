import React from 'react';
import moment from 'moment';
import './PostDetail.css';

const Posts = ({ post }) => {
    // const [postsList, setPostsList] = useState([]);
    const style = {
        height: 300,
        width: 700,
    };
    const formattedTime = moment(post.createdAt).fromNow();
    return (
        <>
            <div className="mt-2 lg:w-[700px] w-[100%]">
                <div key={post._id} className="post-card border-2 border-t-0 border-x-0 rounded-lg ">
                    <div className="post-card-header">
                        {post.userPosted && <h3 className='font-bold'>{(post.userPosted).toUpperCase()}</h3>
                        }
                    </div>
                    <div className="post-card-body mt-2">
                        <h3 >{post.title}</h3>
                        <img className=" rounded-2xl mt-2" style={style} src={post.image} alt={post.title} />
                        <p className='mt-1 text-blue-500 cursor-pointer '>{post.tags.split(' ').map((tag) => `#${tag.trim()} `)}</p>
                        <p className="display-time mt-1 mb-2">
                            Posted {formattedTime}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Posts;
