import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Constants from 'expo-constants';
import FAQComponent from '../../../components/settings/faq';
import { Ionicons } from '@expo/vector-icons';
import font_sizes from '../../../constants/font_sizes';


export default function FAQModal({ close, visible }) {
  return (
    <Modal
      visible={visible}
      presentationStyle={'pageSheet'}
      animationType={'slide'}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>FAQs</Text>
          <TouchableOpacity onPress={() => close(2)}>
            <Ionicons name="ios-close" size={40} />
          </TouchableOpacity>
        </View>
      </View>
      <FAQComponent />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.2,
    fontSize: font_sizes.h1,
  },
});