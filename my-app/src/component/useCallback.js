import React, { useState, useCallback } from 'react';

function File() {
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]); // The dependency when changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default File;
