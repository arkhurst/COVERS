import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Header from '../../components/header/header';
import SettingsCard from '../../components/settings/settingsCard';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AssessmentModal from './modals/assessmentModal';
import FAQModal from './modals/FAQModal';
import TestinCenters from './modals/testingCenter';
import ProfileModal from '../../components/header/profileModal';


export default function SettingsScreen(){

    const [showAssessment,setAssessment ]= useState(false)
    const [showFAQ, setFAQ] = useState(false)
    const [showTesting, setTesting] = useState(false)
    const [showProfile, setProfile] = useState(false)

    function open(value){
         if(value === 1){
          return   setAssessment(true)
        }else if(value === 2){
           return setFAQ(true)
        }else if (value === 3 ){
            return setTesting(true)
        }else {
            return setProfile(true)
        }
       
    }
    function close(value){
       if(value === 1){
         return setAssessment(false)
       }else if (value===2){
          return setFAQ(false)
       }else if (value === 3){
           return setTesting(false)
       }else{
           return setProfile(false)
       }
    }

    // // Function to just open Profile
    // function openProfile(){

    // }
    return(
        <View style={styles.container}>
            <Header>
                <Text>Settings</Text>
            </Header>
            {/* Assessment */}
           <TouchableOpacity onPress={() => open(1)} >
               <SettingsCard title="Self Assessement" body="Ascertain your covid-19 risk using our screenin tool" />
               <AssessmentModal visible={showAssessment} close={close} />
             </TouchableOpacity>
            {/* FAQs */}
             <TouchableOpacity onPress={() => open(2)} >   
                <SettingsCard title="FAQs" body="Get answers to Frequently Asked Questions"/>
                <FAQModal visible={showFAQ} close={close} />
             </TouchableOpacity>
            {/* Testing Centers */}
            <TouchableOpacity onPress={() => open(3)} >
                <SettingsCard title="Testing Centers" body='View testing centers near to you' />
                <TestinCenters visible={showTesting} close={close} />
            </TouchableOpacity>
            {/* Personal Details */}
            <TouchableOpacity onPress={() => open()}>
                <SettingsCard title="Personal Details" body="View & update personal details" />
                <ProfileModal visible={showProfile} cancel={close} />
            </TouchableOpacity>
            {/* Audio */}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        backgroundColor:'white'
    }
})