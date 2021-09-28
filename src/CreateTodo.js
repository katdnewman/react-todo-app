import React from 'react'

export default function CreateTodo ({user}) {
    // const now = new Date().toString(); //use for the hook later
     return (
          <form onSubmit={e => e.preventDefault()}>
             
             <div><b>Create To do</b></div>

             <div>
                 <label htmlFor="create-title">Title:</label>
                 <input type="text" name="create-title" id="create-title" />
             </div>

             <div>
                 <label htmlFor="create-desc">Description:</label>
                 <input type="text" name="create-desc" id="create-desc" />
             </div>

             <input type="submit" value="Create" />
             <br/><br/>
         </form>   
          )
 }
 