import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './Index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    
    </Route>
  )
)
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router} />
    
  </StrictMode>
);