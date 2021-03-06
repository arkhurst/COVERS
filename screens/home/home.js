import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import * as iosAnimation from '../../assets/lottie/spinner.json';
import * as andriodAnimation from '../../assets/lottie/spinner-android.json';
import Constants from 'expo-constants';
import Header from '../../components/header/header';
import {
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { News } from '../../data/data';
import { getGhana } from '../../graphql/queries/queries';
import { covertDateTime, height } from '../../constants/constants';
import axios from 'axios';
import SliderComponent from '../../components/home/sliderComponent';
import NewsComponent from '../../components/home/newsComponent';
import colors from '../../constants/colors';
import { StatsURL } from '../../config/config';

export default function HomeScreen({ navigation }) {
  // const { loading, data, error } = useQuery(getGhana);
  const [GhanaData, setGhanaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGhanaStats();
  }, []);

  const getGhanaStats = async () => {
    axios({
      url: StatsURL,
      method: 'post',
      data: {
        query: getGhana,
      },
    }).then((result) => {
      setGhanaData(result.data);
      setLoading(!loading);
    });
  };

  function onClickNews(item) {
    navigation.navigate('News', { ...item });
  }
  return (
    <View style={styles.container}>
      <Header>
        <Text>Home</Text>
      </Header>
      {loading ? (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {/* <ActivityIndicator size="large" /> */}
          <LottieView
            source={Platform.OS === 'ios' ? iosAnimation : andriodAnimation}
            autoPlay
            loop
            style={styles.lottie}
          />
        </View>
      ) : (
        <ScrollView>
          {/* Slider Items */}
          <View>
            <SliderComponent data={GhanaData} />
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.headerText}>Ghana's Situation Updates</Text>
            <Text style={styles.updatedTime}>
              Last updated : {covertDateTime(GhanaData?.data?.result?.updated)}
            </Text>
            {/* News Items */}
            <FlatList
              scrollEnabled={false}
              data={News}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={() => onClickNews(item)}>
                  <NewsComponent onClickNews={onClickNews} {...item} />
                </TouchableWithoutFeedback>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </ScrollView>
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
  bodyContainer: {
    marginHorizontal: 15,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.5,
  },
  updatedTime: {
    fontSize: 12,
    color: colors.grey,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.3,
  },
  lottie: {
    height: 100,
    width: 100,
    paddingTop:height * 0.12
  },
});