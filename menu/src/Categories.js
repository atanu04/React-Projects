import React from "react";

function Categories({ categories }) {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return <button className="btn">{category}</button>;
      })}
    </div>
  );
}

export default Categories;
