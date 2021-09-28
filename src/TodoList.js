import React from 'react'
import Todo from './Todo'

export default function TodoList ({todos = []}) {
 return (
     
  <div>
    <h3><b>To do list</b></h3>
   {todos.map((p, i) => <Todo {...p} key={'todo-id-' + i} />)}
  </div>
  )
}
