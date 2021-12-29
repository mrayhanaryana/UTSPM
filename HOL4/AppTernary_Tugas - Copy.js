import React, {useState} from 'react';
import { Text, TextInput, View, Alert, StyleSheet, Button } from 'react-native';
import {SafeAreaView } from 'react-native';


const AppTernary_Tugas = () => {
    const [nilai,setNilai]=useState();
    // var nilai ="";
    // var lulus = (nilai < 50) ? "Tidak Lulus" : "Lulus";
    
    return (

        <SafeAreaView>
         <View>
            <Text>Nama Mahasiswa</Text>
            <TextInput placeholder='Write your name' style={styles.input}/>
            <Text>Nilai Mahasiswa</Text>
            <TextInput placeholder='Write your grades' keyboardType='numeric' onChangeText={value => setNilai(value)} style={styles.input}/> 
            <Button title="Submit" onPress={() => {
                var lulus = (nilai < 50) ? "Tidak Lulus" : "Lulus";
                Alert.alert(
                    'Hasil',
                    'Nama : ' + Nama + '\n' + 'Nilai : ' + nilai + '\n' + 'Status : ' + lulus,
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false},
                );
            }}/>
            {/* this.setState((state) => {
                let lulus = thi(nilai < 50) ? "Tidak Lulus" : "Lulus";
                if lulus = "Tidak Lulus" {
                    return{
                        Alert.alert("Maaf, anda tidak lulus");
                    }
                    // Alert.alert("Maaf, anda tidak lulus");
                }
                else {
                    return {
                        Alert.alert("Selamat, anda lulus");
                    }
                    //  Alert.alert("Selamat, anda lulus");
                }
            }
            let lulus = thi(nilai < 50) ? "Tidak Lulus" : "Lulus";
            if lulus = "Tidak Lulus" {
                Alert.alert("Maaf, anda tidak lulus");
            }
            else {
                Alert.alert("Selamat, anda lulus");
            }
            <Button title="Submit"
            onPress={() =>  } /> */}
        </View>
        </SafeAreaView>
        )
}
export default AppTernary_Tugas;

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
});