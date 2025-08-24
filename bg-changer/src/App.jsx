import React, { useState } from 'react';
import './App.css'

function App() {
  const [colour, setColour] = useState("black")

  return (
    <div id="bg" style={{backgroundColor: colour}}>
    <div id="bar">
         <button id="red" onClick={()=>setColour("red")}>red</button>
         <button id="green" onClick={()=>setColour("green")}>green</button>
         <button id="blue" onClick={()=>setColour("blue")}>blue</button>
         <button id="orange" onClick={()=>setColour("orange")}>orange</button>
          <button id="yellow" onClick={()=>setColour("yellow")}>yellow</button>
          <button id="black" onClick={()=>setColour("black")}>black</button>
          <button id="gold" onClick={()=>setColour("gold")}>gold</button>
    </div>
    </div>
    )
}

export default App

