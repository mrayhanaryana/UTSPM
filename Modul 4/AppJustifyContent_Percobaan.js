import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button } from 'react-native';

const AppJustifyContent = () => {
    const [justifyContent, setJustifyContent] = useState('flex-start')

return (
    <View style={{flex:1, flexDirection:'column'}}>

    <View style={{ flex: 1, backgroundColor: 'white' }}>
    <View style={{ height:40, backgroundColor: 'powderblue', }}> 
    <Text style={{textAlign: 'center', fontWeight: "400", fontSize: 20}}>Justify Contect</Text>
    </View>

    
        <Text style={[styles.subTitle]}>{justifyContent}</Text>
        <View style={[styles.countainer, {justifyContent: justifyContent}]}>
            <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
            <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
            <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
            </View>
            
       </View>
    

       
        
       
    <View style={[styles.countainer, {justifyContent:'space-evenly', marginTop :20}]}>
    
             
            <Button title="Flex-start" onPress={() => setJustifyContent('flex-start')}
                    style={{backgroundColor:'coral' }} />
                    
            <Button title="Flex-end" onPress={() => setJustifyContent('flex-end')}
                    style={{ backgroundColor: "coral" }} />

            <Button title="Center" onPress={() => setJustifyContent('center')}
                    style={{ backgroundColor: "powderblue" }} />
        
        
        
            <Button title="Space-between" onPress={() => setJustifyContent('space-between')}
                    style={{ backgroundColor: "powderblue"}} />
        
            <Button title="Space-around" onPress={() => setJustifyContent('space-around')}
                    style={{ backgroundColor: "powderblue" }} />
                
            <Button title="Space-evenly" onPress={() => setJustifyContent('space-evenly')}
                    style={{ backgroundColor: "powderblue" }} />
       
      </View>
      
      

        
    </View>


);
}
export default AppJustifyContent;

const styles = StyleSheet.create({
    
    box: {
    width: 50,
    height: 50,
    },
    countainer: {
    margin: 5,
    flexDirection: 'row',
    marginBottom: 10,
    flexWrap: "wrap",
    },
    subTitle: {
    marginLeft: 5,
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    },
});

