import React, {createContext, useContext} from 'react'

const todoContext = createContext({
  todos:[
    {
  id:1,
  todo: "code with amaan",
  completed: false,
    }
  ],
  addtodo:(todo)=>{},
  removetodo: (id)=>{},
  edittodo:(todo,id)=>{},
  checkmark:(id)=>{},
});

export const useTodo = ()=>{
  return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider;