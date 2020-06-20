import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Header from '../../components/header/header';
import LottieView from 'lottie-react-native';
import * as vitalsAnim from '../../assets/lottie/cardio.json';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VitalsModal from './vitalsModal';
import { GlobalContext } from '../../context/GlobalState';
import { width, height } from '../../constants/constants';
import UserSymptoms from '../../components/vitals/userSymptoms';
import colors from '../../constants/colors';

export default function VitalScreen() {
  const [visible, setVisible] = useState(false);
  const { userVitals } = useContext(GlobalContext);

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
      {/* Check if user vitals array is empty */}

      {userVitals.length > 0 ? (
        <View>
          <UserSymptoms userVitals={userVitals} />
        </View>
      ) : (
        <Text />
      )}

      {userVitals.length <= 0 ? (
        <View style={styles.lottieContainer}>
          <View style={{ marginVertical: 50 }}>
            <LottieView
              source={vitalsAnim}
              style={styles.lottie}
              autoPlay
              loop
            />
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
      ) : (
        <Text />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor:colors.backgroundColor,
  },
  lottieContainer: {
    alignItems: 'center',
  },
  lottie: {
    height: height * 0.2,
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
    color: colors.grey
  },
});