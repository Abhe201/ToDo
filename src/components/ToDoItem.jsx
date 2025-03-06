import { MdDelete, MdOutlineDone } from "react-icons/md";
import { CgUndo } from "react-icons/cg";
import { motion } from "framer-motion";

function ToDoItem({
  id,
  name,
  date,
  completed,
  onDeleteClick,
  onCompleteClick,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="container"
    >
      <div className={`container ${completed ? "completed-task" : ""}`}>
        <div className="row kg-row">
          <div
            className={`col-4 ${
              completed ? "text-decoration-line-through" : ""
            }`}
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
              {completed ? (
                <>
                  Undo
                  <CgUndo />
                </>
              ) : (
                <>
                  Complete <MdOutlineDone />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ToDoItem;
