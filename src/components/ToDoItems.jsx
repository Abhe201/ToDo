import React from "react";
import ToDoItem from "./ToDoItem.jsx";

function ToDoItems({ todoItems, onDeleteClick ,onCompleteClick}) {
  return (
    <>
      <div className="item-container">
        {todoItems.map((item, index) => (
          <ToDoItem
            key={index}
            id={index}
            name={item.name}
            date={item.date}
            completed={item.completed}
            onDeleteClick={onDeleteClick}
            onCompleteClick ={onCompleteClick}

          />
        ))}
      </div>
    </>
  );
}

export default ToDoItems;
