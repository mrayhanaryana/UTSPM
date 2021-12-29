import React from 'react';
import { Text, View, Image } from 'react-native';

export const AppHeader = () => {
    return (
        <View style={{height:60, backgroundColor: 'green'}}> 
        <Text style={{fontWeight: 'bold',fontSize: 32 ,textAlign: 'center'}}>Profil Mahasiswa</Text>
        </View>
        );
}

export const AppContent = () => {
    return ( 
    <View>
        <Text style={{fontWeight: 'bold',fontSize: 23 ,textAlign: 'center'}}>MOHAMMAD RAYHAN ARYANA</Text> 
        <Image source={require('./image/Rayhan.png')}
        style={{width: 400, height:350, resizeMode:'contain'}} />
    </View>
    );
}

export const AppFooter = (props) => {
    return ( 
        <View style={{height:40, backgroundColor: 'gray'}}> 
        <Text style={{fontWeight: 'bold',fontSize: 23, color:'white' ,textAlign: 'center'}}>{props.NIM}</Text>
</View>
    );
}   