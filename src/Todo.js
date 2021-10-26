import React, {useContext, useEffect} from 'react'
import { StateContext } from './Contexts'
import { useResource } from 'react-request-hook'

export default function Todo ({ title, description, dateCreated, complete, dateCompleted, todoId}) {

    const {dispatch} = useContext(StateContext)

    //network request. value from server response stored in todo
    const [todo , deleteTodo ] = useResource(({ todoId }) => ({
        url: '/todos/:todoId',
        method: 'delete',
        data: { todoId}
    }))

    function handleCompleteBox (evt) { 
        dispatch({type:"TOGGLE_TODO", title: title, todoId:todoId})
    }

    function handleDeleteBtn(e){
        // dispatch({type:"DELETE_TODO", title: title})
        deleteTodo({ todoId })
    }

    useEffect(() => {
        if (todo && todo.data) {
            dispatch({ type: 'DELETE_TODO', id: todo.data.id})
            console.log(todo.data)
            // navigation.navigate('/post/${todo.data.id}')
        }
    }, [todo])

    return (
         <div>
            
            <div>Title: {title}</div>
            <div>Description: {description}</div>
            <div>Date created: {dateCreated} </div>
            <div>
                <label htmlFor="completed-todo">Completed: </label>
                <input type="checkbox" value={complete} onChange={handleCompleteBox} id="completed-todo" name="completed-todo" />
            </div>
            <div>Date Completed: {dateCompleted}</div>
            <button onClick={e => {handleDeleteBtn()}}>Delete</button>
            <br /><br />
        </div>
        )
}
