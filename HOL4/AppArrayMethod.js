import React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';

class AppArrayMethod extends Component {
    render() {
      const buah = ['apple', 'banana', 'orange'];
    
    return (
      <SafeAreaView>
        <View>
           <Text>Contoh Penggunaan Array Method</Text>
                 { buah.map((item) => (
           <Text key={item}>{item}</Text>
        )
        )}
        </View>
      </SafeAreaView>
   );
  }
}
export default AppArrayMethod;