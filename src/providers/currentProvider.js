import React, { useState } from 'react';


export const CurrentContext = React.createContext({
  current: null,
  setCurrent: () => { }
});

export const CurrentProvider = ({ children }) => {
  const [current, setCurrent] = useState(null);

  return (
    <CurrentContext.Provider value={{
      current,
      setCurrent
    }}>
      {children}
    </CurrentContext.Provider>
  );
};