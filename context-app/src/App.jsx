import React,{useState, useEffect} from "react";
import {TodoProvider} from './Context/Index.js';
import Form from './Components/Form.jsx'
import Todolist from './Components/Todolist.jsx';

function App(){
    const  [todos,setTodos]=useState([])
    
    const addtodo = (todo) => {
        setTodos((prev)=>[{id:Date.now(),...todo},...prev])
    }
    
    const edittodo =(id,todo) =>{
      setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo:prevTodo)))
    }
    
    const removetodo = (id) => {
        setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
    }
    
    const checkbox = (id) => {
        setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id? {...prevTodo, complete:!prevTodo.complete}:prevTodo))
    }
    
    useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem("todos"))
      if(todos){//added problem 
        setTodos(todos)
      }
    },[]
    )
    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    },[todos]
    )
    
    return (
      <TodoProvider value={{todos,addtodo,removetodo,edittodo,checkbox}}>
      <div>
        <Form />
        <div>
        {todos.map((todo)=>(
          <div key={todo.id}>
          <Todolist todo={todo} />
          </div>
          ))}
        </div>
      </div>
      </TodoProvider>
    );
  }

export default App;