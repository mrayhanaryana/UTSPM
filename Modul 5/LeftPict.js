import React from 'react';
import { Image, StyleSheet } from 'react-native';


const LeftPicture = () => {
    return(
        <Image
        source={require('./image/jerome-polin.png')}
        style={{
        width: 60,
        height: 60,
        borderRadius: 50,
        width: 48, height: 48, marginLeft: 20, 
    }}
  />
    )
}

export default LeftPicture;
// const styles = StyleSheet.create({
    
//     container: {
//     justifyContent: "center", 
//     alignItems: "center",
    
//     }
// })