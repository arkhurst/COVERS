import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Header from '../../components/header/header';
import LottieView from 'lottie-react-native';
import * as vitalsAnim from '../../assets/lottie/vitals.json';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VitalsModal from './vitalsModal';
import { GlobalContext } from '../../context/GlobalState';

const { width, height } = Dimensions.get('window');

export default function VitalScreen() {
  const [visible, setVisible] = useState(false);
  const { userVitals } = useContext(GlobalContext)

  console.log(userVitals)
  function open() {
    setVisible(true);
  }
  function close() {
    setVisible(false);
  } 
  return (
    <View style={styles.container}>
      <Header>
        <Text>Vitals</Text>
      </Header>
      <View style={styles.lottieContainer}>
        <View style={{ marginVertical: 50 }}>
          <LottieView source={vitalsAnim} style={styles.lottie} autoPlay loop />
        </View>
        <View
          style={{
            paddingTop: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.mainText}>
            You have not logged your vitals yet.
          </Text>
          <TouchableOpacity onPress={open} style={styles.button}>
            <Text style={styles.mainText}>Log Vitals</Text>
            <VitalsModal visible={visible} close={close} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  lottieContainer: {
    alignItems: 'center',
  },
  lottie: {
    height: height * 0.25,
    opacity: 0.8,
  },
  button: {
    height: 50,
    width: width * 0.35,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  mainText: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.2,
    color: 'grey',
  },
});