import { MdDelete } from "react-icons/md";


function ToDoItem({ id, name, date, onDeleteClick }) {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => onDeleteClick(id)}
          >
            Delete <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
