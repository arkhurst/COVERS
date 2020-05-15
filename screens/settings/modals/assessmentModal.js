import React from 'react';
import { View, Text, StyleSheet, Modal} from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { height } from '../../../constants/constants';

export default function AssessmentModal({close, visible}){
    return(
        <Modal visible={visible} presentationStyle={'pageSheet'} animationType={'slide'} >
            <View style={styles.container}>
              <View style={{borderBottomWidth:StyleSheet.hairlineWidth, borderColor:'#dedede'}}>
                <View style={styles.header}>
                    <Text  style={styles.headerTitle}>Self Assessment</Text>
                    <TouchableOpacity onPress={() => close(1)} >
                        <Ionicons name='ios-close' size={40} />
                    </TouchableOpacity>
                </View>
             </View>  
                <View style={{marginVertical:20}}>
                    <Text style={styles.mainTitle}>Getting Started!</Text>
                    <Text style={styles.mainText}>
                        {"This tool is intended to help you understand what to do next about COVID-19. You'll answer a few questions about your symptoms, travel and contact you've had with others"}
                    </Text>
                </View>
                <View>
                    <Text style={styles.mainTitle}>Note</Text>
                    <Text style={styles.mainText}>
                        {"Recommendations provided by this tool do not constitute medidal advice and should not be used to diagnose or treat medical conditions"}
                    </Text>
                   <View style={{marginVertical:20}}>
                    <Text style={styles.mainText}>
                        {"Let's all look out of for each other by knowing our status, trying not to infect others, and reserving care for those in need"}
                    </Text>
                    </View> 
                </View>
                <View style={{marginTop:height*0.34}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={[styles.mainTitle], {color:'white'}}>Start Assessment...</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:Constants.statusBarHeight,
      paddingHorizontal:20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:20
      },
    headerTitle: {
        fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.2,
        fontSize: 32,
      },
      mainTitle: {
        fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.5,
        fontSize:15
      },
      mainText: {
        fontFamily: 'AirbnbCereal-Book',
        letterSpacing: -0.1,
      },
      button:{
          height:53,
          backgroundColor:"black",
          justifyContent:"center",
          alignItems:'center',
      }

})