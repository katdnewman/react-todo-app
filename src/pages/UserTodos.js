import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import { Link } from 'react-navi'
import UserTodo from '../UserTodo'


export default function UserTodos ( {userid} ) {

    const {state} = useContext(StateContext);

    const [ todos, getTodos ] = useResource(() => ({
        url: 'user/' + userid,
        method: 'get'
    }))

    useEffect(getTodos, [])

    if ( todos && !todos.isLoading && todos.data )
        console.log(todos.data.todos);

    return (
        <div>
            <h3><b>Profile</b></h3>
            {  (todos && !todos.isLoading && todos.data) ? todos.data.todos.map((p, i) => <UserTodo dateCreated={p.dateCreated} completedOn={p.completedOn} title={p.title} description={p.description} key={'todo-' + i} />) : 'Loading'}
            <div><Link href={'/users'}>Go back</Link></div>
        </div>
    )
} 