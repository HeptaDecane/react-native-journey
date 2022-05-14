import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const App = () => {
  return <React.Fragment>
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Hello World !</Text>
    </View>
  </React.Fragment>
};

export default App;
