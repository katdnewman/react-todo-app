function userReducer (user, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return user;
    }
}

  function todosReducer (todos, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const newTodo = { 
                id: action.id,
                title: action.title,
                description: action.description, 
                dateCreated: new Date().toString(),
                author: action.author, 
                complete: false 
            }
            return [ newTodo, ...todos ] //complete list of todos with new one on top
        case 'TOGGLE_TODO':
            return todos.map( (todo) => 
                {
                    if (todo.title === action.title)
                    {
                        // If currently completed then (checked to unchecked) toggle will uncomplete
                        if(todo.dateCompleted)
                        {
                            return { ...todo, dateCompleted: "", completed: false };
                        }
                        // Else if is not completed, so (unchecked to checked) toggle completes
                        else
                        {
                            const now = new Date().toString();
                            return { ...todo, dateCompleted: now, completed: true };
                        }

                    }
                    else
                    {
                        return todo;
                    }
                }
            );
        case 'DELETE_TODO':
            return todos.filter((todo)=>todo.title !== action.title)
        case 'FETCH_TODOS':
            return action.todos
        default:
           return todos;
    }
  }

  export default function appReducer (appState, action) {
    return {
        user: userReducer(appState.user, action),
        todos: todosReducer(appState.todos, action)
    }
}
