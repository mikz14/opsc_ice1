import React from "react";
import { useState } from "react";

import './App.css';
import Menu from './components/menu/Menu';
import Feed from './components/feed/Feed';
import logo from './images/TacTacLogo.png';

function App() {

  const [post, setPosts] = useState([
    {id:'post001', caption:'1st post...', likes:78, imgUrl:'https://th.bing.com/th/id/R.27460206f06951b4cbb8c0d7cb63335f?rik=1ICaoKVAGU6UjA&pid=ImgRaw&r=0'},
    {id:'post002', caption:'2nd post...', likes:95, imgUrl:'https://th.bing.com/th/id/OIP.ogjLf2nwAfdC8ueSKcq4fgHaEK?pid=ImgDet&rs=1'},
    {id:'post003', caption:'3rd post...', likes:84, imgUrl:'https://th.bing.com/th/id/R.c9e6383fcb9126757e7493c14b48dec8?rik=EeG6lBftddm5Hg&pid=ImgRaw&r=0'},
    {id:'post004', caption:'4th post...', likes:125, imgUrl:'https://th.bing.com/th/id/R.e1b4a7ce6e749d1f85c2d18ac1592e8b?rik=hgw4YFWKEMYCfA&pid=ImgRaw&r=0'}
  ]);
  
  const likeClickHandler = (event) => {
    event.preventDefault();
  
    const postId = post.findIndex(p => p.id === event.target.post.value);
    post[postId].like++;
  
    const updatedList = [
      ...post.slice(0),
    ];
    setPosts(updatedList);
  };

  return (
      <div className="body">
        <div className='menu'>
          <div className="menu-fixed">
            <div className='header-logo'>
              <img src={logo} alt='TacTac Logo' className='logo' />
                <h1 className='header'><span className='header-first'>Tac</span><span className='header-second'>Tac</span></h1>
              </div>
            <Menu />
          </div>
        </div>
        <div className="main">
          <Feed className="feed" post={post.reverse()} onLikeClick={likeClickHandler} /> 
        </div>
      </div>
  );
}

export default App;