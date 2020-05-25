import React, { useState } from 'react';
import {
  StyleSheet,
  Button
} from 'react-native';

export const LibraryToggler = () => {
  const [saved, setSaved] = useState();

  return saved ?
    <Button
      style={styles.remove}
      title='Remove from Library'
      onPress={() => {
        fetch('http://192.168.1.10:4000/mobile/test')
          .then(res => res.json())
          .then(res => {
            setSaved(false);
            console.log(res);
          })
          .catch(console.error)
      }}
    />
    : <Button
      style={styles.add}
      title='Add to Library'
      onPress={() => {
        fetch('http://192.168.1.10:4000/mobile/test')
          .then(res => res.json())
          .then(res => {
            setSaved(true);
            console.log(res);
          })
          .catch(console.error)
      }}
    />
};

const styles = StyleSheet.create({
  remove: {

  },
  add: {

  }
});