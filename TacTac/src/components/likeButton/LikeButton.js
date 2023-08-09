import React from "react";

import './LikeButton.css';

const LikeButton = props => {

    return (
        <form onSubmit={props.onLikeClick}>
            <input hidden readOnly name="post" value={props.postId} />
            <button type="submit">♡</button>
        </form>
    );
}

export default LikeButton;