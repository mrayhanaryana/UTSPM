import React from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AppHeader = () => {
    return (
        <View style={{height:60, backgroundColor: 'green'}}>
            <Text style={{fontWeight: 'bold',fontSize: 32, textAlign: 'center'}}>INI FORM ISIAN</Text>
        </View>
    );
    }

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
            <AppHeader/>
            <Text>Name</Text>
            <TextInput placeholder='Write your name' style={styles.input}/>
            <Text>Age</Text>
            <TextInput placeholder='Write your age' keyboardType='numeric' style={styles.input}/>
            <Text>Email</Text>
            <TextInput placeholder='Write your email' keyboardType='email-address' style={styles.input}/>
            <Button  title="Save!"  onPress={() => Alert.alert('Data telah disimpan')}/>
        </View>
 ) }
 
export default AppTextInput;