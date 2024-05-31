import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseHandle = () => {
    if (counter != 4) setCounter(counter + 1);
    else setCounter(0);
  };

  const decreaseHandle = () => {
    if (counter != 0) setCounter(counter - 1);
    else setCounter(4);
  };

  return (
    <div>
      <h1 className={"counter_" + counter}>{counter}</h1>
      <button onClick={increaseHandle}>+</button>
      <button onClick={decreaseHandle}>-</button>
    </div>
  );
}
