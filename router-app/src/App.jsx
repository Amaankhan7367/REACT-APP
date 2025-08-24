/*
//import './App.css'
import React ,{ useState,useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Components/Home/Home.jsx'
import { ThemeProvider } from './Context/Context.js';
import {Outlet} from 'react-router-dom'

function App() {
  const [themeMode,setThemeMode]=useState("light")
  const lightTheme=()=>{
    setThemeMode("light")
  }
  
  const darktheme=()=>{
    setThemeMode("dark")
  }
  //actul work 
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>
    <ThemeProvider values={{themeMode,lightTheme,darkTheme}}>
    <Navbar />
    <Outlet />
    <Footer />
    </ThemeProvider>
  
    </>
    )
}

export default App
*/
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { ThemeProvider } from './Context/Context.js';
import { Outlet } from 'react-router-dom';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;