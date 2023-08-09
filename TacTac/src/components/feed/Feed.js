import React from "react";

import Post from "../post/post";
import './Feed.css';

const Feed = props => {
    return (
        <div>
            <ul className="feed">
                {props.post.map((post) => {
                    return(
                        <li className="post" key={post.id}>
                            <Post post={post} onLikeClick={props.onLikeClick} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Feed;