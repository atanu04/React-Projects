import React, { useState } from "react";
import Alert from "./Components/Alert";
import List from "./Components/List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditng] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    msg: "Alert",
    type: "success",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
    } else if (name && isEditing) {
      //edit
    } else {
      //alert
      //add item
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }

    console.log("submit");
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert && <Alert {...alert} />}
        <h3>Grocery</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eggs"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button className="clear-btn" onClick={() => setList([])}>
            clear item
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
