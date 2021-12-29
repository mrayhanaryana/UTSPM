import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';


const AppNotif = () => {
    return(
        <View style={{flex:1, flexDirection:'column'}}>
            <View style={{ height:70, backgroundColor: 'white' }}> 
            {/* <View style={{ flex: 1, backgroundColor: 'white' }}> */}

                      
                    <Image style={{ width: 40, height: 40, marginLeft: 20, marginTop: 15, borderRadius: 50, borderBottomWidth: 0, alignItems: "center" }} source={require('./image/brian-dyson.png')} />
                    <Image style={{ width: 25, height: 25, marginLeft: 348, marginTop: -35,  marginRight: -20, tintColor:'#00acee'}} source={ {uri: 'https://img.icons8.com/ios/50/000000/settings.png'}} />
                    <Text style={{fontWeight: '400', fontSize: 23, marginLeft: 40, padding: 40, marginTop: -67}}>Notifications</Text>
            </View>
            
            

             </View>
             

    );
}



export default AppNotif;


const styles = StyleSheet.create({
    
    container: {
    justifyContent: "center", 
    alignItems: "center",
    
    }
})

