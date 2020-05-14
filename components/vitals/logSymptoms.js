import React,{useContext, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { GlobalContext } from '../../context/GlobalState';

const Card = ({value,data,sign, selected,id}) => {
    return(
        <View key={id} >
        {selected ? (
              <TouchableOpacity style={styles.selectedValue}>
                 <Text style={styles.selectedNumber}>{value}</Text>
              </TouchableOpacity>
          ):(
            <TouchableOpacity  style={styles.values}>
              <Text style={styles.number}>{value}</Text>
            </TouchableOpacity>
          )}
       <View style={{marginHorizontal:10, paddingTop:10}}>
          <Text style={styles.description}>{sign}</Text>
        </View>
      </View>
    )
}

export default function LogSymptoms(){

    const { symptoms } = useContext(GlobalContext)

    return(
        <>
        <ScrollView showsVerticalScrollIndicator={false} >
         <View style={{paddingTop:10}}>
             <View style={styles.container}>
                 <View style={{paddingVertical:10}}>
                   <Text style={styles.mainTitle}>Dry Cough</Text>
                   <View style={{flexDirection:'row', justifyContent:'space-between',paddingTop:10}}>
                     {symptoms.map(symptom => (
                         <Card data={symptom}  {...symptom}/>
                   ))}
                 </View>
                 </View>
             </View>
         </View>
         {/* Fever */}
         <View style={{paddingTop:10}}>
             <View style={styles.container}>
                 <View style={{paddingVertical:10}}>
                   <Text style={styles.mainTitle}>Fever</Text>
                   <View style={{flexDirection:'row', justifyContent:'space-between',paddingTop:10}}>
                   {symptoms.map(symptom => (
                         <Card data={symptom}  {...symptom}/>
                   ))}
                 </View>
                 </View>
             </View>
         </View>
         {/* Aches and Pains */}
         <View style={{paddingTop:10}}>
             <View style={styles.container}>
                 <View style={{paddingVertical:10}}>
                   <Text style={styles.mainTitle}>Aches & Pains</Text>
                   <View style={{flexDirection:'row', justifyContent:'space-between',paddingTop:10}}>
                   {symptoms.map(symptom => (
                         <Card data={symptom}  {...symptom}/>
                   ))}
                 </View>
                 </View>
             </View>
         </View>
         {/* Shortness of breath */}
         <View style={{paddingTop:10}}>
             <View style={styles.container}>
                 <View style={{paddingVertical:10}}>
                   <Text style={styles.mainTitle}>Shortness of breath</Text>
                   <View style={{flexDirection:'row', justifyContent:'space-between',paddingTop:10}}>
                   {symptoms.map(symptom => (
                         <Card data={symptom}  {...symptom}/>
                   ))}
                 </View>
                 </View>
             </View>
         </View>
          {/* Sore Throat */}
          <View style={{paddingTop:10}}>
             <View style={styles.container}>
                 <View style={{paddingVertical:10}}>
                   <Text style={styles.mainTitle}>Sore Throat</Text>
                   <View style={{flexDirection:'row', justifyContent:'space-between',paddingTop:10}}>
                   {symptoms.map(symptom => (
                         <Card data={symptom}  {...symptom}/>
                   ))}
                 </View>
                 </View>
             </View>
         </View>
         </ScrollView>
          {/* Button */}
          <TouchableOpacity style={styles.button}>
               <Text style={[styles.description], {color:'white'}}>Log Vitals</Text>
           </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.2,  
        paddingHorizontal:20,
        paddingVertical:10,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15
    },
    values:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:1,
        justifyContent:"center",
        alignItems:'center',
    },
    selectedValue:{
        width:50,
        height:50,
        borderRadius:25,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#738096'
    },
    mainTitle: {
        fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.5,
      },
      number: {
        fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.4,
        fontSize:16
      },
      selectedNumber: {
        fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.4,
        fontSize:16,
        color:'white'
      },
      button:{
          backgroundColor:'#738096',
          height:52,
          justifyContent:'center',
          alignItems:"center",
          marginBottom:30
      },
      description:{
        fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.4,
        color:'grey'
      }
})