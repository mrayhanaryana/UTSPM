import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native';

const AppDestructuringArray = () => {
  const siswa = ['budi','hanifah', 'wati', 'iwan'];
  const [siswa1, siswa2 , siswa3, siswa4] = siswa;
     return (
        <SafeAreaView>
        <Text>Daftar Siswa</Text>
        <Text>{siswa1}</Text>
        <Text>{siswa2}</Text>
        <Text>{siswa3}</Text>
        </SafeAreaView> 
    );
}
export default AppDestructuringArray;