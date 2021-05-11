import React from "react";

import PersonComp from "./PersonComp";
function ListComp({ list }) {
  return (
    <>
      {list.map((person) => {
        return (
          <article key={person.id}>
            <PersonComp person={person} />
          </article>
        );
      })}
    </>
  );
}
export default ListComp;
