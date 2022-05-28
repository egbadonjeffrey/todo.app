import "./App.css";
import TodoInput from "./components/todoInput/TodoInput";
import TodoList from "./components/todoList/TodoList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App m-4">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
