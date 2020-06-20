import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import Card from './worldWideCard';
import { Ionicons } from '@expo/vector-icons';
import CountryPicker from 'react-native-country-picker-modal';
import CountryStats from './countryStats';
import { getGhana } from '../../queries/queries';
import { covertDateTime } from '../../constants/constants';
import colors from '../../constants/colors';

export default function DropdownComponent() {
  const { data, loading, error } = useQuery(getGhana);
  // const [countries, setCountries] = useState(null);

  console.log(data.result);
  const [country, setCountry] = useState({
    name: 'Ghana',
    countryCode: 'GH',
    result: data.country.result,
  });

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
                  countryCode: country.countryCode,
                  country,
                  withFlag,
                  withCountryNameButton,
                  withAlphaFilter,
                  withCallingCode,
                  withEmoji,
                  onSelect: (value, num = 1) => onSelect(value, num),
                }}
              />
              {country.name.name == null ? (
                <Text style={styles.mainText}>{country.name}</Text>
              ) : (
                <Text style={styles.mainText}>{country.name.name}</Text>
              )}
            </View>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="ios-arrow-down" size={18} color={colors.grey} />
            </View>
          </Card>
        </View>
      </TouchableWithoutFeedback>
      <CountryStats country={country} />
      <View style={styles.dateContainer}>
        <Text style={{ color: colors.grey }}>
          Last Updated: {covertDateTime(country.result.updated)}
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
});
