import React, { useState, useEffect } from "react";
import Loding from "./Components/Loding";
import Tours from "./Components/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loding, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loding) {
    return (
      <div>
        <Loding />
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} />
    </div>
  );
}

export default App;
