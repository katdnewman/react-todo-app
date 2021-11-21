import React, { useContext } from 'react'
import { StateContext } from '../Contexts';

export default function Logout() {
   const {state, dispatch} = useContext(StateContext)
   const {user} = state;
   console.log("Logout " + user.username);
   return (
     <form onSubmit={evt => {evt.preventDefault(); dispatch({type:"LOGOUT"})} }>
        Logged in as: <b>{user.username}</b>
        <input type="submit" value="Logout" />
     </form>
    )
}
