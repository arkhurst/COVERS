import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default function CaseReports({reportingFor,contact,description}){
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginVertical:10}}>
                <Text style={styles.mainTitle}>{reportingFor}</Text>
                <Text style={styles.mainText}>Thu Apr 16 2020</Text>
            </View>
            <Text style={styles.book}>{description}</Text>
            <Text style={styles.book}>{contact}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginVertical:20,
        marginHorizontal:20
    },
      mainText:{
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.6,
        color:'grey'
    },
    mainTitle:{
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.6,
        fontSize:15
    },
    book:{
        fontFamily:'AirbnbCereal-Book',
        letterSpacing:-0.3,
        fontSize:14
    }
})