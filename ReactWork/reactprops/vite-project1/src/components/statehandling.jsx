import React, { useState } from 'react';

function Statehandling() {
  const [count, setCount] = useState(20);

  function incrementCount() {
    // alert("Hiii");
    setCount(count + 10);
  }

  return (
    <div>
      <h1>Statehandling</h1>
      <h2>Counter Value = {count}</h2>
      <button onClick={incrementCount}>Increment Value</button>
      <button onClick={() => setCount(count - 10)}>Decrease Value</button>
    </div>
  );
}

export default Statehandling;
