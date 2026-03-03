import { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const completedTodo = todos.filter((todo) => {
    return todo.completed;
  });

  return (
    <div className="App">
      <TodoHeader todos={todos} completedTodo={completedTodo} />
      <TodoInput todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
