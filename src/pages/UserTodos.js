import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import { Link } from 'react-navi'

export default function UserTodos () {

  const {state} = useContext(StateContext)
  const {todos} = state;
 return (
     
  <div>
    <h3><b>Profile</b></h3>
   {/* {todos.map((p, i) => <Todo dateCreated={p.dateCreated} complete={p.complete} completedOn={p.completedOn} title={p.title} description={p.description} key={'todo-' + i} id={p._id}/>)} */}
  </div>
  )
}
