import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import font_sizes from '../../constants/font_sizes';
import colors from '../../constants/colors';
import { color } from 'react-native-reanimated';

export default function SettingsCard({ body, title }) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text style={styles.mainTitle}>{title}</Text>
          <Text style={styles.subText}>{body}</Text>
        </View>
        <View>
          <Ionicons name="ios-arrow-forward" size={25} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderColor,
  },
  body: {
    marginVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainTitle: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.5,
    fontSize: font_sizes.t2,
  },
  subText: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.5,
    color: 'grey',
    fontSize: font_sizes.t4,
  },
});