import React from 'react';
import { View, Text, Modal, StyleSheet, Keyboard } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import RadioButtonRN from 'radio-buttons-react-native';

export default function ProfileModal({visible, cancel}){

    const data = [
        {
        label:'Male'
        },
        {
        label:'Female'
       }
    ]

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
                      <Text style={styles.mainText}>Enter Age</Text>
                      <TextInput keyboardType="number-pad" style={styles.textInput}>30</TextInput>
                    </View>
                    {/* Radio buttons */}
                    <View>
                        <RadioButtonRN 
                          data={data}
                          animationTypes={['shake']}
                          circleSize={16}
                          initial={3}
                          box={false}
                          activeColor="black"
                          inactiveColor="grey"
                          textStyle={{ fontFamily:'AirbnbCereal-Bold',letterSpacing:-0.4,}}
                          icon={
                              <AntDesign 
                                name="checkcircle"
                                size={20}
                                // color="#2c9dd1"
                              />
                          }
                        />
                    </View>
                    {/* Travel History */}
                    <View style={styles.detailsItem}>
                          <Text style={styles.mainTitle}>Travel History</Text>
                          <Text style={styles.mainText}>Select the last two countries you visited (If Applicable)</Text>
                          <View style={styles.countryContainer}>
                             <TouchableOpacity style={styles.selectCountry}>

                             </TouchableOpacity>
                             <TouchableOpacity style={styles.selectCountry}>

                             </TouchableOpacity>
                          </View>
                    </View>
                    {/* Medical professional */}
                    <View>
                       <Text style={styles.mainTitle}>Medical Professional Information</Text>
                       <Text style={styles.mainText}>Applicable if you are a health worker</Text>
                       <View style={styles.detailsItem}>
                            <Text style={styles.mainText}>Health License Number</Text>
                            <TextInput style={styles.textInput} keyboardType="number-pad" />
                       </View>
                    </View>
                    {/* Button */}
                    <TouchableOpacity style={styles.button}>
                          <Text style={[styles.mainText],{color:'white'}}>Update Profile</Text>
                    </TouchableOpacity>
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
    mainText:{
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.2,
        color:'grey'
    },
    detailsItem:{
        paddingTop:20
    },
    textInput:{
        borderWidth:StyleSheet.hairlineWidth,
        height:50,
        marginVertical:10,
        borderColor:'grey',
        paddingHorizontal:20
    },
    countryContainer:{
       flexDirection:'row',
       marginVertical:30,
       justifyContent:'center'   
    },
    selectCountry:{
        width:180,
        height:120,
        borderRadius:10,
        borderWidth:1.5,
        marginHorizontal:5,
        borderColor:'grey'
    },
    button:{
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        height:52
    }
})