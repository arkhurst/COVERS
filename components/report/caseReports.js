import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Swipeable, TouchableOpacity } from 'react-native-gesture-handler';
import FAB from 'react-native-fab';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { covertDateTime, width } from '../../constants/constants';
import ReportModal from '../../screens/report/reportModal';
import { height } from '../../constants/constants';
import { removeCaseReport, reports } from '../../context/GlobalState';
import font_sizes from '../../constants/font_sizes';
import colors from '../../constants/colors';
import { color } from 'react-native-reanimated';

export default function CaseReports({ reportFor, contact, description, date }) {
  const [visible, setVisible] = useState(false);
  const isFocused = useIsFocused();

  function close() {
    setVisible(false);
  }

  function rightActions(dragX, index) {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0.9],
      extrapolate: 'clamp',
    });

    const opacity = dragX.interpolate({
      inputRange: [-100, -20, 0],
      outputRange: [1, 0.9, 0],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity>
        <Animated.View style={[styles.deleteItem, { opacity: opacity }]}>
          <Animated.Text
            style={{
              color: colors.white,
              fontWeight: 'bold',
              transform: [{ scale }],
            }}>
            Delete
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
  return (
    <View
      style={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor,
      }}>
      <Swipeable renderRightActions={(_, dragX) => rightActions(dragX)}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={styles.mainTitle}>{reportFor}</Text>
            <Text style={styles.mainText}>{covertDateTime(date)}</Text>
          </View>
          <Text style={styles.book}>{description}</Text>
          <Text style={styles.book}>{contact}</Text>
        </View>
      </Swipeable>
      <FAB
        onClickAction={() => setVisible(true)}
        style={{
          position: 'absolute',
          width: 65,
          height: 65,
          top: height * 0.58,
        }}
        buttonColor={color.buttonColor}
        iconTextColor={colors.white}
        visible={isFocused}
        iconTextComponent={<Ionicons name="ios-add" />}
      />
      <ReportModal visible={visible} close={close} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
  mainText: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.6,
    color: colors.grey,
  },
  mainTitle: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.6,
    fontSize: font_sizes.t3,
  },
  book: {
    fontFamily: 'AirbnbCereal-Book',
    letterSpacing: -0.3,
    fontSize: font_sizes.t4,
  },
  deleteItem: {
    backgroundColor: 'red',
    width: 80,
    height: 87,
    justifyContent: 'center',
    alignItems: 'center',
  },
});