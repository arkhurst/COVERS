import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FAB from 'react-native-fab';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { covertDateTime } from '../../constants/constants';
import VitalsModal from '../../screens/vitals/vitalsModal';
import { height } from '../../constants/constants';
import { useIsFocused } from '@react-navigation/native';

export default function UserSymptoms({ userVitals }) {
  const [visible, setVisible] = useState(false);
  const isFocused = useIsFocused();

  function close() {
    setVisible(false);
  }

  let date = new Date();
  return (
    <>
      <View>
        <Text style={styles.date}>{covertDateTime(date)}</Text>
        {userVitals.map(userVital => (
          <View key={userVital.id} style={styles.container}>
            <View style={styles.box}>
              <Text>Fever</Text>
              <Text>{userVital.fever.value}</Text>
              <Text>{userVital.fever.sign}</Text>
            </View>
            <View style={styles.box}>
              <Text>Aches</Text>
              <Text>{userVital.aches.value}</Text>
              <Text>{userVital.aches.sign}</Text>
            </View>
            <View style={styles.box}>
              <Text>Breath</Text>
              <Text>{userVital.breath.value}</Text>
              <Text>{userVital.breath.sign}</Text>
            </View>
            <View style={styles.box}>
              <Text>Throat</Text>
              <Text>{userVital.throat.value}</Text>
              <Text>{userVital.throat.sign}</Text>
            </View>
            <View style={styles.box}>
              <Text>Cough</Text>
              <Text>{userVital.cough.value}</Text>
              <Text>{userVital.cough.sign}</Text>
            </View>
            <View style={styles.box}>
              <Text>Headache</Text>
              <Text>{userVital.headache.value}</Text>
              <Text>{userVital.headache.sign}</Text>
            </View>
          </View>
        ))}
      </View>
      <FAB
        onClickAction={() => setVisible(true)}
        style={{
          position: 'absolute',
          width: 65,
          height: 65,
          top: height * 0.4,
        }}
        buttonColor="black"
        iconTextColor="#FFFFFF"
        visible={isFocused}
        iconTextComponent={<Ionicons name="ios-add" />}
      />
      <VitalsModal visible={visible} close={close} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  date: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.3,
    padding: 15,
  },
});