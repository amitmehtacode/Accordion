import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AccordingTwo from './AccordingTwo';

const App = () => {
  return (
    <View style={styles.container}>
      <AccordingTwo />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
