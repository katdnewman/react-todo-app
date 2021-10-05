import React from 'react'
import CreateTodo from './CreateTodo'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar({user, dispatchApp}) {

    if (user) {
        return (
            <div>
                {/* // user={user} dispatch={dispatch} from App.js */}
                <CreateTodo user={user} dispatchApp={dispatchApp}/>
                return <Logout user={user} dispatchApp={dispatchApp} />
            </div>
        )
    } else {
        return (
            <>
            <Login dispatchApp={dispatchApp} />
            <Register dispatchApp={dispatchApp} />
            </>
        )
    }
}
