import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    console.log(counter);
  }) // ✅ runs whenever counter changes

  return (
    <div>
      <div>
        <h2>
          counter = {counter}
        </h2>
      </div>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
    </div>
  );
}

export default Dashboard;
