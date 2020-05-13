import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Header from '../../components/header/header';
import LottieView from 'lottie-react-native';
import * as reportAnim from '../../assets/lottie/reports.json';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default function ReportScreen(){
    return(
        <View style={styles.container}>
            <Header>
                <Text>Case Report</Text>
            </Header>
            <View style={styles.lottieContainer}>
                <View style={{marginVertical:35}}>
                  <LottieView style={styles.lottie} source={reportAnim} autoPlay loop />
                </View>
                <View style={{paddingTop:60, justifyContent:'space-between', alignItems:'center'}}>
                <Text style={styles.mainText}>You have not made any case report</Text>
                <TouchableOpacity style={styles.button} >
                     <Text style={styles.mainText}>Make Case Report</Text>
                </TouchableOpacity>
                </View>    
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        backgroundColor:'white'
    },
    lottieContainer:{
        alignItems:'center',
       
    },
    lottie:{
        height:height*0.2,
        opacity:0.8   
    },
    button:{
        height:50,
        width:width*0.45,
        borderStyle: 'dashed',
        borderRadius: 1,
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    mainText:{
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.2,
        color:'grey'
    },
})