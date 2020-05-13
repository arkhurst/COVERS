import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function NewsComponent({ title, body }) {
  return (
    <View style={styles.newsContainer}>
      <View style={styles.border}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.newsBody}>
        <Text style={styles.bodyText}>{body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    marginHorizontal: 20,
    paddingTop: 40,
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
    marginTop: 15,
  },
  bodyText: {
    fontFamily: 'AirbnbCereal-Book',
    letterSpacing: -0.7,
  },
});