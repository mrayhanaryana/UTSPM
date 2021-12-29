import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';


const ScreenUtama = () => {
  <View style={styles.container}>
    <View style={styles.tweetHeaderContainer}>
      <View style={styles.tweetHeaderNames}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.username}>@{tweet.user.username}</Text>
        <Text style={styles.createdAt}>{moment(tweet.createdAt).fromNow()}</Text>
      </View>
     
    </View>
   
   
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  tweetHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tweetHeaderNames: {
    flexDirection: 'row',
  },
  name: {
    marginRight: 5,
    fontWeight: 'bold',
  },
  username: {
    marginRight: 5,
    color: 'grey',
  },
  createdAt: {
    marginRight: 5,
    color: 'grey',
  },
  content: {
    marginTop: 5,
    lineHeight: 18,
  },
  image: {
    marginVertical: 10,
    width: "100%",
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
    overflow: 'hidden',
  }
});




export default ScreenUtama;
