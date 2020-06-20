import React, { useState } from 'react';
import { Text, StyleSheet, View ,Image} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Modal from 'react-native-modalbox';
import ProfileModal from './profileModal';
import { height } from '../../constants/constants';
import { Notification } from '../../data/data';
import font_sizes from '../../constants/font_sizes';
import colors from '../../constants/colors';

const Header = (props) => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotification] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const cancel = () => {
    setVisible(false);
  };
  const openModal = () => {
    setVisible(!visible);
  };

  const MessageList = ({ message, sentAt }) => {
    return (
      <View style={{ borderBottomWidth: 0.8, borderColor: colors.borderColor }}>
        <View style={styles.messageList}>
          <Text style={styles.mainText}>{message}</Text>
          <Text style={styles.mainText}>{sentAt}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={openModal}>
           <Image style={{width:50, height:50, borderRadius:25}} source={require('../../assets/male.jpeg')} />
          <ProfileModal visible={visible} cancel={cancel} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{props.children}</Text>
      </View>
      <TouchableOpacity style={styles.icon} onPress={open}>
        <FontAwesome name="bell-o" size={30} color="black" />
        {/* Notification Animation */}
        <Modal
          animationDuration={1000}
          style={styles.modal}
          onClosed={() => setIsOpen(false)}
          coverScreen={true}
          isOpen={isOpen}
          swipeToClose={true}>
          <View style={styles.notsContainer}>
            <Text style={styles.notsTitle}>Notifications</Text>
            {!notifications ? (
              <View style={styles.emptyNotification}>
                <Ionicons
                  name="ios-information-circle-outline"
                  size={24}
                  color={colors.noNotifs}
                />
                <Text
                  style={{ fontFamily: 'AirbnbCereal-Medium', paddingLeft: 5 }}>
                  Sorry, there are no notifications.
                </Text>
              </View>
            ) : (
              <FlatList
                data={Notification}
                renderItem={({ item }) => <MessageList {...item} />}
                keyExtractor={(item) => item.id.toString()}
              />
            )}
          </View>
        </Modal>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.backgroundColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderColor,
    justifyContent: 'space-between',
    height: height * 0.14,
    paddingHorizontal: 20,
  },
  firstContainer: {
    justifyContent: 'space-around',
  },
  icon: {
    marginTop: 10,
  },
  headerTitle: {
    fontSize: font_sizes.h2,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.6,
  },

  modal: {
    height: height * 0.9,
    backgroundColor: colors.secondaryBackgroundColor,
    marginTop: 70,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: { x: 0, y: 1 },
    shadowOpacity: 0.5,
    elevation: 4,
  },
  notsContainer: {
    paddingTop: 20,
    marginHorizontal: 25,
  },
  notsTitle: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.6,
    fontSize: font_sizes.t3,
    textAlign: 'center',
  },
  messageList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  mainText: {
    fontFamily: 'AirbnbCereal-Book',
    letterSpacing: -0.2,
  },
  emptyNotification: {
    height: 55,
    width: '70%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    marginTop: 20,
    marginHorizontal: 55,
  },
});

export default Header;