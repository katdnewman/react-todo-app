import React, {useContext} from 'react'
import CreateTodo from './CreateTodo'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import { StateContext } from './Contexts'

export default function UserBar() {

    const {state} = useContext(StateContext)
    const {user} = state;

    //TODO state.test?
    if (user) {
        return (
            <div>

                {user && <CreateTodo /> }
                return <Logout/>
            </div>
        )
    } else {
        return (
            <>
            <Login/>
            <Register/>
            </>
        )
    }
}
