import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addCommas, height, width } from '../../constants/constants';
import ProgressiveImage from '../progressive_image/progressiveImage';
import font_sizes from '../../constants/font_sizes';
import colors from '../../constants/colors';

export default function ({ data }) {
  return (
    <ScrollView horizontal>
      {/* Confirmed cases */}
      <View>
        <ProgressiveImage
          thumbnailSource={require('../../assets/placeholder.png')}
          source={require('../../assets/virus.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.number}>
          {addCommas(data?.country?.result?.cases) || 'N/A'}
        </Text>
        <Text style={styles.status}>Confirmed Cases</Text>
      </View>
      {/* Recovered */}
      <View>
        <ProgressiveImage
          thumbnailSource={require('../../assets/placeholder.png')}
          source={require('../../assets/recovered.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.number}>
          {addCommas(data?.country?.result?.recovered) || 'N/A'}
        </Text>
        <Text style={styles.status}>Recovered</Text>
      </View>
      {/* Deaths */}
      <View>
        <ProgressiveImage
          thumbnailSource={require('../../assets/placeholder.png')}
          source={require('../../assets/deaths.jpeg')}
          style={styles.image}
          resizeMode="c"
        />
        <Text style={styles.number}>
          {addCommas(data?.country?.result?.deaths) || 'N/A'}
        </Text>
        <Text style={styles.status}>Deaths</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: height * 0.19,
    width: width * 0.7,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: '#e1e4e8',
  },
  number: {
    position: 'absolute',
    right: 30,
    top: 30,
    color: colors.white,
    fontSize: font_sizes.h2,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.8,
  },
  status: {
    position: 'absolute',
    right: 30,
    top: 70,
    color: '#fff',
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.8,
  },
});
