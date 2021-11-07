import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text,Button } from 'react-native';
import { ListScreen } from './Screen3';
import { DetailScreen } from './Screen4';

const HomeScreen =({ navigation:{navigate} }) =>{
    return(
        <SafeAreaView style={{
            flex:1,alignItems:'center', justifyContent:'center'
        }}>
            <Text>HomeScreen</Text>
            <Button title="About Page" onPress={() => navigate('AboutPage')}/>
        </SafeAreaView>
    );
}
const AboutPage =({ navigation:{navigate} }) =>{
    return(
        <SafeAreaView style={{
            flex:1,alignItems:'center', justifyContent:'center'
        }}>
            <Text>AboutPage</Text>
            <Button title="MovieList" onPress={() => navigate('MovieList')}/>
        </SafeAreaView>
    );
}
const Stack = createNativeStackNavigator();

const AppHome = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:true}} >
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Home', headerStyle:{backgroundColor:'blue'}, headerTintColor:'white' }}/>
        <Stack.Screen name="AboutPage" component={AboutPage}/>
        <Stack.Screen name="MovieList" component={ListScreen} options={{ title:'Movie List' }}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title:'Movie Detail' }}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}
    export default AppHome;