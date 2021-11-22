import 'bootstrap/dist/css/bootstrap.min.css'


import React, {useState, useReducer, useEffect} from 'react';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';

import { Container } from 'react-bootstrap';

import appReducer from './reducers';


import { ThemeContext, StateContext } from './Contexts';
import CreateTodo from './CreateTodo';
import TodoPage from './pages/TodoPage';
import HeaderBar from './pages/HeaderBar';
import HomePage from './pages/HomePage';
import Users from './pages/Users';
import UserTodos from './pages/UserTodos';



function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: {}, todos: [] })

  const {user} = state;

//   const [ theme, setTheme ] = useState({
//     primaryColor: 'deepskyblue',
//     secondaryColor: 'coral'
//  })

 const routes = mount({
  '/': route({ view: <HomePage /> }),
  '/users':route({view: <Users/>}),
  '/users/:userid':route({view:<UserTodos/>}),
  '/todo/create':route({ view: <CreateTodo /> }),
  '/todo/:id': route(req => {
      return { view: <TodoPage id={req.params.id} /> }
  }),
})

// const routes = mount({
//   '/': route({ view: <HomePage /> }),
//   '/post/create':route({ view: <CreateTodo /> })
// })

  return (
    <div>
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          <Router routes={routes}>
            <Container>
                <HeaderBar/>
                <hr />
                <View />
            </Container>
            </Router>
        </StateContext.Provider>
    </div>
  )
}

export default App;
