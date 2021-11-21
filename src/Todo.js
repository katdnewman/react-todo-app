import React, {useContext, useEffect} from 'react'
import { StateContext } from './Contexts'
import { useResource } from 'react-request-hook'

export default function Todo ({ title, description, dateCreated, complete, dateCompleted, id}) {

    const {state, dispatch} = useContext(StateContext)

    //network request. value from server response stored in todo
    const [todo , deleteTodo ] = useResource(({ id }) => ({
        url: '/todo/' + id,
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'delete'
    }))

    const [togTodo , toggleTodo ] = useResource(({ id, newDateCompleted }) => ({
        url: '/todo/' + id,
        method: 'put',
        headers: {"Authorization": `${state.user.access_token}`},
        data: { title, description, id, complete: !complete, dateCreated, dateCompleted: newDateCompleted }
    }))

    function handleCompleteBox (evt) { 
        //dispatch({type:"TOGGLE_TODO", title: title, id:id})
        
        var newDateCompleted = "";
        
        // Completing
        // !completed -> completed
        if (!complete)
        {
            newDateCompleted = new Date().toString();
        }
        
        toggleTodo({ id, newDateCompleted })
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

    useEffect(() => {
        if (togTodo && togTodo.data) {
            dispatch({type:"TOGGLE_TODO", id, dateCompleted: togTodo.data.dateCompleted, complete: togTodo.data.complete})

        }
    }, [togTodo])

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
