import React, { useState } from 'react';

export const FeedContext = React.createContext({
  feed: null,
  setFeed: () => { },
  refreshFeed: () => { },
});

export const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState([]);

  return (
    <FeedContext.Provider value={{
      feed,
      setFeed,
      refreshFeed: () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(res => setFeed(res))
          .catch(console.error);
      },
    }}>
      {children}
    </FeedContext.Provider>
  )
}

