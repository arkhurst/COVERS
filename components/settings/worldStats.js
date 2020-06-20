import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import Card from './worldWideCard';
import { getGlobal } from '../../queries/queries';
import { useQuery } from '@apollo/react-hooks';
import { addCommas } from '../../constants/constants';
import font_sizes from '../../constants/font_sizes';
import colors from '../../constants/colors';

function WorldWideStats() {
  const { data, loading, error } = useQuery(getGlobal);
  return (
    <Card style={styles.container}>
      <View style={styles.worldStatsContainer}>
        <Fontisto name="world-o" size={26} color="blue" />
        <Text
          style={{
            marginLeft: 5,
            fontSize: font_sizes.t2,
            marginTop: 6,
            fontFamily: 'AirbnbCereal-Bold',
          }}>
          Worldwide Statistics
        </Text>
      </View>
      <View style={styles.statsItemsContainer}>
        <View style={styles.statsItems}>
          <Text style={{ color: '#4847d6', fontWeight: '500' }}>Confirmed</Text>
          <Text style={styles.numbers}>
            {addCommas(data?.globalTotal?.cases) || 'N/A'}
          </Text>
        </View>
        <View style={styles.statsItems}>
          <Text style={{ color: '#62975f', fontWeight: '500' }}>Recovered</Text>
          <Text style={styles.numbers}>
            {addCommas(data?.globalTotal?.recovered) || 'N/A'}
          </Text>
        </View>
        <View style={[styles.statsItems, styles.lastItem]}>
          <Text style={{ color: 'tomato', fontWeight: '500' }}>Deaths</Text>
          <Text style={styles.numbers}>
            {addCommas(data?.globalTotal?.deaths) || 'N/A'}
          </Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    marginHorizontal: 10,
  },
  worldStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsItemsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    marginTop: 20,
  },
  statsItems: {
    justifyContent: 'space-between',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderColor,
    paddingRight: 20,
    paddingHorizontal: 6,
  },
  lastItem: {
    borderRightWidth: 0,
  },
  numbers: {
    fontWeight: 'bold',
    fontSize: font_sizes.t1,
  },
});

export default WorldWideStats;