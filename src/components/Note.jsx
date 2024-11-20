import React from "react";
import notes from "../notes";

const ti = notes.map((items) => {
  return items;
});
// console.log(ti[0].title);
function Note() {
  return ti.map((items) => {
    return (
      <div className="note" key={items.key}>
        <h1>{items.title}</h1>
        <p>{items.content}</p>
      </div>
    );
  });
}
// console.log(notes);
export default Note;
