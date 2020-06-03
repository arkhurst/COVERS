import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Card from './worldWideCard';
import { Ionicons } from '@expo/vector-icons';
import CountryPicker from 'react-native-country-picker-modal';
import CountryStats from './countryStats';


export default function DropdownComponent() {

  const [countries, setCountries] = useState(null);
  const [countryCode, setCountryCode] = useState('GH');
  const [country, setCountry] = useState( 'Ghana');

  const [withCountryNameButton, setWithCountryNameButton] = useState(false);

  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);



  return (
    <View>
      <TouchableWithoutFeedback>
        <View style={{ margin: 10 }}>
          <Card style={styles.container}>
            <View style={styles.countryContainer}>
            <CountryPicker
                    {...{
                      countryCode,
                      country,
                      withFlag,
                      withCountryNameButton,
                      withAlphaFilter,
                      withCallingCode,
                      withEmoji,
                      onSelect: (value, num = 1) => onSelect(value, num),
                    }}
                  />
                  {country.name == null ? (
                    <Text style={styles.mainText}>{country}</Text>
                  ) : (
                    <Text style={styles.mainText}>{country.name}</Text>
                  )}
            </View>
            <View style={{paddingTop:10}}>
              <Ionicons name="ios-arrow-down" size={18} color="grey" />
            </View>
          </Card>
        </View>
      </TouchableWithoutFeedback> 
      <CountryStats />
      <View style={styles.dateContainer}>
          <Text style={{ color: 'grey' }}>Last Updated:</Text>
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
    alignItems:'center'
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
  }
});

