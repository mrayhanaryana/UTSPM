import React from 'react';
import { Text, View } from 'react-native';
import styles from './AppStyle'

const HelloWorldApp = () => {
 return (
    <View style={styles.container}>
    <Text style={styles.text_big}>Hello world!</Text>
    <Text style={styles.text_big}>Hello React Native!</Text>
 </View>
 
  ) 
}
export default HelloWorldApp;