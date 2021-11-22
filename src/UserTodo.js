import React, {useContext, useEffect} from 'react'

export default function UserTodo ({ title, description, dateCreated, completedOn}) {

    return (
         <div>
            
            <div>Title: {title}</div>
            <div>Description: {description}</div>
            <div>Date created: {dateCreated} </div>
            <div>Date Completed: {completedOn}</div>
            <br /><br />
        </div>
        )
}
