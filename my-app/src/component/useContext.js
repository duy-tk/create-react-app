import React, { useContext } from 'react';

const MyContext = React.createContext();

function MyContextProvider({ children }) {
  const value = "Hello from Context!";

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
}

function File() {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <p>Value from Context: {contextValue}</p>
    </div>
  );
}

export { MyContextProvider, File };
