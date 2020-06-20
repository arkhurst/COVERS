import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import ProgressiveImage from '../../components/progressive_image/progressiveImage';
import { height } from '../../constants/constants';
import font_sizes from '../../constants/font_sizes';
import colors from '../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';

export default function NewsDetails({ navigation, route }) {
  const { title, body, source, image } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ProgressiveImage
        style={{ width: '100%', height: height * 0.4 }}
        source={image}
        resizeMode="cover"
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}>
        <Entypo name="chevron-small-left" size={26} color={colors.tomato} />
      </TouchableOpacity>
      <View style={styles.bodyContainer}>
        <Text style={{ fontFamily: 'AirbnbCereal-Bold', fontSize: font_sizes.t1 }}>
          {title}
        </Text>
        <Text style={{ fontSize: font_sizes.t4, paddingVertical: 10, letterSpacing: 0.3, lineHeight:25 }}>
          {body}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <FontAwesome5 name="sourcetree" size={24} color={colors.tomato} />
          <Text
            style={{
              fontFamily: 'AirbnbCereal-Bold',
              fontSize: font_sizes.t4,
              paddingLeft: 10,
            }}>
            {' '}
            Source: {''}
            <Text style={{ fontFamily: 'AirbnbCereal-Medium', fontSize: font_sizes.t4 }}>
              {source}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.backgroundColor,
  },
  bodyContainer: {
    height: '100%',
    shadowColor:colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    marginTop: -10,
    padding: 20,
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor:colors.white,
    position: 'absolute',
    left: 20,
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { x: 0, y: 1 },
    shadowOpacity: 0.4,
    elevation:3
  },
});