import UserBar from "./UserBar";
import TodoList from "./TodoList";
import {useReducer} from 'react';
import appReducer from './reducers';

function App() {
  const initialTodos = [
    {
      title: "Laundry",
      description: "wash and dry",
      dateCreated: "9-28-21",
      complete: "complete",
      dateCompleted: "9-28-21"
    },
    {
      title: "Dishes",
      description: "wash and dry",
      dateCreated: "9-28-21",
      complete: "complete",
      dateCompleted: "9-28-21"
    }
  ]

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: initialTodos })

  const {user, todos} = state;

  return  (
    <div>
      <UserBar user={user} dispatchUser={dispatch} />
    <br/><br/><hr/><br/> 
      {/* <CreateTodo user="Paul" /> */}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
