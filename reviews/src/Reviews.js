import React, { useState } from "react";
import people from "./data";
import { HiEmojiHappy } from "react-icons/hi";
import { ImEvil2 } from "react-icons/im";
function Reviews() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  return (
    <div className="reviews">
      <div className="imageContainer">
        <img src={image} alt="hdhd" className="pImage" />
        <ImEvil2 className="icon" />
      </div>

      <h3>{name}</h3>
      <h5>{job}</h5>
      <p>{text}</p>
    </div>
  );
}

export default Reviews;
