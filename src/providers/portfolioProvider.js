import React, { useState } from 'react';

export const PortfolioContext = React.createContext({
  portfolio: null,
  setPortfolio: () => { },
  refreshPortolio: () => { }
});

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);

  return (
    <PortfolioContext.Provider value={{
      portfolio,
      setPortfolio,
      refreshPortolio: () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(res => setPortfolio(res))
          .catch(console.error);
      }
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};