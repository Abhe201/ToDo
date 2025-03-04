import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { AiOutlineClear } from "react-icons/ai";

function AddTodo({ onNewItem, onClearAll }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };
  const handleAddClick = () => {
    if (!todoName || !dueDate) {
      alert("Please fill out both the ToDo name and due date first!");
      return;
    }
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            value={todoName}
            placeholder="Enter ToDo here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
            onFocus={(e) => e.target.showPicker()}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-btn"
            onClick={handleAddClick}
            disabled={!todoName || !dueDate}
          >
            Add <IoMdAddCircle />
          </button>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => onClearAll()}
          >
            Clear All <AiOutlineClear />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
