function userReducer (state, action) {
    console.log(state)
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return {
                'username': action.username,
                'access_token': action.access_token
            }
        case 'LOGOUT':
            return {
                'username': undefined,
                'access_token': undefined
            }
        default:
            return state;
    }
}

  function todosReducer (todos, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const newTodo = { 
                _id: action._id,
                title: action.title,
                description: action.description, 
                dateCreated: action.dateCreated,
                author: action.author, 
                complete: false,
                completedOn: undefined
            }
            return [ newTodo, ...todos ] //complete list of todos with new one on top
        case 'TOGGLE_TODO':
            return todos.map( (todo) => 
                {
                    console.log("toggle reducer " + action)
                    if (todo._id === action.id)
                    {
                        return { ...todo, completedOn: action.completedOn, complete: action.complete };
                        // // If currently completed then (checked to unchecked) toggle will uncomplete
                        // if(todo.dateCompleted)
                        // {
                        //     return { ...todo, dateCompleted: "", complete: false };
                        // }
                        // // Else if is not completed, so (unchecked to checked) toggle completes
                        // else
                        // {
                        //     const now = new Date().toString();
                        //     return { ...todo, dateCompleted: now, complete: true };
                        // }

                    }
                    else
                    {
                        return todo;
                    }
                }
            );
        case 'DELETE_TODO':
            console.log("Delete: " + action.id)
            return todos.filter((p) => p._id !== action.id)
            // return todos.filter((todo)=>todo.todoId !== action.todoId)
        case 'FETCH_TODOS':
            //console.log(action.todos[2])
            return action.todos
        default:
           return todos;
    }
  }

  export default function appReducer (appState, action) {
      console.log(action)
    return {
        user: userReducer(appState.user, action),
        todos: todosReducer(appState.todos, action)
    }
}
