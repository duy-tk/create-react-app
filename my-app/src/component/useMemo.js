import React, { useState, useMemo } from 'react';

function File() {
  const [count, setCount] = useState(0);
  const generateEvenNumbers = (count) => {
    console.log('Generating even numbers...');
    const evenNumbers = [];
    for (let i = 1; i <= count; i++) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  };

  const evenNumbers = useMemo(() => generateEvenNumbers(count), [count]);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Even Numbers: {evenNumbers.join(', ')}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default File;
