import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LeftPicture from './LeftPict'
import PostTweet from './IsiTweet';



const Twitter = () => {
    return(
        <View style={styles.container}>
            <LeftPicture/>
            <PostTweet/>
               
        </View>
    )
 }

 

 const styles = StyleSheet.create({
   container: {
     width: '100%',
     marginBottom: -170,
     flexDirection: 'row',
     alignItems: "center",
     padding: 20,
     borderBottomWidth: 1,
     marginLeft: -15,
     borderColor: 'lightgrey',
   }
 });
 



export default Twitter;

