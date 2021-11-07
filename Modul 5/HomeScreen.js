import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';


import AppHeader from './ScreenUtamaHeader';
import Twitter from './Tweet';
import { Tweet } from './IsiTweet';

// import Twitter from './ScreenUtama';
// import LeftPicture from './LeftPict';


// import { NavigationContainer } from '@react-navigation/native';



const HomeScreen = () => {
    return(
      
          <View>
            <AppHeader/>
               <Twitter />
               
            
            </View>
        
    );
    }



 export default HomeScreen;
