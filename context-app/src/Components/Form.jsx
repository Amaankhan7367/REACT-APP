import React,{useState} from 'react';
import './Form.css';
import {useTodo} from '../Context/Index.js'
function Form() {
  const [todo ,setTodo] = useState("")
  
  const {addtodo}= useTodo()
  
  const add=(e) => {
      e.preventDefault()
      if (!todo) return;
  addtodo({todo, complete:false})
  setTodo("")
      
  }
  
  return(
    <form
    className="form-container"
    onSubmit={add}>
      <input 
      className="form-input"
      type="text"
      placeholder="write todo..."
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default Form