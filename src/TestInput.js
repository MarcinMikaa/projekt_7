import { useState } from "react";

function TestInput() {
  const [value, setValue] = useState("");

  const getInput = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className="test">
      <input type="text" onChange={getInput}></input>
      <h1>{value}</h1>
    </div>
  );
}

export default TestInput;
