import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/Currconverter.js'

function App() {
  const [amount, setAmount] = useState(1)
  const [changedamount, setChangedamount]=useState(80)
  const [from , setFrom]=useState("usd")
  const[to , setTo]=useState("inr")
  const swap= ()=>{
    setFrom(to)
    setTo(from)
  }
  return (
    <>
    <div id="container">
    <h2>Currency converter</h2>
    <form>
    <p>Enter Amount</p>
    <input 
    type="number"
    value={amount}/>
    <div className="selectContainer">
    <div id="from">
    <p>From</p>
    <select >
    <option>usd</option>
    </select>
    </div>
    
    <i id="swap" class="fa-solid fa-arrow-right-arrow-left" />
    
    
    <div id="to">
    <p>To</p>
    <select>
    <option>inr</option>
    </select>
    </div>
    </div>
    
    <h4>{amount} {from} is {changedamount} {to} </h4>
    
    <button>Convert</button>
    </form>
    </div>
    </>
    )
}

export default App
