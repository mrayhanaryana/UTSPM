import React  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import NotifScreen from './NotifScreen';
import MailScreen from './MailScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#fffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                    
                }
            }}>

            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>
                        <Image source={{ uri: 'https://img.icons8.com/windows/32/000000/home.png'}} resizeMode='contain' 
                               style={{ width: 30, height: 40, tintColor: focused ? '#00acee' : '#748c94',
                               }}/>
                              
                               </View>

                        ), 
                        }}/>
            <Tab.Screen name="Search" component={SearchScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>
                        <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/search--v1.png'}} resizeMode='contain' 
                               style={{ width: 30, height: 30, tintColor: focused ? '#00acee' : '#748c94',
                               }}/>
                              
                               </View>

                        ), 
                        }}/>
            <Tab.Screen name="Notif" component={NotifScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>
                        <Image source={{ uri: 'https://img.icons8.com/fluency-systems-regular/48/000000/appointment-reminders--v2.png'}} resizeMode='contain' 
                               style={{ width: 30, height: 30, tintColor: focused ? '#00acee' : '#748c94',
                               }}/>
                              
                               </View>

                        ), 
                        }}/>
            <Tab.Screen name="Mail" component={MailScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>
                        <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/new-post.png'}} resizeMode='contain' 
                               style={{ width: 30, height: 30, tintColor: focused ? '#00acee' : '#748c94',
                               }}/>
                              
                               </View>

                        ), 
                        }}/>
        </Tab.Navigator>
 );
 }

const styles = StyleSheet.create({
    shadow : {
        shadowColor: '#ffffff',
        shadowOffset : {
            width: 0,
            height : 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0.35,
        elevation: 5
    }
}) 
export default Tabs;