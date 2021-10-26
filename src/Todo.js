import React, {useContext, useEffect} from 'react'
import { StateContext } from './Contexts'
import { useResource } from 'react-request-hook'

export default function Todo ({ title, description, dateCreated, complete, dateCompleted, id}) {

    const {dispatch} = useContext(StateContext)

    //network request. value from server response stored in todo
    const [todo , deleteTodo ] = useResource(({ id }) => ({
        url: '/todos/' + id,
        method: 'delete'
    }))

    function handleCompleteBox (evt) { 
        dispatch({type:"TOGGLE_TODO", title: title, id:id})
    }

    function handleDeleteBtn(e){
        console.log("Delete " + id)
        deleteTodo({ id })
    }

    useEffect(() => {
        if (todo && todo.data) {
            dispatch({ type: 'DELETE_TODO', id: id})

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
            <div>iD: {id}</div>
            <button onClick={e => {handleDeleteBtn()}}>Delete</button>
            <br /><br />
        </div>
        )
}
