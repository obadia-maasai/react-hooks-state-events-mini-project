import React from "react";

function CategoryFilter({ categories, setSelectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button onClick={() => setSelectedCategory("ALL")}>ALL</button>
      {categories.map((category) => (
        <button key={category} onClick={() => setSelectedCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;



