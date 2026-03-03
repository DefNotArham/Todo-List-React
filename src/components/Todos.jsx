import "./Todos.css";

function Todos({ todos, setTodos }) {
  function checkTodo(id) {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodo);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id != id));
  }

  return (
    <div className="todos-container">
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className={`todo ${todo.completed ? "completed" : ""}`}
          >
            <p className="todo-text">{todo.text}</p>
            <div className="buttons">
              <button onClick={() => checkTodo(todo.id)} className="checkBtn">
                <i className="fa-solid fa-check"></i>
              </button>
              <button
                className="deleteBtn"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
