import UserBar from "./UserBar";
import TodoList from "./TodoList";

function App() {
  const todos = [
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
  return  (
    <div>
      <UserBar />
    <br/><br/><hr/><br/> 
      {/* <CreateTodo user="Paul" /> */}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
