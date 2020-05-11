import React from 'react';
import { View, Text, Modal, StyleSheet, Keyboard } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

export default function ProfileModal({visible, cancel}){

    // hide keypad on iOS
    // function hide(){
    //     Keyboard.dismiss()
    // }
    return(
        <Modal visible={visible} presentationStyle={'pageSheet'} animationType={'slide'} >
            <View style={styles.container}>
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Profile</Text>
                  <TouchableOpacity onPress={cancel}>
                    <Ionicons name="ios-close" size={40} />
                  </TouchableOpacity>
                </View>
                <View style={styles.profileDetailsContainer}>
                    <Text style={styles.mainTitle}>Personal Details</Text>
                {/* Age Details */}
                    <View style={styles.detailsItem}>
                      <Text>Enter Age</Text>
                      <TextInput keyboardType="number-pad" style={styles.textInput}>30</TextInput>
                    </View>
                </View>
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
    header:{
       flexDirection:'row',
       justifyContent:'space-between'
    },
    headerTitle:{
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.2,
        fontSize:32
    },
    profileDetailsContainer:{
        paddingTop:30,
    },
    mainTitle:{
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.2,
    },
    detailsItem:{
        paddingTop:20
    },
    textInput:{
        borderWidth:StyleSheet.hairlineWidth,
        height:50,
        marginVertical:20,
        borderColor:'grey',
        paddingHorizontal:20
    }
})