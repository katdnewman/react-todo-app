import React, {useReducer, useEffect} from 'react';
import { useResource } from 'react-request-hook';
import UserBar from "./UserBar";
import TodoList from "./TodoList";
import appReducer from './reducers';
import { StateContext } from './Contexts'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'




function App() {
  // const initialTodos = [
  //   {
  //     title: "Laundry",
  //     description: "wash and dry",
  //     dateCreated: "9-28-21",
  //     complete: false,
  //     dateCompleted: ""
  //   },
  //   {
  //     title: "Dishes",
  //     description: "wash and dry",
  //     dateCreated: "9-28-21",
  //     complete: false,
  //     dateCompleted: ""
  //   }
  // ]

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))



  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] })

  useEffect(getTodos, [])
  
  useEffect(() => {
    if (todos && todos.data) {
        dispatch({ type: 'FETCH_TODOS', todos: todos.data })
    }
}, [todos])

  // const {user} = state; //using in UserBar

  const { data, isLoading } = todos;
  
  return  (
    <div>
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <UserBar/>
        <br/><br/><hr/><br/> 
        {/* test */}
        {/* {user && <CreateTodo /> } */}

        {/* <TodoList/> */}
        {isLoading && 'Todos loading...'} <TodoList />
      </StateContext.Provider>
    </div>
  );
}

export default App;
