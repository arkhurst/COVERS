import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { width } from '../../constants/constants'
import { GlobalContext } from '../../context/GlobalState';

export default function Onboarding({navigation}){

    const [phoneNumber, setphoneNumber] = useState("") 
    const [loading, setLoading ] = useState(false)

    const { addPhoneNumber } = useContext(GlobalContext)

    function handleButton(){
        setLoading(true)
        setTimeout(() => {
            navigation.navigate('Verification')
            setLoading(false)
        },1500)
       addPhoneNumber(phoneNumber)
    }
    return(  
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.container}>
            <ImageBackground source={require('../../assets/COVERS.jpg')}  style={styles.imageBackground} >
                <KeyboardAvoidingView style={{justifyContent:'center', alignItems:'center', paddingHorizontal:15}} behavior="padding">
                    <Text style={styles.headerText}>COVERS</Text>
                    <Text style={styles.mainText}>(COVID-19 EMERGENCY RESPONSE SOLUTION)</Text>
                    <Text style={styles.minorText}>{"Join the effort by well meaning Africans using technology to slow down and eventually halt the spread of COVID-19"}</Text>
               <View style={{paddingTop:40, flexDirection:"row"}}>
                  <TextInput value={phoneNumber} onChangeText={(phoneNumber)=>{setphoneNumber(phoneNumber)}} keyboardType='number-pad' style={styles.textInput} />
                  <Text style={styles.phone}>Phone number</Text>
               </View>
               {phoneNumber.length < 10 ? 
                    <View style={styles.initialButtonState}>
                        <Text style={styles.minorText}>Get Started</Text>
                    </View>
               :
                   <TouchableOpacity onPress={handleButton} style={styles.button}>
                       {loading ? (
                           <ActivityIndicator  color="white" />
                       ):(
                         <Text style={styles.minorText}>Get Started</Text>
                       )} 
                    </TouchableOpacity>
                }       
               </KeyboardAvoidingView>
               
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    imageBackground:{
        flex:1,
        resizeMode:'cover' ,
        alignItems:'center',
        justifyContent:'center',
    },
    headerText: {
        fontSize: 55,
        fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.8,
        color:"white"
      },
      mainText: {
        fontSize: 15,
        fontWeight:'bold',
        color:'white'
      },
      minorText: {
        color:'white', 
        textAlign:'center', 
        fontWeight:'500',
         paddingTop:5
      },
      textInput: {
        height: 53,
        width:width*0.8,
        marginVertical: 10,
        paddingHorizontal: 20,
        backgroundColor:'white',
      },
      phone:{
        position:"absolute", 
        top:65, 
        left:220,
        fontWeight:"500"
      },
      initialButtonState:{
        justifyContent: 'center', 
        alignItems: "center", 
        height: 54, 
        width:width*0.8,
        backgroundColor: "#9f9f99"
      },
      button:{
         justifyContent: 'center', 
         alignItems: "center", 
         height: 54, 
         width:width*0.8,
         backgroundColor: "#4cbd7a",
      },
      

})