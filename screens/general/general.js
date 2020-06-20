import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { GeneralInfo } from '../../data/data';
import font_sizes from '../../constants/font_sizes';
import colors from '../../constants/colors';

export default function General({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {GeneralInfo.map((general) => (
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
          <Text style={([styles.minorText], { color: colors.white })}>
            Let's get started...
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.5,
    fontSize: font_sizes.t3,
  },
  minorText: {
    fontFamily: 'AirbnbCereal-Book',
    letterSpacing: -0.5,
    fontSize: font_sizes.t4,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.button,
    height: 50,
  },
});