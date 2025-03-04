import { MdDelete, MdOutlineDone } from "react-icons/md";
import { CgUndo  } from "react-icons/cg";


function ToDoItem({ id, name, date,completed, onDeleteClick, onCompleteClick }) {
  return (
    <div className={`container ${completed ? "completed-task" : ""}`}>
      <div className="row kg-row">
        <div
          className={`col-4 ${completed ? "text-decoration-line-through" : ""}`}
        >
          {name}
        </div>
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
        <div className="col-2">
          <button
            type="button"
            className="btn btn-info kg-btn"
            onClick={() => onCompleteClick(id)}
          >
            {completed ? <>Undo<CgUndo /></> : <>Complete <MdOutlineDone /></>} 
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
