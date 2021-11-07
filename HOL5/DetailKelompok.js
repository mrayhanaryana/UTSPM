import * as React from 'react';
import {Text, Button, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export const DetailKelompok = ({ route, navigation }) => {
    const { itemId } = route.params;
    const kelompok = [
        {"id":0, "value":'Muchammad Irfan Chanif Rusydi',"img":require ('./image/IMG_1560.png'),"nim":1103190001},
        {"id":1, "value":'Muhammad Rayhan Aryana',"img":require('./image/Rayhan.png'),"nim":1103194042},
        {"id":2, "value":'Aura Syafa Aprilia Radim',"img":require('./image/aura.jpg'),"nim":1103194173},
        {"id":3, "value":'Hanifah Martha Ardilah',"img":require('./image/2.png'),"nim":11031944042},
    ];
      const selectedKelompok = kelompok[itemId]
      return (
        <SafeAreaView style={{ flex: 1 }}>
        <Text style={{alignSelf:'center'}}>Detail Anggota</Text>
        <Text>ID Anggota : {selectedKelompok.id}</Text>
        <Text>Nama Anggota : {selectedKelompok.value}</Text>
        <Text>NIM : {selectedKelompok.nim}</Text>
        <Image source={selectedKelompok.img} style={{width: 400, height: 200,resizeMode:'contain'}} />
        <View style={styles.tombol}>
        <Button style={styles.bottom} title="Back" onPress={() => navigation.goBack()}/>
        </View>
    </SafeAreaView> );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 8,
        position:'absolute',
        bottom:0,
        },
    button: {
        backgroundColor: '#7a42f4',
    },
    });  
export default DetailKelompok;