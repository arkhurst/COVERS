import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { covertDateTime } from '../../constants/constants';

export default function CaseReports({ reportFor, contact, description, date }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={styles.mainTitle}>{reportFor}</Text>
        <Text style={styles.mainText}>{covertDateTime(date)}</Text>
      </View>
      <Text style={styles.book}>{description}</Text>
      <Text style={styles.book}>{contact}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  mainText: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.6,
    color: 'grey',
  },
  mainTitle: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.6,
    fontSize: 15,
  },
  book: {
    fontFamily: 'AirbnbCereal-Book',
    letterSpacing: -0.3,
    fontSize: 14,
  },
});