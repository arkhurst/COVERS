import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ProgressiveImage from '../progressive_image/progressiveImage';
import font_sizes from '../../constants/font_sizes';
import colors from '../../constants/colors';
import { height, width } from '../../constants/constants';

export default function NewsComponent(props) {
  const { title, image, onClickNews } = props;
  return (
    <View style={styles.newsContainer}>
      <View>
        <ProgressiveImage
          thumbnailSource={require('../../assets/placeholder.png')}
          style={styles.image}
          source={image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.newsBody}>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity onPress={() => onClickNews(props)}>
          <Text style={styles.bodyText}>View article</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    marginVertical: 10,
    marginHorizontal: 9,
    backgroundColor: colors.backgroundColor,
    shadowColor: colors.grey,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    flexDirection: 'row',
    height: height * 0.14,
    elevation: 3,
  },
  border: {
    borderBottomWidth: 1.4,
    borderColor: colors.borderColor,
  },
  headerText: {
    fontSize: font_sizes.t4,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.6,
    marginBottom: 15,
    width: '60%',
  },
  newsBody: {
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  bodyText: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.3,
    // color:"#00a4f3"
  },
  image: {
    height: height * 0.14,
    width: width * 0.4,
  },
});