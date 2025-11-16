import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux';
import {login,logout} from './Store/Authslice.js';
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
  :(<div>hello</div>)
  ?(<div>loading...</div>)
  
}

export default App
