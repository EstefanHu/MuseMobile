import React, { useState } from 'react';

export const GenreContext = React.createContext(null);

export const GenreProvider = ({ children }) => {
  const [genre, setGenre] = useState(null);

  return (
    <GenreContext value={{ genre, setGenre }}>
      {children}
    </GenreContext>
  );
};