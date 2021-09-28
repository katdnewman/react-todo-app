import React from 'react'

export default function Todo ({ title, description, dateCreated, complete, dateCompleted}) {
    return (
         <div>
            
            <div>Title: {title}</div>
            <div>Description: {description}</div>
            <div>Date created: {dateCreated} </div>
            <div>
                <label for="completed-todo">Completed: </label>
                <input type="checkbox" id="completed-todo" name="completed-todo" />
                
            </div>
            <div>Date Completed: {dateCompleted}</div>
            <br />
        </div>
        )
}
