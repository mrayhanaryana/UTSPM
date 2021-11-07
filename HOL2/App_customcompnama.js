import React from 'react';
import { Text, View, Image } from 'react-native';

const AppHeader = () => {
return (
    <View style={{height:60, backgroundColor: 'gray'}}>
        <Text style={{fontWeight: 'bold',fontSize: 32, textAlign: 'center'}}>M Rayhan A</Text>
    </View>
);
}

const AppContent = () => {
return (
    <View>
        <Text style={{fontWeight: 'bold',fontSize: 23, textAlign: 'center'}}>1103194042</Text>
        <Image source={require('./Image/Rayhan.png')} style={{width: 400, height:450, resizeMode:'contain'}} />
    </View>
);
}

const HelloWorldApp = () => {
return (
    <View>
        <AppHeader/>
        <AppContent/>
    </View>
)
}
export default HelloWorldApp;