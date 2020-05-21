import React, { useState } from 'react';

export const GenreContext = React.createContext(null);

export const GenreProvider = ({ children }) => {
  const [genre, setGenre] = useState('All');

  return (
    <GenreContext.Provider value={{ genre, setGenre }}>
      {children}
    </GenreContext.Provider>
  );
};