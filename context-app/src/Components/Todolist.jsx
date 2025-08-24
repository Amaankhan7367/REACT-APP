import React,{useState} from 'react';
import {useTodo} from '../Context/Index.js'
import './Todolist.css';

function Todolist({todo}) {
  
  const [todomsg,setTodomsg] = useState(todo.todo)
  const [edit,setEdit] = useState(false)
  const {removetodo,edittodo,checkbox} = useTodo()
  
  const update = () => {
     edittodo(todo.id,{...todo,todo:todomsg})
     setEdit(false)
  }
  
  const checked = () => {
      checkbox(todo.id)
  }
  
  return(
    <>
      <div
      className="todo-item"
      style={{
    backgroundColor: todo.completed ? 'green' : 'blue'
    
  }}>
        <input
        className="todo-checkbox"
  type="checkbox"
  checked={todo.completed}
  onChange={checked}
  
/>
        <input
        className="todo-text"
        type="text"
        value={todomsg}
        onChange={(e) => setTodomsg(e.target.value)}
        readOnly={!edit}
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
        />
        <div className="todo-actions">
        <button
        
        onClick={() => {
            if(todo.completed)return;
            
            if (edit) {
              update();
            }
            else {
              setEdit((prev)=>!prev);
            }
        }}
        disabled={todo.completed}// checked
        >
          { edit? "⎙":"✏️"}
        </button>
        <button
        onClick={()=>removetodo(todo.id)}>❌</button>
        </div>
      </div>
    </>
  );
}

export default Todolist