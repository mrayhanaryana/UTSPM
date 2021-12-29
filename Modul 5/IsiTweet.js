import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const PostTweet = () => {
          return (
            <View style={styles.container}>
              {/* <Text style={styles.image}> <Image source={{ uri: 'https://commons.wikimedia.org/wiki/File:Twitter_Reply.png#/media/File:Twitter_Reply.png'}}></Image></Text> */}
              {/* <View style={styles.tweetHeaderContainer}> */}
                <View style={styles.tweetHeaderNames}>
                  <Text style={styles.name}>Jerome Polin Sijabat</Text>
                  <Text style={styles.username}>@Jerome Polin</Text>
                  <Text style={styles.createdAt}>Mangat Sayang</Text>
                  <Text style={styles.content}>1d</Text>
                  {/* <Image source={{ uri: 'https://commons.wikimedia.org/wiki/File:Twitter_Reply.png#/media/File:Twitter_Reply.png'}}></Image> */}
                  <Image style={{ width: 17, height: 17, marginLeft: -270, marginTop: 46, marginBottom: -10}} source={require('./image/Twitter_Reply.png')}>
                  </Image>
                  {/* <Image style={{ width: 17, height: 17, marginLeft: -255, marginTop: 43, marginBottom: -10}} source={require('./image/Twitter_Reply.png')}></Image> */}
                </View>
               
                {/* <View>
                <Image source={{ uri: 'https://commons.wikimedia.org/wiki/File:Twitter_Reply.png#/media/File:Twitter_Reply.png'}}></Image>
                </View> */}
               
              </View>
            
          )
          }
          
          
          const styles = StyleSheet.create({
            container: {
              flex: 1,
              marginHorizontal: 15,
              
            },
            tweetHeaderContainer: {
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            tweetHeaderNames: {
              flexDirection: 'row',
            },
            name: {
              marginRight: 30,
              fontWeight: 'bold',
              // marginTop: -8,
              marginBottom: 10,
              color: 'black',
              fontSize: 15,
            },
            username: {
              marginRight: -20,
              marginLeft: 40,
              color: 'grey',
            },
            createdAt: {  
              color: 'black',
              marginLeft: -290,
              fontSize: 15,
              marginTop: 20,

            },
            content: {
              marginTop: 5,
              lineHeight: 18,
              // marginRight: -90,
              marginLeft: 150,
            },
            // image: {
            //   marginVertical: 10,
            //   width: "100%",
            //   height: 200,
            //   resizeMode: 'cover',
            //   borderRadius: 15,
            //   overflow: 'hidden',
            // }
          });

export default PostTweet;
          
          
          
          
  
  
