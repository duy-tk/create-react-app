import React, { useState, useEffect } from 'react';

function File() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.title = `Count: ${count}`;
    return () => {
      document.title = 'React App'; 
    };
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
    setMessage('Count is incremented!');
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Message: {message}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default File;
