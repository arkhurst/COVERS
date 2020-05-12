import React from 'react';
import { View, Text, Modal, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';


export default function CountriesModal({visible, close}){
    return(
        <Modal visible={visible} animationType={'slide'} >
            <View style={styles.container}>
                <Button title="close" onPress={close} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:Constants.statusBarHeight,
        paddingHorizontal:20
    },
})