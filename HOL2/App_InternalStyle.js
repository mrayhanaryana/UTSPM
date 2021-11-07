import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text_big: {
    fontWeight: 'bold', fontSize: 23
},
    
container: {
    flex: 1, justifyContent: "center", alignItems: "center"
    }
})

const HelloWorldApp = () => {
return (
    <View style={styles.container}>
        <Text style={styles.text_big}>Hello world!</Text>
        <Text style={styles.text_big}>Hello React Native!</Text>
    </View>
    )
}
export default HelloWorldApp;