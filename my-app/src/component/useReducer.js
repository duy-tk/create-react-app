import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function File() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const incrementCount = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrementCount = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default File;
