import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { GeneralInfo } from '../../data/data';

export default function General({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {GeneralInfo.map(general => (
          <View key={general.id} style={{ marginVertical: 20 }}>
            <Text style={styles.mainTitle}>{general.title}</Text>
            <Text>{general.info}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ marginBottom: 40 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={styles.button}>
          <Text style={([styles.minorText], { color: 'white' })}>
            Let's get started..
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.5,
    fontSize: 16,
  },
  minorText: {
    fontFamily: 'AirbnbCereal-Book',
    letterSpacing: -0.5,
    fontSize: 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 50,
  },
});