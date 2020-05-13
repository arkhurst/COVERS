import React, { useState } from 'react';
import { 
    View, 
    Text,
    Modal, 
    StyleSheet, 
    Image, 
    KeyboardAvoidingView, 
    ActivityIndicator, 
    Alert } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import RadioButtonRN from 'radio-buttons-react-native';
import { useQuery } from '@apollo/react-hooks';
import { getCountry } from '../../queries/queries';
import CountriesModal from './countriesModal';

export default function ProfileModal({visible, cancel}){

    const [country1, setCountry1] = useState({
        country: 'Ghana',
        countryInfo: {
          flag: 'https://corona.lmao.ninja/assets/img/flags/gh.png',
        }
    });
    const [country2, setCountry2] = useState({
        country: 'Ghana',
        countryInfo: {
          flag: 'https://corona.lmao.ninja/assets/img/flags/gh.png',
        }
    })
    const [showModal, setModal] = useState(false)
    const [check, setCheck] = useState(0)
    const { loading, data } = useQuery(getCountry)
    const [load, setLoad ] = useState(false)

  
    // Radio Button data
    const rbData = [
        {label:'Male' },
        {label:'Female'}
    ]

    // open modal
    function open(value){
        setModal(true)
        setCheck(value)
    }

    function close(){
        setModal(false)
    }

    function selectCountry(data){
        if(check === 1){
         setCountry1(data)
        }else{
            setCountry2(data)
        }
      setModal(false)
    }
 
    function updateProfile(){
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
            Alert.alert(
                "Success",
                "Profile Updated",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }]
              
              );
        },2000)
        
    }
    return(
        <KeyboardAvoidingView behavior="padding" >
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
                    {/* Travel History */}
                    <View style={styles.detailsItem}>
                          <Text style={styles.mainTitle}>Travel History</Text>
                          <Text style={styles.mainText}>Select the last two countries you visited (If Applicable)</Text>
                          <View style={styles.countryContainer}>
                             <TouchableOpacity onPress={() => open(1)} style={styles.selectCountry}>
                                <Image style={styles.flag} source={{uri: country1?.countryInfo?.flag||'N/A'}} />
                                <View style={{marginVertical:5}}>
                                  <Text style={styles.mainText}>{country1?.country||'N/A'}</Text>
                                </View>
                             </TouchableOpacity>
                             <TouchableOpacity onPress={() => open(2)} style={styles.selectCountry}>
                             <Image style={styles.flag} source={{uri: country2?.countryInfo?.flag||'N/A'}} />
                                <View style={{marginVertical:5}}>
                                    <Text style={styles.mainText}>{country2?.country||'N/A'}</Text>
                                </View>
                             </TouchableOpacity>
                             <CountriesModal selectCountry={selectCountry} loading={loading} data={data} visible={showModal} close={close} />
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
                    <TouchableOpacity onPress={updateProfile} style={styles.button}>
                        {load ? (
                            <ActivityIndicator />
                        ):(
                          <Text style={[styles.mainText],{color:'white'}}>Update Profile</Text>
                        )}
                          
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        </KeyboardAvoidingView>
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
        borderColor:'#dedede',
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
        borderColor:'grey',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        height:52
    },
    flag:{
        width:40,
        height:25,
    }
})