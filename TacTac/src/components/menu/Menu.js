import React from "react";

import './Menu.css';

const Menu = () => {
    return (
        <div>
            <ul className="nav-list">
                <li><span className="icon icon-home" ></span>Home</li>
                <li><span className="icon icon-feed" ></span>Feed</li>
                <li><span className="icon icon-post" ></span>Post</li>
                <li><span className="icon icon-profile" ></span>Profile</li>
                <li><span className="icon icon-login" ></span>Login</li>
            </ul>
        </div>
    );
}

export default Menu;