import React, {useState, useContext, useEffect} from 'react'
import { StateContext } from './Contexts'
import { useResource } from 'react-request-hook'

export default function CreateTodo () {

    const [ title, setTitle ] = useState('')
    const [ description, setDesc ] = useState('')

    const {state, dispatch} = useContext(StateContext)
    const {user} = state;

    //network request. value from server response stored in todo
    const [todo , createTodo ] = useResource(({ title, description, author }) => ({
        url: '/todos',
        method: 'post',
        data: { title, description, author }
    }))

    function handleCreate () {
        createTodo({ title, description, author: user })
        // dispatch({ type: 'CREATE_TODO', title, description, author: user })
        
    }

    useEffect(() => {
        if (todo && todo.data) {
            dispatch({ type: 'CREATE_TODO', title: todo.data.title, content: todo.data.description, id: todo.data.id, author: user })
            console.log(todo.data)
            // navigation.navigate('/post/${todo.data.id}')
        }
    }, [todo])

    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDesc (evt) { setDesc(evt.target.value) }

     return (
        <form onSubmit={e => {e.preventDefault(); handleCreate();} }>
             
             <div><b>Create To do</b></div>

             <div>
                 <label htmlFor="create-title">Title:</label>
                 <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
             </div>

             <div>
                 <label htmlFor="create-desc">Description:</label>
                 <input type="text" value={description} onChange={handleDesc} name="create-desc" id="create-desc" />
             </div>

             <input type="submit" value="Create" />
             <br/><br/>
         </form>   
          )
 }
 