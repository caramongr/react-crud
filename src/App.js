import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';
import ToDoList from './ToDoList'

const todosInitialState = {
  todos:[{ id:1, text: "finishing writing hooks chapter"},
  { id:2, text: "play with kids"},
  { id:3, text: "read bible"}
  ]
};

export const TodosContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(todosReducer,todosInitialState)
  return (
<TodosContext.Provider value={{state,dispatch}}>
<ToDoList />
</TodosContext.Provider>
  )
}

function todosReducer(state, action){
  switch(action.type){
      case 'delete':
      const filteredTodoState = state.todos.filter( todo => todo.id !==
      action.payload.id)
      return {...state, todos: filteredTodoState}
  default:
  return todosInitialState
  }
  }

export default App;
