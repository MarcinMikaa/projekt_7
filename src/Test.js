import { useState } from "react";
import "./Test.css";

function Test() {
  const [counter, setCounter] = useState(0);

  const Plus = () => {
    setCounter(counter + 1);
  };
  const Minus = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="test">
      <button onClick={Minus}>-</button> {counter} <button onClick={Plus}>+</button>
    </div>
  );
}

export default Test;
