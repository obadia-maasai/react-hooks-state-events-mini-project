import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [tasks, setTasks] = useState(TASKS);

  const handleTaskFormSubmit = (newTask) => {
    // Handle adding a new task to the tasks state
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList task={tasks} />
    </div>
  );
}

export default App;
