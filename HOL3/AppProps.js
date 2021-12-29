import React from 'react';
import { Text, View, Image } from 'react-native';
import {AppHeader, AppContent, AppFooter} from './CustomComponents'

const AppProps = () => {
    return ( 
        <View> 
            <AppHeader/>
            <AppContent/>
            <AppFooter NIM="1103194042"/>
        </View> 
        ) }
export default AppProps;