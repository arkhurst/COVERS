import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { getGlobal } from '../../../graphql/queries/queries';
import axios from 'axios';
import WorldWideStats from '../../../components/settings/worldStats';
import DropdownComponent from '../../../components/settings/dropDown';
import font_sizes from '../../../constants/font_sizes';
import { StatsURL } from '../../../config/config';
import LottieView from 'lottie-react-native';
import load from '../../../assets/lottie/loading2.json';
import { height } from '../../../constants/constants';

export default function WorldWide({ close, visible }) {
  const [loading, setLoading] = useState(false);
  const [globalData, setGlobalData] = useState(null);

  useEffect(() => {
    getData();
  });
  const getData = async () => {
    axios({
      url: StatsURL,
      method: 'post',
      data: {
        query: getGlobal,
      },
    }).then((result) => {
      setGlobalData(result.data);
    });
  };

  return (
    <Modal
      visible={visible}
      presentationStyle={'pageSheet'}
      animationType={'slide'}>
      <View style={styles.container}>
        <View
          style={{
            paddingHorizontal: 20,
            borderBottomWidth: StyleSheet.hairlineWidth,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.headerTitle}>{'COVID-19\nWorldwide'}</Text>
          <TouchableOpacity style={{ paddingTop: 20 }} onPress={() => close(4)}>
            <Ionicons name="ios-close" size={40} />
          </TouchableOpacity>
        </View>
        {loading ? (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <LottieView source={load} autoPlay loop style={styles.lottie} />
          </View>
        ) : (
          <>
            <WorldWideStats data={globalData} />
            <View style={{ paddingHorizontal: 20 }}>
              <Text style={{ fontWeight: '600' }}>Select Country:</Text>
            </View>
            <DropdownComponent />
          </>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  headerTitle: {
    fontSize: font_sizes.h1,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  lottie: {
    height: height * 0.6,
  },
});