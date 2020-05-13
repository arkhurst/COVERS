import React from 'react';
import {View, Text ,Modal, StyleSheet} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import RadioButtonRN from 'radio-buttons-react-native';
import Constants from 'expo-constants';


export default function ReportModal({close, visible}){

    // Radio Button data
    const rbData = [
        {label:'Male' },
        {label:'Female'}
    ]
    return(
        <Modal visible={visible} animationType="slide" presentationStyle={'pageSheet'} >
            <View style={styles.container}>
               <View style={styles.header}>
                  <Text style={styles.headerTitle}>Make Report</Text>
                  <TouchableOpacity onPress={close}>
                    <Ionicons name="ios-close" size={40} />
                  </TouchableOpacity>
                </View>
                <View style={styles.detailsItem}>
                    <Text style={styles.mainTitle}>Who are you reporting?</Text>
                       {/* Radio buttons */}
                       <View>
                        <RadioButtonRN 
                          data={rbData}
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
                </View>
                <View style={styles.detailsItem}>
                    <Text style={styles.mainTitle}>Location or Digital Address</Text>
                    <TextInput placeholder="eg. GA-492-74" keyboardType="number-pad" style={styles.textInput} />
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{justifyContent:'space-between'}}>
                        <Text style={styles.mainTitle}>Nearest Landmark</Text>
                        <TextInput placeholder="eg. goil filling station" keyboardType="number-pad" style={[styles.landMark]} />
                        
                    </View>
                    <View style={{justifyContent:'space-between'}}>
                    <Text style={styles.mainTitle}>Alternate Contact</Text>
                    <TextInput placeholder="Contact" keyboardType="number-pad" style={styles.textInput} />
                    </View>
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
        width:'100%',
        marginVertical:10,
        borderColor:'#dedede',
        paddingHorizontal:20,
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.2,       
    },
    landMark:{
        borderWidth:StyleSheet.hairlineWidth,
        height:50,
        width:'120%',
        marginVertical:10,
        borderColor:'#dedede',
        paddingHorizontal:20,
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.2,  
    }
})