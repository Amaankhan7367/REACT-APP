import { useState,useCallback,useEffect } from 'react'
import './App.css'

function App() {
  const [length,setLength] =useState(8);
  const [Numallowed,setNumallowed] = useState(false);
  const [charallowed,setCharallowed] = useState(false);
  const [password,setPassword] =useState("")
  const passwordgen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz"
    if(Numallowed)str+="0123456789";
    if(charallowed)str+="@#₹_&-+*!?";
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
      
    }
    setPassword(pass);
},[length,Numallowed,charallowed,setPassword])
const copytoclip =useCallback(()=>{
  window.navigator.clipboard.writeText(password)
},[password])
useEffect(()=>{passwordgen()}
,[length,Numallowed,charallowed,passwordgen])
  return (
    <>
    <div id="main">
    <div id="container">
    <h1>Password Generator</h1>
    <div id="top">
    <input className="text" 
    type="text" value={password} readOnly/>
    <button onClick={copytoclip}>Copy</button>
    <button onClick={passwordgen}>Regenerate</button>
    
    </div>
    <div id="selection">
      <input className="text"
      type="range" min="6" max="100" value={length} onChange={(e)=>{setLength(e.target.value)}}/>
     <label>length{length}</label><br/><br/>
     <input
     type="checkbox"
     defaultChecked={Numallowed}
     onChange={()=>setNumallowed(prev=>!prev)}/>
     <label>Number</label><br/><br/>
     <input
     type="checkbox" 
     defaultChecked={charallowed}
     onChange={()=>setCharallowed(prev=>!prev)}/>
     <label>Special char</label>
    </div>
    </div>
    </div>
    </>
    );
}

export default App
