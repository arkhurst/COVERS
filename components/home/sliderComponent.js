import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addCommas } from '../../constants/constants';

export default function({ data }) {
  return (
    <ScrollView horizontal>
      {/* Confirmed cases */}
      <View>
        <Image
          source={require('../../assets/virus.png')}
          style={styles.image}
        />
        <Text style={styles.number}>
          {addCommas(data?.country?.result?.cases) || 'N/A'}
        </Text>
        <Text style={styles.status}>Confirmed Cases</Text>
      </View>
      {/* Recovered */}
      <View>
        <Image
          source={require('../../assets/recovery.png')}
          style={styles.image}
        />
        <Text style={styles.number}>
          {addCommas(data?.country?.result?.recovered) || 'N/A'}
        </Text>
        <Text style={styles.status}>Recovered</Text>
      </View>
      {/* Deaths */}
      <View>
        <Image
          source={require('../../assets/deaths.jpeg')}
          style={styles.image}
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
    height: 200,
    width: 330,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  number: {
    position: 'absolute',
    right: 30,
    top: 35,
    color: '#fff',
    fontSize: 30,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.8,
  },
  status: {
    position: 'absolute',
    right: 30,
    top: 75,
    color: '#fff',
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.8,
  },
});