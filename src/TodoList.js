import React, { useContext } from 'react'
import Todo from './Todo'
import { StateContext } from './Contexts'

export default function TodoList () {

  const {state} = useContext(StateContext)
  const {todos} = state;

 return (
     
  <div>
    <h3><b>To do list</b></h3>
   {todos.map((p, i) => <Todo {...p} title={p.title} description={p.description} key={'todo-' + i} id={p._id}/>)}
  </div>
  )
}
