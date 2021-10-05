import React from 'react'

export default function Logout({user, dispatchApp}) {
   return (
     <form onSubmit={evt => {evt.preventDefault(); dispatchApp({type:"LOGOUT"})} }>
        Logged in as: <b>{user}</b>
        <input type="submit" value="Logout" />
     </form>
    )
}
