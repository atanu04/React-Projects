import React from "react";

function Tour({ id, image, info, name, price }) {
  return (
    <article className="Tour">
      <div className="tourName">
        <h3>{name}</h3>
      </div>
      <div className="tourInfo">
        <p>{info}</p>
      </div>
      <div className="tourImage">
        <img src={image} alt="tour" />
      </div>
      <div className="tourPrice">{price}</div>
    </article>
  );
}

export default Tour;
