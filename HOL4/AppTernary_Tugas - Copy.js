import React, {useState} from 'react';
import { Text, TextInput, View, Alert, StyleSheet, Button } from 'react-native';


const AppTernary_Tugas = () => {
    const [nilai,setNilai]=useState();
    // var nilai ="";
    // var lulus = (nilai < 50) ? "Tidak Lulus" : "Lulus";
    
    return (
        <View>
            <Text>Nama Mahasiswa</Text>
            <TextInput placeholder='Write your name' style={styles.input}/>
            <Text>Nilai Mahasiswa</Text>
            <TextInput placeholder='Write your grades' keyboardType='numeric' onChangeText={value => setNilai(value)} style={styles.input}/> 
            <Button title="Submit"
            onPress={() => Alert.alert (nilai < 50 ? 'Tidak Lulus' : 'Lulus') } />
        </View>
        )
    


}
export default AppTernary_Tugas;

const styles = StyleSheet.create({
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
   
    },
   });

