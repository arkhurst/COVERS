import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import LogSymptoms from '../../components/vitals/logSymptoms';
import font_sizes from '../../constants/font_sizes';

export default function VitalsModal({ close, visible }) {
  return (
    <Modal  visible={visible} animationType="slide" presentationStyle={'pageSheet'}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Log Symptoms</Text>
          <TouchableOpacity onPress={close}>
            <Ionicons name="ios-close" size={40} />
          </TouchableOpacity>
        </View>
        <LogSymptoms />
      </View>
    </Modal>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.2,
    fontSize: font_sizes.h1,
  },
});
