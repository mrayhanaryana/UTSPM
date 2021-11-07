import React from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

const AppTextInput = () => {
    return (
        <View>
        <Text>Name</Text>
        <TextInput placeholder='Write your name' style={styles.input}/>
        <Text>Age</Text>
        <TextInput placeholder='Write your age' keyboardType='numeric' style={styles.input}/>
        <Text>Email</Text>
        <TextInput placeholder='Write your email' keyboardType='email-address' style={styles.input}/>
        <Button title="Save"/>
        </View>
     ) 
}

export default AppTextInput;