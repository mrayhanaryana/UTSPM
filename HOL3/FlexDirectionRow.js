import React from 'react';
import { View } from 'react-native';
    const AppFlexDirectionRow = () => {
        return ( 
        <View style={{flex:1, flexDirection:'row'}}> 
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
            <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
        </View>
    );
};
export default AppFlexDirectionRow;

const styles = StyleSheet.create({
    box: {
    width: 50,
    height: 50,
    },
    countainer: {
    margin:10,
    flexDirection:'row'
    },
    subTitle: {
    marginLeft: 10,
    marginTop:10,
    fontSize: 20,
    fontWeight:'bold'
    }
    })