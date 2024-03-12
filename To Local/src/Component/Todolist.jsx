import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import { useState } from "react";
// ... (other imports)

const Todolist = ({ todos, deleteTodo, markAsDone, editTodo }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [completedTasks, setCompletedTasks] = useState({});

 const handleDelete = (index) => {
  // Only delete from the application state, not local storage
  deleteTodo(index);
  setEditingIndex(null);
};
  const handleAction = (index) => {
    if (editingIndex === index) {
      // If already editing, save changes
      if (editText.trim() !== "") {
        editTodo(index, editText);
      }
      setEditingIndex(null);
    } else {
      // Toggle completion status
      const isDone = completedTasks[index] || false;
      markAsDone(index, !isDone);
      setCompletedTasks((prevCompletedTasks) => ({
        ...prevCompletedTasks,
        [index]: !isDone,
      }));
    }
  };

  const handleEditToggle = (index, text) => {
    // Start or finish editing
    if (editingIndex === index) {
      setEditingIndex(null);
    } else {
      setEditingIndex(index);
      setEditText(text);
    }
  };

  const handleEditInputChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div className="todos">
      {todos.map((todoItem, index) => (
        <li
          className={`todos__single ${completedTasks[index] ? "done" : ""}`}
          key={index}
        >
          {editingIndex === index ? (
            <input
              type="text"
              value={editText}
              onChange={handleEditInputChange}
              onBlur={() => handleAction(index)}
            />
          ) : (
            <span
              className="todos_single--text"
              onClick={() => handleEditToggle(index, todoItem.text)}
            >
              {todoItem.text}
            </span>
          )}

          <span className="icon" onClick={() => handleDelete(index)}>
            <AiFillDelete />
          </span>
          <span
            className="icon"
            onClick={() => handleEditToggle(index, todoItem.text)}
          >
            <AiFillEdit />
          </span>
          <span className="icon" onClick={() => handleAction(index)}>
            <MdDone />
          </span>
        </li>
      ))}
    </div>
  );
};

export default Todolist;
