import React from 'react'

export default function Todo ({ dispatchApp, title, description, dateCreated, complete, dateCompleted}) {

    function handleCompleteBox (evt) { 
        dispatchApp({type:"TOGGLE_TODO", title: title})
    }

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
            <br />
        </div>
        )
}
