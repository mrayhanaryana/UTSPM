import React from 'react';
import { Text, View, Image } from 'react-native';
import {AppHeader, AppContent} from './AppCustomComponentsClass'

const AppClass = () => {
    return (
    <View>
        <AppHeader/>
        <AppContent/>
    </View>
  )
 }
export default AppClass;