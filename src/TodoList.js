import React from 'react'
import Todo from './Todo'
import { StateContext } from './Contexts'
import { useContext } from 'react/cjs/react.development'

export default function TodoList () {

  const {state} = useContext(StateContext)
  const {todos} = state;

 return (
     
  <div>
    <h3><b>To do list</b></h3>
   {todos.map((p, i) => <Todo {...p} key={'todo-id-' + i} />)}
  </div>
  )
}
