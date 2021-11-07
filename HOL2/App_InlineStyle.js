import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontWeight: 'bold', fontSize: 32}}>Hello world!</Text>
    </View>
    )
}

export default HelloWorldApp;