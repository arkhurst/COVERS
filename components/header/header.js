import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Modal from 'react-native-modalbox';
import ProfileModal from './profileModal';
import { height } from '../../constants/constants';
import { Notification } from '../../data/data';



const Header = props => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <View style={{ borderBottomWidth: 0.8, borderColor: '#dedede' }}>
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
          <Ionicons name="ios-contact" size={39} />
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
            <FlatList
              data={Notification}
              renderItem={({ item }) => <MessageList {...item} />}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </Modal>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#dedede',
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
    fontSize: 30,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.6,
  },

  modal: {
    height: height * 0.9,
    backgroundColor: 'white',
    marginTop: 70,
    borderRadius: 20,
    shadowColor: 'black',
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
    fontSize: 16,
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
});

export default Header;