import "./App.css";
import AppName from "./components/appname";
import AddTodo from "./components/AddTodo";
import React, { useState } from "react";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {


  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
    setTodoItems(newTodoItems)
  };

  const handleDeleteItem = (todoItemID) => {
    const newTodoItems = todoItems.filter((_, index) => index !== todoItemID);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <WelcomeMessage todoItems={todoItems} />
      <ToDoItems todoItems={todoItems} onDeleteClick ={handleDeleteItem} />

    </center>
  );
}

export default App;
