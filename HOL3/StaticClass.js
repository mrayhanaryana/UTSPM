import React from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet, Alert } from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

function _onPressButton() {
    Alert.alert('Data telah disimpan');
}
    
const StaticClass = () => {
    return ( 
    <View>
        <Text>Name</Text> 
        <TextInput placeholder='Write your name' style={styles.input}/>
        <Text>Age</Text>
        <TextInput placeholder='Write your age' keyboardType='numeric' style={styles.input}/>
        <Text>Email</Text> 
        <TextInput placeholder='Write your email' keyboardType='email-address' style={styles.input}/>
        <Button title="Save!" onPress={_onPressButton}/>
    </View> ) 
}

export default StaticClass;