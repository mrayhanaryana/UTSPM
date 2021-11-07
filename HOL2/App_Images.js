import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './AppStyle'

const HelloWorldApp = () => {
return (
    <View style={styles.container}>
        <Text style={styles.text_big}>Hello world!</Text>
        <Text style={styles.text_big}>Hello React Native!</Text>
        <Image source={require('./Image/flutter.png')} style={{width: 300, resizeMode:'contain'}} />
        </View>
    )
}

export default HelloWorldApp;