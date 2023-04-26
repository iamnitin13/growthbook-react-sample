import React from "react";

const TodoList = () => {
  // State to keep track of the user's todo list
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const text = prompt("Enter a new todo item:");
    if (text) {
      setTodos([...todos, text]);
    }
  }

  return (
    <div className="todo-list">
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
