import React, {useState, useContext} from 'react'
import { StateContext } from './Contexts'

export default function CreateTodo () {

    const [ title, setTitle ] = useState('')
    const [ description, setDesc ] = useState('')

    const {state, dispatch} = useContext(StateContext)
    const {user} = state;

    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDesc (evt) { setDesc(evt.target.value) }

     return (
        <form onSubmit={e => {e.preventDefault(); dispatch({type: "CREATE_TODO", title, description, author: user});} }>
             
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
 