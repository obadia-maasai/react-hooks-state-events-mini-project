import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({ text: "", category: "" });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(newTask);
    setNewTask({ text: "", category: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" placeholder="Task Text" value={newTask.text} onChange={handleInputChange} />
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleInputChange}>
          {/* render <option> elements for each category here */}
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
