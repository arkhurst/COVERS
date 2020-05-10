import React from 'react';
import { View, Text, Modal, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default function ProfileModal({visible, cancel}){
    return(
        <Modal visible={visible} presentationStyle={'pageSheet'} animationType={'slide'} >
            <View style={styles.modalContainer}>
              <Button title="close" onPress={cancel} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:Constants.statusBarHeight
    },
    modalContainer:{
       
    }
})