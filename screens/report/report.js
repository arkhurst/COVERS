import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Header from '../../components/header/header';
import LottieView from 'lottie-react-native';
import * as reportAnim from '../../assets/lottie/reports.json';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { GlobalContext } from '../../context/GlobalState';
import { useIsFocused } from '@react-navigation/native';
import ReportModal from './reportModal';
import CaseReports from '../../components/report/caseReports';
import { width, height} from '../../constants/constants';
import colors from '../../constants/colors';


export default function ReportScreen() {
  const [visible, setVisible] = useState(false);
  const { reports } = useContext(GlobalContext);
  const isFocused = useIsFocused();

  function open() {
    setVisible(true);
  }
  function close() {
    setVisible(false);
  }
  return (
    <View style={styles.container}>
      <Header>
        <Text>Case Report</Text>
      </Header> 
      {/* Check if reports has items */}
      {reports.length > 0 ? (
        <View>
          {reports.map(report => (
             <View>
              <CaseReports key={report.id}   {...report} />
            </View>
          ))}
        </View>
      
      ) : (
        <Text />
      )}
      {/* Check if report is empty*/}
      {reports.length <= 0 ? (
        <View style={styles.lottieContainer}>
          <View style={{ marginVertical: 35 }}>
            <LottieView
              style={styles.lottie}
              source={reportAnim}
              autoPlay
              loop
            />
          </View>
          <View
            style={{
              paddingTop: 60,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.mainText}>
              You have not made any case report
            </Text>
            <TouchableOpacity onPress={open} style={styles.button}>
              <Text style={styles.mainText}>Make Case Report</Text>
              <ReportModal visible={visible} close={close} />
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
    backgroundColor: colors.backgroundColor,
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
    width: width * 0.45,
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
    color: colors.grey,
  },
  mainTitle: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.2,
  },
});