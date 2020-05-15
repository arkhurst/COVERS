import React, { useLayoutEffect, useContext } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { width, height } from '../../constants/constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { GlobalContext } from '../../context/GlobalState';

export default function Verification({navigation}){

    const { phoneNumber } = useContext(GlobalContext)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft:() => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:'row', paddingHorizontal:15, alignItems:'center'}}>
                    <FontAwesome5 style={{marginRight:4}} name="chevron-left" size={24} color="black" />
                    <Text style={styles.minorText}>Change phone</Text>
                </TouchableOpacity>
            )
        })
    },[navigation])

    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={{borderBottomWidth:1}}>
                    <View style={{marginVertical:60,alignItems:'center'}}>
                        <Text style={styles.mainTitle}>Verification Pin</Text>
                        <View style={{paddingTop:20, paddingHorizontal:45}}>
                            <Text style={styles.minorText}>Enter the Verification code </Text>
                            <Text style={styles.minorText}>we just sent you on</Text>
                            <Text style={styles.mainTitle}>{phoneNumber}</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginVertical:30}}>
                 <TouchableOpacity onPress={() => navigation.navigate('Tabs')} style={styles.button}>
                    <Text style={styles.btnText}>Submit code</Text>
                </TouchableOpacity> 
              </View>
              <Text>Have you not received your code?</Text>
              <View style={{marginVertical:20}}>
              <Text>Resend code</Text>
              </View>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        backgroundColor:"white"
    },
    body:{
        justifyContent:"center",
        alignItems:'center',
        marginVertical:height*0.1
    },
    mainTitle: {
        fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.5,
        fontSize:16,
        textAlign:'center'
      },
      minorText:{
        fontFamily: 'AirbnbCereal-Book',
        letterSpacing: -0.5,
        fontSize:15,
        textAlign:'center'
      },
      button:{
        justifyContent: 'center', 
        alignItems: "center", 
        height: 54, 
        backgroundColor: "black",
        width:width*0.7,
     },
     btnText:{
        fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.5,
        color:'white'
     }
})