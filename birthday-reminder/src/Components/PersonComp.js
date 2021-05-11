import React from "react";

function PersonComp({ person }) {
  return (
    <div className="person">
      <img src={person.image} alt="Image"></img>
      <h4>{person.name}</h4>
      <p>{person.age}</p>
    </div>
  );
}
export default PersonComp;
