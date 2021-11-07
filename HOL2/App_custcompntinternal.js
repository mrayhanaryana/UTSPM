import React from 'react';
import { Text, View, Image } from 'react-native';

const AppHeader = () => {
return (
    <View style={{height:60, backgroundColor: 'gray'}}>
        <Text style={{fontWeight: 'bold',fontSize: 32}}>Application Title</Text>
    </View>
);
}

const AppContent = () => {
return (
    <View>
        <Text style={{fontWeight: 'bold',fontSize: 23}}>Content</Text>
        <Image source={require('./Image/flutter.png')} style={{width: 300, height:50, resizeMode:'contain'}} />
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