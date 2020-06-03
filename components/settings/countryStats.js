import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Card from './worldWideCard';
import { Ionicons } from '@expo/vector-icons';


function CountryStats() {

  return (
    <Card style={styles.overCont}>
      <View style={styles.countryStatsContainer}>
        <Ionicons bold={false} name="ios-stats" color="#62975f" size={26} />
        <Text style={{ marginLeft: 5, fontSize: 17, marginTop: 6 }}>
          Statistics
        </Text>
      </View>
      <View style={styles.statsItemsContainer}>
        <View>
          {/* Confirmed cases */}
          <View style={styles.statsItems}>
            <Text style={{ color: '#4847d6', fontWeight: '500' }}>
              Confirmed
            </Text>
            <Text style={styles.numbers}>
             0
            </Text>
          </View>
          {/* Active cases */}
          <View style={[styles.statsItems, styles.spacing]}>
            <Text style={{ color: 'gold', fontWeight: '600' }}>Active</Text>
            <Text style={styles.numbers}>
               0
            </Text>
          </View>
        </View>
        <View style={styles.border}>
          {/* Recovered cases */}
          <View style={styles.statsItems}>
            <Text style={{ color: '#62975f', fontWeight: '500' }}>
              Recovered
            </Text>
            <Text style={styles.numbers}>
            0
            </Text>
          </View>
          {/* Critical cases */}
          <View style={[styles.statsItems, styles.spacing]}>
            <Text style={{ color: 'tomato', fontWeight: '600' }}>Critical</Text>
            <Text style={styles.numbers}>
             0
            </Text>
          </View>
        </View>
        <View style={styles.lastItem}>
          {/* Deaths */}
          <View style={styles.statsItems}>
            <Text style={{ color: 'tomato', fontWeight: '500' }}>Deaths</Text>
            <Text style={styles.numbers}>
                0
            </Text>
          </View>
          {/* Tests */}
          <View style={[styles.statsItems, styles.spacing]}>
            <Text style={{ color: 'teal', fontWeight: '600' }}>Tests</Text>
            <Text style={styles.numbers}>
                  0
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  overCont: {
    marginVertical: 3,
    marginHorizontal: 10,
  },
  countryStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -8,
  },
  statsItemsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    marginTop: 20,
  },
  border: {
    borderLeftWidth: StyleSheet.hairlineWidth,

    borderColor: 'grey',
    marginLeft: 15,
  },
  statsItems: {
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingHorizontal: 10,
  },
  lastItem: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    marginLeft: 15,
    borderColor: 'grey',
  },
  numbers: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  spacing: {
    marginTop: 25,
  },
});

export default CountryStats;