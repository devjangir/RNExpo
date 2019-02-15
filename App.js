import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThreeView from './Components/ThreeView';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 2, width: '100%'}}>
          <ThreeView />
        </View>
        <View style={{flex: 2, width: '100%'}}>
          <ThreeView />
        </View>
        <View style={{flex: 2, width: '100%'}}>
          <ThreeView />
        </View>
        <View style={{flex: 2, width: '100%'}}>
          <ThreeView />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
