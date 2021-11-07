import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text,Button } from 'react-native';
import { ListKelompok } from './ListKelompok';
import { DetailKelompok } from './DetailKelompok';

const HomeScreen =({ navigation:{navigate} }) =>{
    return(
        <SafeAreaView style={{
            flex:1,alignItems:'center'
        }}>
            <Text style={{fontSize:20, marginTop:10}}>HomeScreen</Text>
            <Text style={{fontSize:20, marginTop:20, marginBottom:20}}>Selamat Datang Di App Kelompok kami</Text>
            <Button title="List Kelompok" onPress={() => navigate('ListKelompok')}/>
        </SafeAreaView>
    );
}
// const AboutPage =({ navigation:{navigate} }) =>{
//     return(
//         <SafeAreaView style={{
//             flex:1,alignItems:'center', justifyContent:'center'
//         }}>
//             <Text>AboutPage</Text>
//             <Button title="List Anggota" onPress={() => navigate('ListAnggota')}/>
//         </SafeAreaView>
//     );
// }
const Stack = createNativeStackNavigator();

const AppKelompok = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:true}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ListKelompok" component={ListKelompok} options={{ title:'List Anggota Kelompok' }}/>
        <Stack.Screen name="DetailKelompok" component={DetailKelompok} options={{ title:'Movie Detail' }}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppKelompok;