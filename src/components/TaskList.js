import React from "react";
import Task from "./Task"; // Import the Task component

function TaskList({ task }) {
  return (
    <div className="tasks">
      {/* Display a list of tasks using the Task component */}
      {task.map((task, index) => (
        <Task key={index} task={task} /> // Render each task using the Task component
      ))}
    </div>
  );
}

export default TaskList;
