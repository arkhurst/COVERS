import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProgressiveImage from '../progressive_image/progressiveImage';

export default function NewsComponent({ title, body,image }) {
  return (
    <View style={styles.newsContainer}>
      <View>
        <ProgressiveImage
         thumbnailSource={require('../../assets/placeholder.png')}
         style={styles.image} 
         source={image} 
         resizeMode="cover"
         />
      </View>
      <View style={styles.newsBody}>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.bodyText}>View article</Text>
        </TouchableOpacity>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    marginVertical:10,
    marginHorizontal: 13,
    backgroundColor:'white',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    flexDirection:'row',
    height:130
  },
  border: {
    borderBottomWidth: 1.4,
    borderColor: '#dedede',
  },
  headerText: {
    fontSize: 15,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.6,
    marginBottom: 15,
  },
  newsBody: {
    justifyContent:'space-between',
    paddingVertical:5,
    paddingHorizontal:8
  },
  bodyText: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.3,
    color:"#00a4f3"
  },
  image:{
    height:130,
    width:160
  }
});