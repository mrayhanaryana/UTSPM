import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';

export const ListKelompok = ({ navigation }) => {
  const kelompok = [
    {"id":0, "value":'Muchammad Irfan Chanif Rusydi',"img":require ('./image/IMG_1560.png'),"nim":1103190001},
    {"id":1, "value":'Muhammad Rayhan Aryana',"img":require('./image/Rayhan.png'),"nim":1103194042},
    {"id":2, "value":'Aura Syafa Aprilia Radim',"img":require('./image/aura.jpg'),"nim":1103194173},
    {"id":3, "value":'Hanifah Martha Ardilah',"img":require('./image/2.png'),"nim":11031944042},
  ]
    return (
        <SafeAreaView style={{ flex: 1}}>
            <Text style={{
                fontSize:28, fontWeight:'bold',color:'#0fff7b',textAlign:'center'
            }}>Pilih Anggota</Text>
            { kelompok.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => navigation.navigate('DetailKelompok', {itemId:item.id})}>
                    <View key={item.id} style={styles.button}>
                        <Text style={styles.buttonText} key={item.id}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            ))
            }
        </SafeAreaView> );
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      paddingBottom:20,
      alignItems: 'center'
    },
    button: {
      marginBottom: 20,
      marginHorizontal:30,
      alignItems: 'center',
      backgroundColor: '#130fff'
    },
    buttonText: {
      textAlign: 'center',
      padding: 10,
      color: 'white',
      fontSize: 20
} 
}); 