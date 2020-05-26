import React, { useState } from 'react';


export const CurrentContext = React.createContext({

});

export const CurrentProvider = ({ children }) => {
  const [current, setCurrent] = useState({});

  return (
    <CurrentContext.Provider value={{
      current,
      setCurrent
    }}>
      {children}
    </CurrentContext.Provider>
  );
};