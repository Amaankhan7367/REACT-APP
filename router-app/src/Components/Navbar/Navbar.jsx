/*import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Login from '../Login/Login.jsx'
import { useTheme } from '../../Context/Context';

 function Navbar (){
const {themeMode,lightTheme,darkTheme} =usetheme();

  return(
<nav id="nav">
  <div id="logo"><img src="Logo.jpg" /></div>
  <ul id="navmain">
    <li id="home"><Link id="a" to="/">home</Link></li>
    <li id="about"><Link id="a" to="about">about</Link></li>
    <li id="instagram"><Link id="a" to="instagram">instagram</Link></li>
  </ul>
  <div id="btns">
    <button id="login" >login</button>
    <button id="signup">sign up</button>
    
    <button
  id="theme"
  onClick={() => {
    if (themeMode === 'light') {
      setThemeMode('dark');
      darkTheme();
    } else {
      setThemeMode('light');
      lightTheme();
    }
  }}
>
  l/d
</button>
  </div>
  </nav>
    );
}

export default Navbar
*/
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useTheme } from '../../Context/Context.js'; // ✅ fix path if needed

function Navbar() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleTheme = () => {
    if (themeMode === 'light') {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <nav id="nav">
      <div id="logo"><img src="Logo.jpg" alt="Logo" /></div>
      <ul id="navmain">
        <li><Link id="a" to="/">Home</Link></li>
        <li><Link id="a" to="/about">About</Link></li>
        <li><Link id="a" to="/instagram">Instagram</Link></li>
      </ul>
      <div id="btns">
        <button id="login">Login</button>
        <button id="signup">Sign Up</button>
        <button
  id="theme-toggle"
  onClick={toggleTheme}
  className={`theme-btn ${themeMode}`}
  title="Toggle Theme"
>
  {themeMode === 'light' ? '🌙' : '🌞'}
</button>
        
      </div>
    </nav>
  );
}

export default Navbar;