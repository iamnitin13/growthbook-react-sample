import { useState } from "react";
import TodoList from "./TodoList";

const MyComponent = () => {
  // State to keep track of the user's preferred theme
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>My Todo App</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Experiment name="Theme" defaultVariantName="Light">
          <Variant name="Light" onActivate={setTheme("light")}>
            <TodoList />
          </Variant>
          <Variant name="Dark" onActivate={setTheme("dark")}>
            <TodoList />
          </Variant>
        </Experiment>
      </main>
    </div>
  );
};

export default MyComponent;
