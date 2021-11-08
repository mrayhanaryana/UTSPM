import * as React from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';
import Retweet from './IsiTweet';


const AppHeader = () => {
    return(
        <View style={{flex:1, flexDirection:'column'}}>
            <View style={{ height:70, backgroundColor: 'white' }}> 
            {/* <View style={{ flex: 1, backgroundColor: 'white' }}> */}

                      
                    <Image style={{ width: 40, height: 40, marginLeft: 20, marginTop: 15, borderRadius: 50, borderBottomWidth: 0, alignItems: "center" }} source={require('./image/brian-dyson.png')} />
                    <Image style={{ width: 40, height: 40, marginLeft: 350, marginTop: -43,  marginRight: -20, borderRadius: 60, alignItems: "center"}} source={require('./image/timeline.png')} />
                    <View style={styles.container}>
                    <Image style={{ width: 28, height: 28, justifyContent: "center", alignItems: "center", marginTop: -30 }} source={require('./image/twitter-logo.png')} />
                    </View>
          
            </View>
            
            

             </View>
             

    );
}

<Retweet/>

export default AppHeader;


const styles = StyleSheet.create({
    
    container: {
    justifyContent: "center", 
    alignItems: "center",
    
    }
})


