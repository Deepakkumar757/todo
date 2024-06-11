import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const data = await axios.get("http://localhost:3000");
    setdata(data.data);
  };
  return (
    <div>
      <button
        onClick={async () => {
          const name = prompt("Enter the name");
          console.log(await axios.post("http://localhost:3000", { name }));
          fetch();
        }}
      >
        Add
      </button>
      {data.map((e) => {
        return (
          <>
            <br />
            {e}
          </>
        );
      })}
    </div>
  );
};

export default App;
