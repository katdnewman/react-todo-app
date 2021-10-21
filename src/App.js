import UserBar from "./UserBar";
import TodoList from "./TodoList";
import {useReducer} from 'react';
import appReducer from './reducers';
import { StateContext } from './Contexts'


function App() {
  const initialTodos = [
    {
      title: "Laundry",
      description: "wash and dry",
      dateCreated: "9-28-21",
      complete: false,
      dateCompleted: ""
    },
    {
      title: "Dishes",
      description: "wash and dry",
      dateCreated: "9-28-21",
      complete: false,
      dateCompleted: ""
    }
  ]

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: initialTodos })

  const {user, todos} = state;

  return  (
    <div>
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <UserBar user={user} dispatchApp={dispatch} />
        <br/><br/><hr/><br/> 
        <TodoList todos={todos} dispatchApp={dispatch} />
      </StateContext.Provider>
    </div>
  );
}

export default App;
