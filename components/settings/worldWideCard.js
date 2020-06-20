import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default function Card(props) {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: { x: 0, y: 1 },
    shadowOpacity: 0.1,
    backgroundColor: colors.white,
    elevation: 3,
    borderRadius: 5,
  },
});
