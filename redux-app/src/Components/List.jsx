import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {removeTodo} from '../Features/Todoslise.js';
import './List.css'

function List() {
  const todos = useSelector(state=>state.todos)
  const dispatch = useDispatch()
  
  
  return (
    <>
      <ul className="todo-item">
      {todos.map ((todo) =>(
        <li key={todo.id} className="todo-actions">
        <div className="todo-text">{todo.text}</div>
      
        <button
        onClick={() =>dispatch(removeTodo(todo.id))}>❌</button>
         </li>
    ))}
    </ul>
    </>
  );
}

export default List;