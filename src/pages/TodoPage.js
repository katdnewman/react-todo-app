import React, { useEffect, useContext } from 'react'
import { useResource } from 'react-request-hook'

import { StateContext } from '../Contexts'

import { Link } from 'react-navi'

import Todo from '../Todo'


export default function TodoPage ({ id }) {

    const {state} = useContext(StateContext);

    const [ todo, getTodo ] = useResource(() => ({
        url: `/todo/${id}`,
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
    }))

    useEffect(getTodo, [id])

    return (
        <div>
            {(todo && todo.data)
                ? <Todo dateCreated={todo.data.dateCreated} complete={todo.data.complete} completedOn={todo.data.completedOn} title={todo.data.title} description={todo.data.description} id={todo.data._id}/>
                : 'Loading...'
            }
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}
