import React from 'react';
import { View } from 'react-native';
    const AppFlexDirection = () => {
        return ( <View style={{flex:1, flexDirection:'column'}}> 
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
            <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
        </View>
    );
};
export default AppFlexDirection;