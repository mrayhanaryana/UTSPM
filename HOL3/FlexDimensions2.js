import React from 'react';
import { View } from 'react-native';

    const AppFlexDimensions2 = () => {
    return ( 
        <View style={{flex:1}}> 
        <View style={{flex:1, backgroundColor: 'powderblue' }} />
        <View style={{flex:1, backgroundColor: 'skyblue' }} />
        <View style={{flex:1, backgroundColor: 'steelblue' }} />
        </View>
    );
};

export default AppFlexDimensions2;