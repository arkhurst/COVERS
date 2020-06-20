import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Image, Modal,FlatList } from 'react-native';
import axios from 'axios';
import Card from './worldWideCard';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import CountryStats from './countryStats';
import {  CountryQuery } from '../../queries/queries';
import { covertDateTime } from '../../constants/constants';
import colors from '../../constants/colors';
import { StatsURL } from '../../config/config';
import { TouchableOpacity } from 'react-native-gesture-handler';

// FIX ME
const CountryList = ({visible, close,data,selectCountryStats}) => {
  return(
    <Modal visible={visible} animationType={'slide'} presentationStyle={"pageSheet"}>
      <View style={styles.modalView}>
       <TouchableOpacity style={styles.btn} onPress={close}>
           <Ionicons name="ios-close" size={30} />
         </TouchableOpacity>

       {/* FIX ME */}
         {data && (
           <FlatList 
             data={data}
             renderItem={({item}) => (
               <View style={styles.countryListContainer}>
                 <TouchableOpacity onPress={() => selectCountryStats(item)} style={styles.items}>
                   <Image
                     style={{ width: 40, height: 40 }}
                     source={{ uri: item?.countryInfo?.flag }}
                   />
                   <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: '600' }}>
                     {item?.country}
                   </Text>
                   <Text>fdd</Text>
               </TouchableOpacity>
             </View>
             )}
             keyExtractor={item => item.id}
           />
         )}
      </View>
    </Modal>
  )
}

export default function DropdownComponent() {
  // const [countries, setCountries] = useState(null);
  const [country, setCountry] = useState({
    country: 'Ghana',
    countryInfo: {
      flag: 'https://corona.lmao.ninja/assets/img/flags/gh.png',
    },
    result: {
      tests:  261319,
      cases: 13717,
      todayCases: 514,
      deaths: 85,
      todayDeaths: 15,
      recovered:  10074,
      active: 3558,
      critical: 6,
      casesPerOneMillion: 442,
      deathsPerOneMillion: 3,
      testsPerOneMillion: 8417,
      updated: "2020-06-20T19:54:02.048Z"
    },
  });
  const [data, setData ] = useState({})
  const [visible, setVisible] = useState(false)


  useEffect(() => {
    getAllData()
  })
  const getAllData = async () => {
    axios({
      url:StatsURL,
      method:'post',
      data:{
        query:CountryQuery
      }
    }).then((result) => {
     
         setData(result.data)
    })
  }

  function close(){
    setVisible(!visible)
  }

  function selectCountryStats(data){
    setCountry(data)
  }
  return (
    <View>
      <TouchableWithoutFeedback>
        <View style={{ margin: 10 }}>
          <TouchableOpacity onPress={() => setVisible(true)} activeOpacity={0.9} >
          <Card style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image style={{ height: 30, width: 30 }} resizeMode={'contain'} source={{ uri : country?.countryInfo?.flag || 'N/A'}} />
              <Text style={{ marginLeft:10,fontFamily: 'AirbnbCereal-Bold' }}>
                {country?.country || 'N/A'}
              </Text>
         </View>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="ios-arrow-down" size={18} color={colors.grey} />
            </View>
          </Card>
          <CountryList selectCountryStats={selectCountryStats} visible={visible} close={close} data={data} />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      <CountryStats country={country} />
      <View style={styles.dateContainer}>
        <Text style={{ color: colors.grey }}>
          Last Updated: {covertDateTime(country?.result?.updated || 'N/A')}
        </Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingTop: 10,
    marginBottom: 50,
  },
  mainText: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.2,
  },
  modalView:{
    paddingHorizontal:20,
    paddingTop:Constants.statusBarHeight,
  },
  countryListContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderColor,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
