import { useState } from "react";
import "./TodoInput.css";

function TodoInput({ todos, setTodos }) {
  const [inputText, setInputText] = useState();

  function addTodo() {
    if (inputText === "") return;
    const newTodos = [
      ...todos,
      {
        id: crypto.randomUUID(),
        text: inputText,
        completed: false,
      },
    ];

    setTodos(newTodos);
    setInputText("");
  }

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addTodo();
    }
  }

  return (
    <div className="todoInput">
      <input
        placeholder="Add a Todo..."
        type="text"
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
