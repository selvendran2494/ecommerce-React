import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

//Click Handler Functions
  const addcounter = () => {
    setCounter(counter + 1);
  };
  const reducecounter = () => {
    setCounter(counter - 1);
  };
  const resetcounter = () => {
    setCounter(0);
  };
//Click Handler Functions

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>Counter : {counter}</div>
      <div>
        <button className="btn btn-info" onClick={addcounter}>
          Increment
        </button>
        <button className="btn btn-primary mx-2" onClick={reducecounter}>
          Decrement
        </button>
        <button className="btn btn-primary mx-2" onClick={resetcounter}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
