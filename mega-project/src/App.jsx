import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux';
import {login,logout} from './Store/Authslice.js';
import {header,footer} from './Components';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch;
  
  useEffect(()=>{
    Authservice.getCurrentUser()
    .then(if (userData) {
      dispatch(login(userData))
    } else {
      dispatch(logout())
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading 
  :(<div>
  <header/>
  <main>
  outlet should display here 
  </main>
  <footer/>
  </div>)
  ?(<div>loading...</div>)
  
}

export default App
