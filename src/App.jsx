import "./App.css";
import AppName from "./components/appname";
import AddTodo from "./components/AddTodo";
import React, { useState ,useEffect} from "react";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, date: itemDueDate, completed: false },
    ];
    setTodoItems(newTodoItems);
  };
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all tasks?")) {
      setTodoItems([]);
    }
  };

  const handleDeleteItem = (todoItemID) => {
    const newTodoItems = todoItems.filter((_, index) => index !== todoItemID);
    setTodoItems(newTodoItems);
  };

  const handleCompleteItem = (todoItemID) => {
    const newTodoItems = todoItems.map((item, index) => {
      if (index === todoItemID) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoItems(newTodoItems);
  };


  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <button onClick={handleToggleDarkMode} className="dark-toggle-btn">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} onClearAll={handleClearAll} />
        <WelcomeMessage todoItems={todoItems} />
        <ToDoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
          onCompleteClick={handleCompleteItem}
        />
      </center>
      </>
  );
}

export default App;
