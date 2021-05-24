import React from "react";

function List({ items }) {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        return (
          <article key={item.id} className="grocery-item">
            <p className="title">{item.title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                Edit
              </button>
              <button type="button" className="delete-btn">
                Delete
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
