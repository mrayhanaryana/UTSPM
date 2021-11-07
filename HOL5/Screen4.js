import * as React from 'react';
import {Text, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export const DetailScreen = ({ route, navigation }) => {
    const { itemId } = route.params;
    const movies = [
        {"id":0, "value":'The Squid Game'},
        {"id":1, "value":'Hometown Cha Cha Cha'},
        {"id":2, "value":'Eternal'},
        {"id":3, "value":'Spider-Man: No Way Home',},
    ];
      const selectedMovie = movies[itemId];
      return (
        <SafeAreaView style={{ flex: 1 }}>
        <Text>Detail Screen</Text>
        <Text>Movie ID: {selectedMovie.id}</Text>
        <Text>Movie Title: {selectedMovie.value}</Text>
        {/* <Image source={selectedMovie.img} style={{width: 400, height: 490,resizeMode:'contain'}} /> */}
        <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
        />
    </SafeAreaView> );
}