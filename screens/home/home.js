import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import LottieView from 'lottie-react-native';
import * as load from '../../assets/lottie/loading2.json';
import Constants from 'expo-constants';
import Header from '../../components/header/header';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { News } from '../../data/data';
import { getGhana } from '../../queries/queries';
import { covertDateTime,height  } from '../../constants/constants';
import SliderComponent from '../../components/home/sliderComponent';
import NewsComponent from '../../components/home/newsComponent';


export default function HomeScreen() {

  
  const { loading, data, error } = useQuery(getGhana);

  
  return (
    <View style={styles.container}>
      <Header>
        <Text>Home</Text>
      </Header> 
      {loading ? (
          <View style={{ justifyContent:'center', alignItems:'center'}}>
          {/* <ActivityIndicator size="large" /> */}
          <LottieView source={load} autoPlay loop style={styles.lottie} />
        </View>
      ):(
        <ScrollView>
        {/* Slider Items */}
        <View>
          <SliderComponent data={data} />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.headerText}>Ghana's Situation Updates</Text>
          <Text style={styles.updatedTime}>
            Last updated : {covertDateTime(data?.result?.updated)}
          </Text>
          {/* News Items */}
          <FlatList
            scrollEnabled={false}
            data={News}
            renderItem={({ item }) => <NewsComponent {...item} />}
            keyExtractor={item => item.id.toString()}
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
    backgroundColor: 'white',
  },
  bodyContainer: {
    marginHorizontal: 15,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 15,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.8,
  },
  updatedTime: {
    fontSize: 11,
    color: 'grey',
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.8,
  },
  lottie: {
      height:height*0.6
  },
});