import * as React from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';



const AppMail = () => {
    return(
        <View style={{flex:1, flexDirection:'column'}}>
            <View style={{ height:65, backgroundColor: 'white' }}> 
            {/* <View style={{ flex: 1, backgroundColor: 'white' }}> */}

                      
                    <Image style={{ width: 40, height: 40, marginLeft: 20, marginTop: 13, borderRadius: 50, borderBottomWidth: 0, alignItems: "center" }} source={require('./image/brian-dyson.png')} />
                    <Image style={{ width: 25, height: 25, marginLeft: 348, marginTop: -35,  marginRight: -20, tintColor:'#00acee'}} source={ {uri: 'https://img.icons8.com/ios/50/000000/settings.png'}} />
                    {/* <View style={styles.container}> */}
                    
                    <View style={{ flex: 2,  width:'auto', flexDirection:'row',  marginLeft:-15, paddingLeft:0 }}>
                    <TextInput placeholder='Search for people and groups'
                            style={{width:'63%', 
                            height:40, 
                            backgroundColor:'#E1E8ED', 
                            marginTop: -30, 
                            marginLeft:94, 
                            marginRight:50,
                            borderRadius: 80,
                            borderWidth: 0.10,
                            padding: 10,
                            justifyContent: 'center',}} />
                            
                      </View>          

          
            </View>
            
            

             </View>
            
             

    );
}



export default AppMail;

const styles = StyleSheet.create({
    
    container: {
    justifyContent: "center", 
    alignItems: "center",
    
    }
})