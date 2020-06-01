/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if(count === 0) return;
    setCount(count - 1);
  }

  return (
      <View style={styles.screen}>
          <Text style={{...styles.textStyle}} onPress={increment}>
            Increment
          </Text>
          <Text style={{...styles.textStyle}}>
            {count}
          </Text>
          <Text style={{...styles.textStyle}} onPress={decrement}>
            Decrement
          </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
     backgroundColor: "grey",
     flex: 1,
     alignItems: "center",
     flexDirection: "row",
     paddingHorizontal: 20,
     justifyContent: "space-between"
  },
  textStyle: {
    fontSize: 25,
    color: "white"
  }
});

export default App;
