import React from "react";
import Counter, { ALERT_COLOR, SUCCESS_COLOR } from "./Counter";
const App = () => {
  return (
    <div>
      <h1>App Component Here!!!!</h1>

      <Counter teenCrush="Nic Jonas" />
      <Counter teenCrush="Justin"/>
      <Counter teenCrush="Da Rock"/>
    </div>
  );
};

export default App;