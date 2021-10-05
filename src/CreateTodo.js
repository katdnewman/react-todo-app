import React, {useState}  from 'react'

export default function CreateTodo ({user, dispatchUser}) {
    // const now = new Date().toString(); //use for the hook later

    const [ title, setTitle ] = useState('')
    const [ description, setDesc ] = useState('')

    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDesc (evt) { setDesc(evt.target.value) }

     return (
        <form onSubmit={e => {e.preventDefault(); dispatchUser({type: "CREATE_TODO", title, description, author: user});} }>
             
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
 