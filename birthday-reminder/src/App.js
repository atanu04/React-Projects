import ListComp from "./Components/ListComp";
import data from "./data";
import React from "react";
function App() {
  const [list, setList] = React.useState(data);

  return (
    <div className="App">
      <h1>Birthday reminder</h1>
      <ListComp list={list} />
    </div>
  );
}

export default App;
