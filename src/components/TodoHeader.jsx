import "./TodoHeader.css";

function TodoHeader({ todos, completedTodo }) {
  return (
    <div className="header-container">
      <h1>Todo List</h1>
      <div className="line"></div>
      <div className="todoInfo">
        <p>
          <span>Total Todos:</span> {todos.length}
        </p>
        <p>
          <span>Completed Todos:</span> {completedTodo.length}
        </p>
      </div>
    </div>
  );
}
export default TodoHeader;
