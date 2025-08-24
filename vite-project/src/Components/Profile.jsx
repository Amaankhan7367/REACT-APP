import react from 'react';

function Profil({username}){
  return(
    <>
    <div id="top">
    <h1>{username}</h1>
    <h2>@</h2>
    <h2>+</h2>
    <h2>=</h2>
    </div>
    <div id="main">
    <img src="imgurl"/>
    <p>{name}</p>
    <h3>0</h3>
    <h3>0</h3>
    <h3>0</h3>
    <p>posts</p>
    <p>followers</p>
    <p>following</p>
    </div>
    <div id="about"><p>{bio}</p>
    <a>{link}</a></div>
    <div id="btns">
    <button>Follow</button>
    <button>Message</button>
    <button>+©</button>
    </div>
    <div id="highlights">
    <button>{highlight}</button>
    </div>
    <div id="post-options">
    <h2>post</h2>
     <h2>reels</h2>
      <h2>tag</h2>
      </div>
      <div id="posts">
      <img src="posturl"/>
      <div>
    </>
    );
}

export default Profil;