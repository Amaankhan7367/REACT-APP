import React, {useState}from 'react';
import {addTodo} from '../Features/Todoslise.js';
import './Todoinput.css'

import { useDispatch } from 'react-redux';

function Todoinput() {
  const  [todo,setTodo]=useState("")
  const dispatch = useDispatch()
  const add = (e) =>{
    e.preventDefault()
    dispatch(addTodo(todo))
    setTodo("")
  }
  
  
  return (
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
  );
}

export default Todoinput;