import React, { useContext } from 'react'
import Todo from './Todo'
import { StateContext } from './Contexts'

export default function TodoList () {

  const {state} = useContext(StateContext)
  const {todos} = state;
 return (
     
  <div>
   {todos.map((p, i) => <Todo dateCreated={p.dateCreated} complete={p.complete} completedOn={p.completedOn} title={p.title} description={p.description} key={'todo-' + i} id={p._id}/>)}
  </div>
  )
}
