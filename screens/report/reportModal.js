import React,{ useState, useContext} from 'react';
import {View, Text ,Modal, StyleSheet, ActivityIndicator, Alert} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import RadioButtonRN from 'radio-buttons-react-native';
import Constants from 'expo-constants';
import { width,height } from '../../constants/constants';
import { GlobalContext } from '../../context/GlobalState';


export default function ReportModal({close, visible}){

    const [load, setLoad ] = useState(false)
    const [reportFor, setReportFor] = useState('')
    const [address, setAddress] = useState('')
    const [landMark, setLandMark] = useState('')
    const [contact, setContact] = useState('')
    const [description, setDescription] = useState('')

    const { makeCaseReport } = useContext(GlobalContext)
    // Radio Button data
    const rbData = [
        {label:'Self' },
        {label:'Other Individual'}
    ]

    function submitReport(){
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
            Alert.alert(
                "Success",
                "Case submitted",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }]
              
              );
              const newReport = {
                id: Math.floor(Math.random() * 100000000),
                reportFor:'Other',
                landMark,
                contact,
                address,
                description
            }
            makeCaseReport(newReport) 
        },2000)
      
    }
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
                    <TextInput value={address} onChangeText={(address) => setAddress(address)} placeholder="eg. GA-492-74" keyboardType="number-pad" style={styles.textInput} />
                    <View style={{flexDirection:'row'}}>
                    <View style={{justifyContent:'space-between'}}>
                        <Text style={styles.mainTitle}>Nearest Landmark</Text>
                        <TextInput value={landMark} onChangeText={(landMark) => setLandMark(landMark)} placeholder="eg. goil filling station" style={styles.landMark} />
                        
                    </View>
                    <View style={{justifyContent:'space-between', marginLeft:10}}>
                    <Text style={styles.mainTitle}>Alternate Contact</Text>
                    <TextInput value={contact} onChangeText={(contact) => setContact(contact)} placeholder="Contact" keyboardType="number-pad" style={styles.textInput} />
                    </View>
                    </View>
                    <Text style={styles.mainTitle}>Description</Text>
                    <TextInput value={description} onChangeText={(description) => setDescription(description)} placeholder="Type something" style={styles.description} />
                </View>
                </View>
                 {/* Button */}
                 <View style={{ paddingHorizontal:20,marginVertical:50}}>
                 <TouchableOpacity onPress={submitReport} style={styles.button}>
                        {load ? (
                            <ActivityIndicator />
                        ):(
                          <Text style={[styles.mainText],{color:'white'}}>Report Case</Text>
                        )}
                          
                    </TouchableOpacity>
                    </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:Constants.statusBarHeight ,
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
        width:width*0.35,
        marginVertical:10,
        borderColor:'#dedede',
        paddingHorizontal:20,
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.2,       
    },
    landMark:{
        borderWidth:StyleSheet.hairlineWidth,
        height:50,
        width:width*0.5,
        marginVertical:10,
        borderColor:'#dedede',
        paddingHorizontal:20,
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.2,  
    },
    description:{
        borderWidth:StyleSheet.hairlineWidth,
        height:height*0.11,
        marginVertical:10,
        borderColor:'#dedede',
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.2,  
        paddingBottom:60,
        paddingHorizontal:10
    },
    button:{
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        height:52,
        alignItems:'center'
    },
    mainText:{
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.2,
        color:'grey'
    },
    
})