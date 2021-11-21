import React, {useState, useContext, useEffect} from 'react'
import { StateContext } from './Contexts'
import { useResource } from 'react-request-hook'

import { useNavigation } from 'react-navi'

export default function CreateTodo () {

    const [ title, setTitle ] = useState('')
    const [ description, setDesc ] = useState('')

    const navigation = useNavigation()


    const {state, dispatch} = useContext(StateContext)
    const {user} = state;

    //network request. value from server response stored in todo
    const [todo , createTodo ] = useResource(({ title, description, author, dateCreated }) => ({
        url: '/todo',
        method: 'post',
        headers: {"Authorization": `${state.user.access_token}`},
        data: { title, description, author, dateCreated }
    }))

    function handleCreate () {
        const now = new Date().toString();
        createTodo({ title, description, author: user.username, dateCreated: now })
        // dispatch({ type: 'CREATE_TODO', title, description, author: user })
        
    }

    useEffect(() => {
        if (todo && todo.data) {
            console.log(todo.data)
            dispatch({ type: 'CREATE_TODO', title: todo.data.title, content: todo.data.description, id: todo.data.id, author: user.username })
            console.log(todo.data)
            navigation.navigate('/todo/'+todo.data._id)
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
 