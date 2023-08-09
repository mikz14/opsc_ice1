import React from "react";

import LikeButton from "../likeButton/LikeButton";
import './post.css';

const Post = props => {
    return (
        <div>
            <div className="post-img">
                <img src={props.post.imgUrl} className="post-img" alt="Post Image" />
            </div>
            <div className="post-like">
                <LikeButton className="post-like-btn" onLikeClick={props.onLikeClick} postId={props.post.id} />
                {props.post.likes} likes
            </div>
            <div className="post-caption">
                {props.post.caption}
            </div>
        </div>
    );
}

export default Post;