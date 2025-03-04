import React from "react";
import ToDoItem from "./ToDoItem.jsx";

function ToDoItems({ todoItems, onDeleteClick }) {
  return (
    <>
      <div className="item-container">
        {todoItems.map((item, index) => (
          <ToDoItem
            key={index}
            id={index}
            name={item.name}
            date={item.date}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
}

export default ToDoItems;
