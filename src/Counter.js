import React, { useState } from "react";

const Counter = (props) => {

  console.log(props);
  const {teenCrush, yo, notinprops } = props;

  const [count, setCount] = useState(0);
  const increment = () => {
    console.log("clicked")
    setCount(count + 1)
  };
  return (
    <div>
      <h1>{teenCrush}: {count}</h1>
      <button onClick={increment}>add</button>
      <button onClick={() => setCount(count - 1)}>minus</button>
    </div>
  );
};

export const ALERT_COLOR = "red";
export const SUCCESS_COLOR = "green";

export default Counter;