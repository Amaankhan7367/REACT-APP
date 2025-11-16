import { useState,useEffect } from 'react'
import {useDispatch} from '';
import {login,logout} from '';
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
  },[])

  return (
    <>
      
    </>
  )
}

export default App
