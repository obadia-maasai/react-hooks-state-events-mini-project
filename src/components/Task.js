import React from "react";

function Task({ task }) {
  return (
    <div className="Task">
      <p>{task.text}</p>
      <p>Category: {task.category}</p>
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
