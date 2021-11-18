import React, {useContext, useState} from 'react'
import CreateTodo from './CreateTodo'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import { StateContext } from './Contexts'
import {Button} from 'react-bootstrap'

export default function UserBar() {

    const Logout = React.lazy(() => import('./Logout'))
    const {state} = useContext(StateContext)
  
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    //TODO state.test?
    if (state.user) {
        return <Logout />
    } else {
        return (
            <div className="justify-content-end">
                <Button variant="link" onClick={(e) => setShowLogin(true)}>
                    Login
                </Button>
                <Login show={showLogin} handleClose={() => setShowLogin(false)} />
                <Button variant="link" onClick={(e) => setShowRegister(true)}>
                    Register
                </Button>
                <Register show={showRegister} handleClose={() => setShowRegister(false)} />
            </div>
        )
    }
}
