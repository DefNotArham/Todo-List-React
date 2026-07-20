import { useEffect, useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";

const STORAGE_KEY = "todos";

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function App() {
  const [todos, setTodos] = useState(loadTodos);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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
