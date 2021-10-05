import React from 'react'
import CreateTodo from './CreateTodo'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar({user, dispatchUser}) {

    if (user) {
        return (
            <div>
                <CreateTodo />
                return <Logout user={user} dispatchUser={dispatchUser} />
            </div>
        )
    } else {
        return (
            <>
            <Login dispatchUser={dispatchUser} />
            <Register dispatchUser={dispatchUser} />
            </>
        )
    }
}
