import React, { useState } from 'react';

export const LibraryContext = React.createContext({
  library: null,
  setLibrary: () => { },
  refreshLibrary: () => { }
});

export const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState([]);

  return (
    <LibraryContext.Provider value={{
      library,
      setLibrary,
      refreshLibrary: () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(res => setLibrary(res))
          .catch(console.error);
      }
    }}>
      {children}
    </LibraryContext.Provider>
  )
}