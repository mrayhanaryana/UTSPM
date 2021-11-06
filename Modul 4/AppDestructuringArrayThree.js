import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const siswa = ['budi', 'wati', 'iwan'];
const [siswa1, , siswa3] = siswa;
    return (
        <View>
            <Text>Daftar Siswa</Text>
            <Text>{siswa1}</Text>
            <Text>{siswa3}</Text>
        </View>
 )

export default AppDestructuringArrayThree;