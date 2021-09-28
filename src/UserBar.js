import React from 'react'
import CreateTodo from './CreateTodo'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar() {
    const user = 'user1' //test logged in ('user1') and logged out ('')
    if (user) {
        return (
            <div>
                <CreateTodo />
                <Logout user={user} />
            </div>
        )
    } else {
        return (
            <>
              <Login />
              <Register />
            </>
        )
    }}
